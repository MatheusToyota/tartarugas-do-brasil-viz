import { Card, CardContent } from "@/components/ui/card";

const Sobre = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <Card className="animate-slide-up shadow-card">
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nossa História</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nossa Equipe</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nossos Objetivos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Entre em Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Sobre;
