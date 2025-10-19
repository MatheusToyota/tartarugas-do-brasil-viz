
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Importação das imagens
import penteImg1 from "@/assets/img/Tartaruga-de-Pente/Eretmochelys_imbricata_485863712.jpg";
import penteImg2 from "@/assets/img/Tartaruga-de-Pente/Eretmochelys_imbricata_519872831.jpg";
import penteImg3 from "@/assets/img/Tartaruga-de-Pente/Eretmochelys_imbricata_Indonesia3.jpg";
import penteImg4 from "@/assets/img/Tartaruga-de-Pente/Hawksbill_Sea_Turtle,_Tavernier,_Florida_-_54256522485.jpg";
import penteImg5 from "@/assets/img/Tartaruga-de-Pente/Hawksbill_turtle_(Eretmochelys_imbricata)_Indonesia.jpg";
import penteImg6 from "@/assets/img/Tartaruga-de-Pente/Hawksbill_turtle_(Eretmochelys_imbricata)_Indonesia2.jpg";
import penteImg7 from "@/assets/img/Tartaruga-de-Pente/Sea_Turtle_Showing_Markings_In_East_Pacific.jpg";

const TartarugaDePente = () => {
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
              Tartaruga-de-pente
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Eretmochelys imbricata
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={penteImg1}
                alt="Tartaruga-de-pente principal"
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
                <p className="text-foreground font-medium">Criticamente ameaçada</p>
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
                <p className="text-foreground">Recifes de coral tropicais</p>
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
                <p className="text-foreground">Setembro a Abril</p>
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
                      <strong>Nome científico:</strong> Eretmochelys imbricata<br/>
                      <strong>Família:</strong> Cheloniidae<br/>
                      <strong>Nomes populares:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={penteImg2}
                      alt="Classificação tartaruga-de-pente"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Estado de conservação: Criticamente em Perigo segundo a Lista Vermelha da IUCN. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Proteção internacional: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
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
                      <strong>Formato da carapaça:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Alongada e ligeiramente serrilhada nas bordas posteriores.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Nadadeiras:</strong> Sunt in culpa qui officia deserunt mollit anim id est laborum. Longas e adaptadas para natação eficiente, permitindo viagens de milhares de quilômetros.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={penteImg3}
                      alt="Características físicas tartaruga-de-pente"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Glândulas de sal:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Adaptabilidade:</strong> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
                    src={penteImg4}
                    alt="Distribuição tartaruga-de-pente"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ocorrência global:</strong> Presente em mares tropicais e subtropicais de todo o planeta. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> É encontrada em praticamente todo o litoral, mas suas áreas mais importantes incluem o Atol das Rocas e Fernando de Noronha. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Migrações:</strong> Extremamente migratória, realiza deslocamentos significativos. Id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
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
                      A tartaruga-de-pente é um predador especializado em esponjas marinhas. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Dieta especializada:</strong> Esponjas, crustáceos, moluscos, corais moles, ouriços-do-mar, briozoários e algumas algas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={penteImg5}
                      alt="Alimentação tartaruga-de-pente"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Função ecológica:</strong> Ao controlar a população de esponjas, evita que elas dominem os recifes, permitindo o crescimento dos corais. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Interações tróficas:</strong> Atua como elo entre os recifes e o restante do ecossistema marinho. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
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
                    src={penteImg6}
                    alt="Processo reprodutivo tartaruga-de-pente"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Locais de desova no Brasil:</strong> Litoral norte da Bahia, Sergipe e litoral sul do Rio Grande do Norte. Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Temporada reprodutiva:</strong> No continente, de setembro a abril; nas ilhas oceânicas, de dezembro a junho. Et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ciclo reprodutivo:</strong> Uma única fêmea pode realizar de três a seis posturas por temporada, cada uma com 100 a 150 ovos. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Construção do ninho:</strong> As fêmeas saem do mar à noite, procurando praias com areia fofa. Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Incubação:</strong> Leva cerca de 60 dias. A temperatura da areia é determinante para o sexo dos filhotes. Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Risco inicial:</strong> Ao emergirem, os filhotes se orientam pela luminosidade natural, mas luzes artificiais podem desorientá-los. Ut et voluptates repudiandae sint et molestiae non recusandae.
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
                      <strong>Pesca incidental:</strong> Captura acidental em redes de emalhe, espinhéis e arrasto. Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Perda de habitat:</strong> Destruição de recifes de coral por pesca destrutiva, poluição e mudanças climáticas. Ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Poluição marinha:</strong> Ingestão de plásticos e resíduos flutuantes. Itaque earum rerum hic tenetur a sapiente delectus.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={penteImg7}
                      alt="Principais ameaças tartaruga-de-pente"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Histórico de exploração:</strong> Durante décadas, foi a espécie mais caçada para a indústria de artesanato devido ao valor do "casco de tartaruga". Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Mudanças climáticas:</strong> Alterações na temperatura e elevação do nível do mar afetam a proporção de sexos. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">7. Conservação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Projetos ativos:</strong> O Projeto TAMAR-ICMBio atua há mais de 40 anos na proteção de ninhos, marcação e monitoramento. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Áreas protegidas relevantes:</strong> Atol das Rocas, Fernando de Noronha, Parque Nacional Marinho de Abrolhos. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Medidas de manejo:</strong> Inclusão de dispositivos redutores de captura (TEDs), fiscalização contra comércio ilegal. Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Educação e conscientização:</strong> Trabalho direto com comunidades pesqueiras e programas de turismo sustentável. Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-de-pente é uma das joias vivas dos oceanos tropicais, reconhecida mundialmente por seu casco de beleza única e por sua ligação vital com a saúde dos recifes de coral. Aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TartarugaDePente;