
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
                      <strong>Nomes populares:</strong> Nomes populares no Brasil: tartaruga-de-couro, tartaruga-gigante, tartaruga-de-pescoço-peludo.
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
                  A tartaruga-de-couro é a maior e mais pesada entre as tartarugas marinhas, reconhecida pela sua carapaça flexível e coriácea, que se assemelha a couro — daí seu nome. É uma espécie altamente migratória, capaz de atravessar oceanos e habitar águas tropicais, temperadas e até frias.
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
                      <strong>Tamanho e peso:</strong> Adultos podem medir entre 1,5 e 2 metros de comprimento de carapaça e pesar de 400 a 700 kg, podendo chegar a 900 kg em exemplares maiores.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Carapaça:</strong> Diferente das tartarugas comuns, não possui escamas rígidas; sua carapaça é formada por uma camada grossa de tecido fibroso e cartilaginoso, com nervuras longitudinais visíveis. Cor varia do preto ao cinza escuro com manchas esbranquiçadas.
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
                  <strong>Cabeça e nadadeiras:</strong> Grande e robusta, com bico forte, adaptada para capturar presas gelatinosas. Nadadeiras longas e poderosas, com bordas dentadas que facilitam o nado em mar aberto. <strong>Longevidade:</strong> Pode viver mais de 50 anos; a maturidade sexual ocorre por volta dos 12 a 20 anos.
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
                  <strong>Ocorrência global:</strong> Encontrada em todos os oceanos tropicais e temperados do mundo, incluindo o Atlântico, Pacífico e Índico, sendo a tartaruga marinha com a maior área de distribuição.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil e migração:</strong> Presente em todo o litoral, com áreas importantes de desova no Espírito Santo, Bahia e Ceará. Realiza longas migrações oceânicas, percorrendo milhares de quilômetros entre áreas de alimentação e reprodução.
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
                      <strong>Alimentação especializada:</strong> A tartaruga-de-couro é especializada em se alimentar de medusas e outros organismos gelatinosos, incluindo águas-vivas, salpas e caravelas.
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
                  <strong>Papel ecológico:</strong> Esse hábito alimentar ajuda a controlar populações de medusas, que em excesso podem desequilibrar ecossistemas marinhos. Contribui para a ciclagem de nutrientes ao se deslocar entre diferentes áreas oceânicas.
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
                  <strong>Áreas de desova no Brasil:</strong> Principalmente no litoral do Espírito Santo, Bahia e Ceará. <strong>Temporada:</strong> De outubro a março, com picos em novembro e dezembro. <strong>Ciclo reprodutivo:</strong> Fêmeas podem desovar de 5 a 7 vezes por temporada, com intervalos de aproximadamente 12 a 15 dias. Ninhos contêm cerca de 80 a 90 ovos, incubados por cerca de 60 dias. A temperatura da areia influencia o sexo dos filhotes, assim como nas outras tartarugas marinhas.
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
                      <strong>Pesca incidental:</strong> Captura acidental em redes de pesca de emalhe, espinheis, e longlines, muitas vezes fatal. <strong>Perda de habitat:</strong> Destruição e ocupação das praias de desova.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Poluição:</strong> Ingestão de lixo plástico, especialmente sacolas plásticas, confundidas com medusas, além de contaminação química. <strong>Mudanças climáticas:</strong> Impactos na temperatura da areia e no nível do mar, afetando a viabilidade dos ninhos e o equilíbrio sexual dos filhotes.
                    </p>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={couroImg1}
                    alt="Processo reprodutivo tartaruga-de-couro"
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
                  <strong>Projetos de conservação:</strong> O Projeto TAMAR-ICMBio atua na proteção da tartaruga-de-couro no Brasil, monitorando praias, protegendo ninhos e soltando filhotes. <strong>Áreas protegidas:</strong> Reserva Biológica de Comboios (ES), Parque Nacional Marinho de Abrolhos (BA) e outras unidades de conservação costeiras. <strong>Medidas de manejo:</strong> Implantação de dispositivos para reduzir captura em redes (TEDs), fiscalização e educação ambiental. Uso de telemetria e satélites para estudar rotas migratórias e identificar áreas críticas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-de-couro (Dermochelys coriacea) é a maior das tartarugas marinhas e uma espécie singular por sua carapaça flexível e adaptações para a vida pelágica. Espalhada por oceanos tropicais e temperados, sua alimentação baseada em medusas é vital para o equilíbrio marinho. No Brasil, enfrenta ameaças graves como pesca incidental, poluição e perda de habitat, apesar de ser protegida por legislação e projetos como o TAMAR. A conservação dessa gigante dos mares depende de esforços contínuos em pesquisa, proteção de áreas de desova e conscientização para garantir sua sobrevivência e o equilíbrio dos ecossistemas oceânicos.
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