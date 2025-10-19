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
          </div>

          <Card className="animate-slide-up shadow-card">
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Quem somos?</h2>
                <p className="text-muted-foreground leading-relaxed">
                 Somos um grupo composto por cinco estudantes do Instituto Federal de Ciência e Tecnologia de Salto (SP), dedicados à divulgação científica e à preservação ambiental. Este projeto, Tartarugas do Brasil, foi desenvolvido com o intuito de informar e conscientizar o público sobre a importância das tartarugas brasileiras, suas espécies, habitats e os desafios que enfrentam para sobreviver em um ambiente cada vez mais ameaçado pela ação humana.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nosso Trabalho</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso trabalho reúne pesquisa biológica, produção de conteúdo educativo e desenvolvimento web, integrando ciência e tecnologia em uma proposta acessível e interativa. O site foi criado utilizando a plataforma Lovable, uma ferramenta moderna que permite a criação de aplicações web de forma intuitiva, sem a necessidade de programação avançada. Essa escolha possibilitou que o grupo focasse tanto na qualidade científica do conteúdo quanto na experiência do usuário.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Nossos Objetivos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Acreditamos que a união entre educação e tecnologia é essencial para a formação de uma sociedade mais consciente e responsável. Por meio deste projeto, buscamos contribuir para a valorização da fauna brasileira e incentivar a preservação das espécies que compõem nossa rica biodiversidade.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Entre em Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Email: teste@address.com
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
