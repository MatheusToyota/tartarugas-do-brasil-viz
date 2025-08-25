import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TartarugaCabecuda = () => {
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
              Tartaruga-cabeçuda
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Caretta caretta
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
              <div className="text-center text-muted-foreground">
                <div className="text-6xl mb-2">📷</div>
                <p>Espaço para imagem principal</p>
              </div>
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
                <p className="text-foreground">Águas oceânicas e costeiras</p>
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
                <p className="text-foreground">Setembro a Março</p>
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
                      <strong>Nome científico:</strong> Caretta caretta<br/>
                      <strong>Família:</strong> Cheloniidae<br/>
                      <strong>Nomes populares:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm">Imagem de classificação</p>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
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
                      <strong>Tamanho e peso:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Cabeça robusta:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm">Características físicas</p>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">3. Distribuição e Hábitat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">🗺️</div>
                    <p>Mapa de distribuição</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ocorrência global:</strong> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
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
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Dieta carnívora:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">🦀</div>
                      <p className="text-sm">Alimentação</p>
                    </div>
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
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">🥚</div>
                    <p>Processo reprodutivo</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">6. Ameaças</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Pesca incidental:</strong> Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
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
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-2">🛡️</div>
                    <p>Esforços de conservação</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  Sed ut non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TartarugaCabecuda;