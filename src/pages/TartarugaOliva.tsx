import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
import olivaImg1 from "@/assets/img/Tartaruga-Olivia/Tartaruga-Olivia(1).jpg";
import olivaImg2 from "@/assets/img/Tartaruga-Olivia/Tartaruga-Olivia(1).jpg";
import olivaImg3 from "@/assets/img/Tartaruga-Olivia/ANI080-00517-1920x1278.jpg";
import olivaImg4 from "@/assets/img/Tartaruga-Olivia/1.jpg";
import olivaImg5 from "@/assets/img/Tartaruga-Olivia/439772.jpg";
import olivaImg6 from "@/assets/img/Tartaruga-Olivia/Olive_ridley_hatchling_in_Mexico_(8218893828).jpg";
import olivaImg7 from "@/assets/img/Tartaruga-Olivia/Tartaruga-Olivia(5).jpg";

const TartarugaOliva = () => {
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
              Tartaruga-oliva
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Lepidochelys olivacea
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={olivaImg1}
                alt="Tartaruga-oliva principal"
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
                <p className="text-foreground">Águas oceânicas tropicais</p>
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
                <p className="text-foreground">Agosto a Fevereiro</p>
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
                      <strong>Nome científico:</strong> Lepidochelys olivacea<br/>
                      <strong>Família:</strong> Cheloniidae<br/>
                      <strong>Nomes populares:</strong> Nomes populares no Brasil: tartaruga-de-oliva, tartaruga-pequena, tartaruga-comum, xibirro.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={olivaImg2}
                      alt="Classificação tartaruga-oliva"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-de-oliva é a menor entre as tartarugas marinhas, mas é famosa pelo fenômeno único das "arribadas" — eventos de desova em massa que podem reunir milhares de fêmeas na mesma praia, de forma sincronizada, em poucos dias. No Brasil, essa espécie tem como principal área de reprodução o litoral de Sergipe, sendo de extrema importância para a conservação regional.
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
                      <strong>Tamanho compacto:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Coloração olivácea:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={olivaImg3}
                      alt="Características físicas tartaruga-oliva"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Distribuição e Hábitat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={olivaImg4}
                    alt="Mapa de distribuição tartaruga-oliva"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Distribuição global:</strong> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
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
                      <strong>Dieta onívora:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={olivaImg5}
                      alt="Alimentação tartaruga-oliva"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Reprodução e Ciclo de Vida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={olivaImg6}
                    alt="Desovas sincronizadas tartaruga-oliva"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Arribada:</strong> Conhecido por suas desovas sincronizadas em massa. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos.
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
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={olivaImg7}
                      alt="Principais ameaças tartaruga-oliva"
                      className="object-cover w-full h-full rounded-lg"
                    />
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
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Sed ut non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TartarugaOliva;