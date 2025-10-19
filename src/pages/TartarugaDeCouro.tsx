
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Importação das imagens
import couroImg1 from "@/assets/img/Tartaruga-de-Couro/640px-Close_up_of_dermochelys_coriacea_leatherback_turtle.jpg";
import couroImg2 from "@/assets/img/Tartaruga-de-Couro/Leatherback_Turtle_eggs_hatching_at_Eagle_Beach,_Aruba_(cropped).jpg";
import couroImg3 from "@/assets/img/Tartaruga-de-Couro/Leatherback_closeup_benson_swfsc.jpg";
import couroImg4 from "@/assets/img/Tartaruga-de-Couro/Leatherback_sea_turtle_(30059232178).jpg";
import couroImg5 from "@/assets/img/Tartaruga-de-Couro/Leatherback_sea_turtle_on_the_beach_Tinglar_(5839996429).jpg";
import couroImg6 from "@/assets/img/Tartaruga-de-Couro/Lederschildkr_dermochelys-coriacea-senkenberg_hg.jpg";

const TartarugaDeCouro = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gradient-subtle min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-6 hover-scale"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tartaruga-de-couro
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Dermochelys coriacea
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={couroImg1}
                alt="Tartaruga-de-couro principal"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Shield className="w-5 h-5" />
                  Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">Vulnerável</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Habitat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Oceanos profundos</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="w-5 h-5" />
                  Reprodução
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">Outubro a Abril</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Content */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">1. Classificação e Nomes Populares</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Nome científico:</strong> Dermochelys coriacea<br/>
                      <strong>Família:</strong> Dermochelyidae<br/>
                      <strong>Nomes populares:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={couroImg2}
                      alt="Classificação tartaruga-de-couro"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  A maior tartaruga marinha do mundo, distinguida por não possuir casco rígido. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">2. Características Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Tamanho gigantesco:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Carapaça coriácea:</strong> Não possui casco rígido, mas sim uma carapaça coriácea. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={couroImg3}
                      alt="Características físicas tartaruga-de-couro"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Adaptações para águas profundas:</strong> Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Distribuição e Hábitat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={couroImg4}
                    alt="Distribuição tartaruga-de-couro"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Distribuição cosmopolita:</strong> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Migrações transoceânicas:</strong> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">4. Alimentação e Papel Ecológico</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Especialista em águas-vivas:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={couroImg5}
                      alt="Alimentação tartaruga-de-couro"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Controle de populações gelatinosas:</strong> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Reprodução e Ciclo de Vida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={couroImg6}
                    alt="Processo reprodutivo tartaruga-de-couro"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Ameaças</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Pesca incidental:</strong> Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Ingestão de plásticos:</strong> Confunde sacos plásticos com águas-vivas. Ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">⚠️</div>
                      <p className="text-sm">Principais ameaças</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">7. Conservação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A maior tartaruga marinha do mundo, especialista em águas-vivas e viajante dos oceanos profundos. Sed ut non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TartarugaDeCouro;