import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { MessageCircle, Send, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface Comment {
  id: string;
  author_name: string;
  author_email: string;
  content: string;
  created_at: string;
}

const commentSchema = z.object({
  author_name: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome muito longo"),
  author_email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  content: z.string().trim().min(10, "Comentário deve ter pelo menos 10 caracteres").max(1000, "Comentário muito longo")
});

const Comentarios = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Load comments from Supabase
  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Erro ao carregar comentários:', error);
      toast({
        title: "Erro ao carregar comentários",
        description: "Não foi possível carregar os comentários. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const checkRateLimit = async (email: string): Promise<boolean> => {
    try {
      const oneDayAgo = new Date();
      oneDayAgo.setDate(oneDayAgo.getDate() - 1);

      const { data, error } = await supabase
        .from('comments')
        .select('id')
        .eq('author_email', email.toLowerCase())
        .gte('created_at', oneDayAgo.toISOString())
        .limit(1);

      if (error) throw error;
      return (data?.length || 0) > 0;
    } catch (error) {
      console.error('Erro ao verificar limite:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Validate input
      const validatedData = commentSchema.parse({
        author_name: authorName,
        author_email: authorEmail,
        content: newComment
      });

      // Check rate limit
      const hasRecentComment = await checkRateLimit(validatedData.author_email);
      
      if (hasRecentComment) {
        toast({
          title: "Limite atingido",
          description: "Você só pode enviar 1 comentário por dia. Tente novamente amanhã.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Insert comment
      const { error } = await supabase
        .from('comments')
        .insert({
          author_name: validatedData.author_name,
          author_email: validatedData.author_email.toLowerCase(),
          content: validatedData.content
        });

      if (error) throw error;

      toast({
        title: "Comentário publicado!",
        description: "Seu comentário foi enviado com sucesso."
      });

      // Clear form and reload comments
      setNewComment("");
      setAuthorName("");
      setAuthorEmail("");
      await loadComments();

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        console.error('Erro ao enviar comentário:', error);
        toast({
          title: "Erro ao enviar comentário",
          description: "Não foi possível enviar seu comentário. Tente novamente.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Comentários
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Compartilhe suas opiniões e experiências sobre as tartarugas marinhas
          </p>
        </div>

        {/* Formulário de novo comentário */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Deixe seu comentário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={authorEmail}
                  onChange={(e) => setAuthorEmail(e.target.value)}
                  className="w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Escreva seu comentário aqui..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[120px] w-full"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Enviando..." : "Publicar Comentário"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Lista de comentários */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Comentários da comunidade ({comments.length})
          </h2>
          {isLoading ? (
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">Carregando comentários...</p>
              </CardContent>
            </Card>
          ) : comments.length === 0 ? (
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Seja o primeiro a comentar!
                </p>
              </CardContent>
            </Card>
          ) : (
            comments.map((comment) => (
              <Card key={comment.id} className="shadow-card hover-scale">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">
                          {comment.author_name}
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          {new Date(comment.created_at).toLocaleDateString('pt-BR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default Comentarios;
