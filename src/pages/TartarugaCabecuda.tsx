import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import images
import cabecudaImg1 from "@/assets/img/Tartaruga-Cabecuda/closeup-shot-beautiful-turtle-swimming-sea.jpg";
import cabecudaImg2 from "@/assets/img/Tartaruga-Cabecuda/Tartaruga-Cabecuda(1).jpg";
import cabecudaImg3 from "@/assets/img/Tartaruga-Cabecuda/Caretta_caretta_(AM_LH3051-1).jpg";
import cabecudaImg4 from "@/assets/img/Tartaruga-Cabecuda/640px-Loggerhead_Sea_Turtle_(Caretta_caretta)_2.jpg";
import cabecudaImg5 from "@/assets/img/Tartaruga-Cabecuda/My_Public_Lands_Magazine,_Spring_2015_(16442811919).jpg";
import cabecudaImg6 from "@/assets/img/Tartaruga-Cabecuda/Tartaruga-Cabecuda(3).jpg";
import cabecudaImg7 from "@/assets/img/Tartaruga-Cabecuda/Tartaruga-Cabecuda(4).jpg";

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
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={cabecudaImg1}
                alt="Tartaruga-cabeçuda principal"
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
                      <strong>Nomes populares:</strong> Nomes populares no Brasil: tartaruga-cabeçuda, tartaruga-amarela, tartaruga-mestiça,
                      tartaruga-avó, avó-de-aruanã, careba-amarela e careba-dura.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={cabecudaImg2}
                      alt="Classificação tartaruga-cabeçuda"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-cabeçuda é facilmente reconhecida pela cabeça grande e robusta, equipada
com mandíbulas extremamente fortes. Essa característica física está relacionada ao seu
hábito alimentar carnívoro, capaz de esmagar carapaças duras de moluscos e crustáceos.
É uma das espécies mais adaptáveis, ocupando desde águas costeiras até zonas
oceânicas profundas ao longo do seu ciclo de vida.
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
                      <strong>Tamanho e peso:</strong> Adultos variam de 80 a 110 cm de comprimento de carapaça e pesam
entre 70 e 180 kg.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Cabeça robusta:</strong> Proporcionalmente maiores do que nas outras espécies marinhas,
conferindo força para quebrar presas com estruturas rígidas.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={cabecudaImg3}
                      alt="Características físicas tartaruga-cabeçuda"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Carapaça: Oval, de coloração marrom-avermelhada, com plastrão mais claro.
Nadadeiras: Adaptadas para longos deslocamentos, mas também eficientes em manobras
rápidas nas áreas costeiras.
Expectativa de vida: Pode ultrapassar 70 anos, com maturidade sexual geralmente
alcançada entre 20 e 30 anos
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
                    src={cabecudaImg4}
                    alt="Mapa de distribuição tartaruga-cabeçuda"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ocorrência global:</strong> Presente em mares tropicais e subtropicais de todos os oceanos,
incluindo o Mediterrâneo.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> Adultos e juvenis são registrados do Pará ao Rio Grande do Sul. As principais
áreas de reprodução ficam no norte do Rio de Janeiro, norte do Espírito Santo, litoral norte
da Bahia e Sergipe.
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
                      A tartaruga-cabeçuda é um predador ativo e um importante controlador populacional de
várias espécies marinhas.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Dieta carnívora:</strong> Juvenis (fase oceânica): Vivem em águas abertas, alimentando-se principalmente de
organismos pelágicos como águas-vivas e salpas.
Adultos (fase nerítica): Permanecem em águas costeiras e alimentam-se de moluscos,
crustáceos, ouriços-do-mar, esponjas, cnidários e, ocasionalmente, peixes.

                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={cabecudaImg5}
                      alt="Alimentação tartaruga-cabeçuda"
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
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={cabecudaImg6}
                    alt="Processo reprodutivo tartaruga-cabeçuda"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Locais de desova no Brasil: Norte do Rio de Janeiro e norte do Espírito Santo concentram
as maiores colônias reprodutivas, mas há registros também na Bahia e em Sergipe.
Temporada: De setembro a março no continente, variando conforme a região.
Ciclo reprodutivo: Uma fêmea pode realizar de 3 a 5 posturas por temporada, retornando a
reproduzir após intervalos de 2 a 3 anos.
Ninhos: Geralmente contêm de 110 a 130 ovos, com incubação média de 60 dias.
Influência da temperatura: A temperatura da areia determina o sexo dos filhotes; alterações
climáticas podem impactar essa proporção.
Comportamento reprodutivo: Retorna à praia natal para desovar, seguindo padrões
migratórios que podem abranger milhares de quilômetros.
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
                      <strong>Pesca incidental:</strong> Captura em redes de emalhe, espinhéis e arrasto, principal causa de
mortalidade de adultos e juvenis.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Desenvolvimento costeiro:</strong> Construções, iluminação artificial e tráfego de veículos nas
praias afetam o sucesso reprodutivo
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Poluição:</strong>  Ingestão de resíduos sólidos como plásticos e emalhe em redes abandonadas.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Mudanças climáticas:</strong> Alterações de temperatura afetam a razão de sexos; elevação do
nível do mar e erosão reduzem áreas adequadas para desova.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Caça e coleta ilegal:</strong> Apesar de proibidas, ainda há registros isolados de captura de fêmeas
e coleta de ovos.
                    </p>
                  </div>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={cabecudaImg7}
                      alt="Principais ameaças tartaruga-cabeçuda"
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
                 Projeto TAMAR-ICMBio: Realiza marcação, monitoramento de ninhos, resgate e soltura de
filhotes, além de campanhas educativas junto às comunidades.
Áreas protegidas: Reserva Biológica de Comboios (ES), Atol das Rocas (RN), áreas de
proteção ambiental no litoral da Bahia e Sergipe, e o Parque Nacional Marinho de Abrolhos
(BA).
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
             A tartaruga-cabeçuda (Caretta caretta) é uma das espécies mais emblemáticas dos mares
tropicais e subtropicais, facilmente identificada por sua cabeça volumosa e poderosa. Sua
dieta carnívora e força mandibular a tornam essencial para o equilíbrio das cadeias
alimentares marinhas, especialmente no controle de invertebrados bentônicos. No Brasil,
concentra grandes colônias de reprodução no litoral do Espírito Santo e Rio de Janeiro, mas
percorre extensas rotas migratórias. Apesar de protegida por lei, enfrenta sérias ameaças,
principalmente a pesca incidental e a perda de habitat. Programas como o Projeto TAMAR
desempenham papel fundamental em sua preservação, mas o sucesso a longo prazo
dependerá da redução efetiva das capturas acidentais, da conservação das praias de
desova e da cooperação entre países que compartilham as águas frequentadas por essa
resistente viajante dos oceanos.
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