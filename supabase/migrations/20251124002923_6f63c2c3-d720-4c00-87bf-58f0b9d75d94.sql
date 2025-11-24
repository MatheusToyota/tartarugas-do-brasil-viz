-- Fix search_path for hash_email function
CREATE OR REPLACE FUNCTION public.hash_email(email text)
RETURNS text
LANGUAGE plpgsql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  RETURN encode(
    digest(
      convert_to(lower(trim(email)) || 'tartaruga_salt_2025', 'UTF8'),
      'sha256'
    ),
    'hex'
  );
END;
$$;

-- Fix search_path for submit_comment function
CREATE OR REPLACE FUNCTION public.submit_comment(
  p_author_name text,
  p_author_email text,
  p_content text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_email_hash text;
  v_last_comment_time timestamptz;
  v_new_comment_id uuid;
BEGIN
  -- Validate inputs
  IF trim(p_author_name) = '' THEN
    RETURN json_build_object('error', 'Name cannot be empty');
  END IF;
  
  IF trim(p_author_email) = '' OR p_author_email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RETURN json_build_object('error', 'Invalid email address');
  END IF;
  
  IF trim(p_content) = '' THEN
    RETURN json_build_object('error', 'Comment cannot be empty');
  END IF;

  -- Hash the email
  v_email_hash := public.hash_email(p_author_email);
  
  -- Check rate limit (24 hours)
  SELECT created_at INTO v_last_comment_time
  FROM public.comments
  WHERE email_hash = v_email_hash
  ORDER BY created_at DESC
  LIMIT 1;
  
  IF v_last_comment_time IS NOT NULL AND 
     v_last_comment_time > (now() - interval '24 hours') THEN
    RETURN json_build_object(
      'error', 
      'You can only submit one comment per 24 hours. Please try again later.'
    );
  END IF;
  
  -- Insert comment
  INSERT INTO public.comments (author_name, author_email, content, email_hash)
  VALUES (p_author_name, p_author_email, p_content, v_email_hash)
  RETURNING id INTO v_new_comment_id;
  
  RETURN json_build_object('success', true, 'id', v_new_comment_id);
END;
$$;