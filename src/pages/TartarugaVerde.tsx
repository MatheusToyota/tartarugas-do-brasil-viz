import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
import verdeImg1 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(5).jpg";
import verdeImg2 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(7).jpeg";
import verdeImg3 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(3).jpg";
import verdeImg4 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(1).webp";
import verdeImg5 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(6).webp";
import verdeImg6 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(4).jpg";
import verdeImg7 from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(2).jpg";

const TartarugaVerde = () => {
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
              Tartaruga-verde
            </h1>
            <p className="text-xl text-muted-foreground italic mb-6">
              Chelonia mydas
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={verdeImg1}
                alt="Tartaruga-verde principal"
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
                <p className="text-foreground">Águas costeiras tropicais</p>
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
                <p className="text-foreground">Outubro a Março</p>
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
                      <strong>Nome científico:</strong> Chelonia mydas<br/>
                      <strong>Família:</strong> Cheloniidae<br/>
                      <strong>Nomes populares:</strong> Nomes populares no Brasil: tartaruga-verde, tartaruga-do-mar, tartaruga-aruanã, depéia, jereba, suçuarana, tartaruga-pedrês e aruanã.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={verdeImg2}
                      alt="Classificação tartaruga-verde"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-verde é uma das maiores tartarugas marinhas do mundo e destaca-se por sua dieta predominantemente herbívora na fase adulta, algo raro entre répteis marinhos. Recebe o nome "verde" não pela cor da carapaça, mas pela coloração esverdeada da gordura corporal, resultado de sua alimentação rica em algas e fanerógamas marinhas.
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
                      <strong>Tamanho e peso:</strong> Adultos atingem de 80 cm a 1,2 metro de comprimento de carapaça e podem pesar entre 150 e 230 kg, tornando-se a segunda maior espécie de tartaruga marinha, atrás apenas da tartaruga-de-couro (Dermochelys coriacea).
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Formato da carapaça:</strong> Oval e relativamente lisa, com coloração que varia entre tons de marrom, verde e preto, apresentando padrões marmorizados.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={verdeImg3}
                      alt="Características físicas tartaruga-verde"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Nadadeiras:</strong> Alongadas, permitindo natação eficiente e migrações transoceânicas. <strong>Glândulas de sal:</strong> Assim como outras espécies marinhas, possui glândulas especializadas próximas aos olhos para eliminar o excesso de sal ingerido. <strong>Longevidade:</strong> Pode viver 80 anos ou mais, com maturidade sexual alcançada entre 20 e 50 anos, dependendo das condições ambientais e alimentares.
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
                    src={verdeImg4}
                    alt="Mapa de distribuição tartaruga-verde"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ocorrência global:</strong> Presente em mares tropicais e subtropicais de todos os oceanos, incluindo áreas costeiras e oceânicas.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> Registros em toda a costa, mas as principais áreas de alimentação e reprodução incluem o Atol das Rocas, Fernando de Noronha e a Ilha de Trindade. Também é observada em estuários e áreas de recifes costeiros.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Migração:</strong> Extremamente migratória; já foram registradas fêmeas marcadas no Brasil que viajaram até o Senegal e juvenis recapturados na Nicarágua e em Trinidad e Tobago.
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
                      A tartaruga-verde é uma das poucas tartarugas marinhas que passam de uma dieta carnívora, quando jovens, para uma dieta estritamente herbívora na fase adulta.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Dieta:</strong> Juvenis: Consomem invertebrados marinhos como águas-vivas, pequenos crustáceos e moluscos, além de algas. Adultos: Alimentam-se principalmente de macroalgas e fanerógamas marinhas (plantas submersas como a grama-do-mar).
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={verdeImg5}
                      alt="Alimentação tartaruga-verde"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Importância ecológica:</strong> Ao se alimentar de vegetação marinha, mantém as pradarias submersas aparadas, favorecendo a oxigenação, o crescimento saudável e a biodiversidade desses ecossistemas.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">5. Reprodução e Ciclo de Vida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <img
                    src={verdeImg6}
                    alt="Processo reprodutivo tartaruga-verde"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Áreas de desova no Brasil:</strong> Atol das Rocas (RN), Fernando de Noronha (PE) e Ilha da Trindade (ES) são as principais, embora alguns registros ocorram também no continente.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Temporada:</strong> Em ilhas oceânicas, de dezembro a junho; no continente, de setembro a abril. <strong>Ciclo reprodutivo:</strong> As fêmeas retornam sempre à praia onde nasceram (natal filopatria) para desovar. Cada fêmea pode realizar de 3 a 6 posturas por temporada, com intervalos de cerca de 2 a 3 anos entre as temporadas de reprodução.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ninhos e incubação:</strong> Contêm em média de 100 a 120 ovos, com incubação de aproximadamente 60 dias. A temperatura da areia define o sexo dos filhotes; areias mais quentes produzem mais fêmeas e mais frias, mais machos.
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
                      <strong>Pesca incidental:</strong> Uma das principais causas de mortalidade, devido à captura acidental em redes de pesca e espinhéis.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Perda de habitat:</strong> Degradação de áreas de desova e de alimentação devido à urbanização e destruição de pradarias marinhas. <strong>Doenças:</strong> Alta vulnerabilidade à fibropapilomatose, doença viral que provoca tumores e pode levar à morte.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <img
                      src={verdeImg7}
                      alt="Principais ameaças tartaruga-verde"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Poluição e mudanças climáticas:</strong> Ingestão de plásticos, redes abandonadas (ghost nets) e exposição a poluentes químicos. Mudanças climáticas afetam diretamente a proporção sexual e a qualidade das praias de reprodução.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">7. Conservação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Projeto TAMAR-ICMBio:</strong> Atua na proteção de ninhos, monitoramento populacional, resgate de animais e conscientização de comunidades costeiras. <strong>Áreas protegidas:</strong> Atol das Rocas, Fernando de Noronha, Ilha da Trindade, Parque Nacional Marinho de Abrolhos e diversas reservas biológicas e estações ecológicas costeiras.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Medidas de manejo:</strong> Uso de Dispositivos Excludentes de Tartarugas (TEDs) na pesca de arrasto, restrições à pesca em áreas críticas, preservação de pradarias marinhas e controle da poluição costeira. Participação comunitária: Incentivo ao turismo sustentável e ao envolvimento das comunidades locais na conservação.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-verde (Chelonia mydas) é um símbolo de resistência e equilíbrio nos mares tropicais. Sua mudança de dieta ao longo da vida, de carnívora na juventude a herbívora na fase adulta, faz dela uma espécie-chave na manutenção das pradarias marinhas, ecossistemas vitais para a biodiversidade costeira. No Brasil, concentra suas áreas de reprodução nas ilhas oceânicas e percorre longas distâncias migratórias, conectando o Atlântico Sul a regiões distantes. Apesar de protegida por lei, enfrenta sérias ameaças, como a pesca incidental, poluição e doenças. A ação integrada de conservação, liderada por iniciativas como o Projeto TAMAR, é essencial para garantir que essa gigante herbívora continue a desempenhar seu papel ecológico por muitas gerações, mantendo vivos os ecossistemas que sustenta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TartarugaVerde;