
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CommentsSection } from "@/components/CommentsSection";
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
                      <strong>Nomes populares:</strong> Nomes populares no Brasil: tartaruga-de-pente, tartaruga-legítima, tartaruga-verdadeira.
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
                  A tartaruga-de-pente é uma das espécies mais icônicas e reconhecíveis entre as tartarugas marinhas, em grande parte devido ao seu casco característico, composto por escamas sobrepostas que criam um padrão belo e único, muito valorizado historicamente para a confecção de pentes, joias, óculos e outros objetos ornamentais. Essa exploração intensa, somada a outras ameaças, levou a espécie a uma grave redução populacional ao longo do último século.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Proteção internacional:</strong> Apêndice I da CITES – Convenção sobre o Comércio Internacional de Espécies Ameaçadas da Fauna e Flora Selvagem, que proíbe seu comércio internacional.
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
                      <strong>Tamanho e peso:</strong> Adultos geralmente medem entre 70 e 90 cm de comprimento de carapaça e podem pesar de 60 a 80 kg, embora alguns indivíduos excepcionais ultrapassem esses valores.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Formato da carapaça:</strong> Alongada e ligeiramente serrilhada nas bordas posteriores, com coloração variando entre tons de marrom, âmbar e dourado, formando mosaicos irregulares que ajudam na camuflagem nos recifes.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Nadadeiras:</strong> Longas e adaptadas para natação eficiente, permitindo viagens de milhares de quilômetros entre áreas de alimentação e reprodução.
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
                  <strong>Glândulas de sal:</strong> Localizadas próximas aos olhos, eliminam o excesso de sal da água do mar. O líquido expelido, semelhante a lágrimas, é especialmente visível durante a desova.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Adaptabilidade:</strong> Essa espécie é considerada uma das mais especializadas ecologicamente, vivendo em estreita associação com recifes de coral, ambientes complexos e ricos em biodiversidade.
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
                  <strong>Ocorrência global:</strong> Presente em mares tropicais e subtropicais de todo o planeta, com populações importantes no Oceano Atlântico, Índico e Pacífico.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> É encontrada em praticamente todo o litoral, mas suas áreas mais importantes de alimentação e descanso incluem o Atol das Rocas (RN) e o arquipélago de Fernando de Noronha (PE). Também é registrada em regiões da Bahia, Sergipe e Rio Grande do Norte, especialmente durante a época de reprodução.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Migrações:</strong> Extremamente migratória, realiza deslocamentos significativos. Registros mostram juvenis marcados no Brasil que foram encontrados no Gabão e no Senegal, na África Ocidental. Estudos com telemetria também identificaram fêmeas migrando da Bahia até áreas de recifes no Ceará, percorrendo grandes distâncias no Atlântico Ocidental.
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
                      A tartaruga-de-pente é um predador especializado em esponjas marinhas, alimento pouco consumido por outros animais, o que lhe dá um papel ecológico muito importante na manutenção da saúde dos recifes de coral.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Dieta de juvenis e adultos:</strong> Esponjas, crustáceos, moluscos, corais moles, ouriços-do-mar, briozoários e algumas algas.
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
                  <strong>Função ecológica:</strong> Ao controlar a população de esponjas, evita que elas dominem os recifes, permitindo o crescimento dos corais e o equilíbrio do ecossistema.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Interações tróficas:</strong> Atua como elo entre os recifes e o restante do ecossistema marinho, influenciando a distribuição de nutrientes e a diversidade biológica local.
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
                  <strong>Locais de desova no Brasil:</strong> Litoral norte da Bahia, Sergipe e litoral sul do Rio Grande do Norte (região de Pipa).
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Temporada reprodutiva:</strong> No continente, de setembro a abril; nas ilhas oceânicas, de dezembro a junho.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Ciclo reprodutivo:</strong> Uma única fêmea pode realizar de três a seis posturas por temporada, cada uma com 100 a 150 ovos. Após esse período, ela descansa por dois a três anos antes de voltar a reproduzir.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Construção do ninho:</strong> As fêmeas saem do mar à noite, procurando praias com areia fofa e livre de obstáculos. Escavam com as nadadeiras traseiras uma cova profunda, depositam os ovos e os cobrem cuidadosamente antes de retornar ao oceano.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Incubação:</strong> Leva cerca de 60 dias. A temperatura da areia é determinante para o sexo dos filhotes: temperaturas mais altas produzem mais fêmeas, e mais baixas, mais machos.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Risco inicial:</strong> Ao emergirem, os filhotes se orientam pela luminosidade natural para alcançar o mar, mas luzes artificiais podem desorientá-los e aumentar a mortalidade.
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
                      <strong>Pesca incidental:</strong> Captura acidental em redes de emalhe, espinhéis e arrasto para pesca de camarão. Muitas vezes, as tartarugas se afogam por não conseguirem chegar à superfície para respirar.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Perda e degradação de habitat:</strong> Destruição de recifes de coral por pesca destrutiva, poluição e mudanças climáticas.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Poluição marinha:</strong> Ingestão de plásticos e resíduos flutuantes, que podem causar bloqueios internos e morte.
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
                  <strong>Histórico de exploração:</strong> Durante décadas, foi a espécie mais caçada para a indústria de artesanato devido ao valor do "casco de tartaruga".
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Mudanças climáticas:</strong> Alterações na temperatura e elevação do nível do mar afetam a proporção de sexos e a viabilidade dos ninhos, além de provocar erosão das praias.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">7. Conservação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Projetos ativos:</strong> O Projeto TAMAR-ICMBio atua há mais de 40 anos na proteção de ninhos, marcação e monitoramento de indivíduos, além de ações de educação ambiental.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Áreas protegidas relevantes:</strong> Atol das Rocas (RN), Fernando de Noronha (PE), Parque Nacional Marinho de Abrolhos (BA), Reserva Biológica de Comboios (ES), entre outras.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Medidas de manejo:</strong> Inclusão de dispositivos redutores de captura de tartarugas (TEDs) nas redes de arrasto, fiscalização contra o comércio ilegal e preservação de áreas de recifes.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Educação e conscientização:</strong> Trabalho direto com comunidades pesqueiras e programas de turismo sustentável para geração de renda alternativa.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-de-pente (Eretmochelys imbricata) é uma das joias vivas dos oceanos tropicais, reconhecida mundialmente por seu casco de beleza única e por sua ligação vital com a saúde dos recifes de coral. Especialista na alimentação de esponjas marinhas, ela desempenha um papel ecológico insubstituível na manutenção do equilíbrio e da diversidade marinha. No Brasil, suas áreas mais importantes de ocorrência incluem o Atol das Rocas, Fernando de Noronha e o litoral da Bahia e Sergipe, onde também realiza a desova. Apesar de sua importância ecológica e cultural, a espécie está criticamente ameaçada de extinção, vítima da pesca incidental, destruição de habitat, poluição e de um histórico de exploração comercial. Projetos como o TAMAR-ICMBio têm sido essenciais para sua proteção, mas a recuperação plena depende de esforços contínuos, integrando ciência, fiscalização, educação ambiental e cooperação internacional para garantir que essa espécie milenar continue a nadar livremente nos mares por muitas gerações.
                </p>
              </CardContent>
            </Card>
          </div>

          <CommentsSection />
        </div>
      </div>
    </main>
  );
};


export default TartarugaDePente;