import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MessageCircle, Send, User } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

const Comentarios = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Maria Silva",
      content: "Adorei o site! As informações sobre as tartarugas são muito completas e educativas.",
      date: "2024-01-15"
    },
    {
      id: 2,
      author: "João Santos",
      content: "Excelente iniciativa para conscientização sobre a conservação das tartarugas marinhas!",
      date: "2024-01-14"
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: authorName,
        content: newComment,
        date: new Date().toISOString().split('T')[0]
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setAuthorName("");
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
                />
              </div>
              <div>
                <Textarea
                  placeholder="Escreva seu comentário aqui..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[120px] w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <Send className="w-4 h-4 mr-2" />
                Publicar Comentário
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Lista de comentários */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Comentários da comunidade ({comments.length})
          </h2>
          {comments.map((comment) => (
            <Card key={comment.id} className="shadow-card hover-scale">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">
                        {comment.author}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {new Date(comment.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Comentarios;
