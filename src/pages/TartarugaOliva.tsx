import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CommentsSection } from "@/components/CommentsSection";

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
                      <strong>Tamanho e peso:</strong> Adultos medem entre 60 e 75 cm de comprimento de carapaça e pesam de 35 a 50 kg.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      <strong>Carapaça:</strong> Oval, mais larga que a da maioria das outras espécies, de cor oliva ou cinza-esverdeada, com plastrão amarelado.
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
                  <strong>Cabeça:</strong> Relativamente pequena em relação ao corpo, adaptada para alimentação variada. <strong>Nadadeiras:</strong> Curtas e fortes, permitindo boa agilidade tanto no mar quanto na escavação dos ninhos. <strong>Longevidade:</strong> Pode viver mais de 50 anos, embora sua maturidade sexual seja alcançada entre 12 e 15 anos.
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
                  <strong>Ocorrência global:</strong> Encontrada em mares tropicais e subtropicais do Oceano Atlântico, Pacífico e Índico.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>No Brasil:</strong> Registrada desde o Maranhão até o Rio Grande do Sul, com destaque para áreas de desova no litoral de Sergipe e norte da Bahia. <strong>Migração:</strong> Fêmeas monitoradas em Sergipe realizaram deslocamentos costeiros desde o Espírito Santo até o Pará, além de migrações para regiões equatoriais do Atlântico.
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
                      <strong>Dieta onívora:</strong> A tartaruga-de-oliva é considerada onívora, explorando diferentes níveis tróficos ao longo da vida. Juvenis: Alimentam-se de pequenos invertebrados pelágicos, incluindo medusas e crustáceos. Adultos: Consomem uma grande variedade de presas como moluscos, crustáceos, peixes, salpas e algas. Importância ecológica: Contribui para o equilíbrio das populações de organismos marinhos e participa da ciclagem de nutrientes entre os ambientes oceânicos e costeiros.
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
                  <strong>Áreas de desova no Brasil:</strong> Principalmente no litoral de Sergipe (considerada a maior área reprodutiva da espécie no Atlântico Sul) e norte da Bahia. <strong>Temporada:</strong> De setembro a março, com pico entre novembro e janeiro. <strong>Ciclo reprodutivo:</strong> A fêmea pode desovar de 2 a 5 vezes por temporada, com intervalos de cerca de 15 a 30 dias entre posturas. Ninhos contêm de 80 a 120 ovos, incubados por aproximadamente 50 dias. Arribadas: Fenômeno observado em algumas populações, mas no Brasil a maioria das posturas é solitária.
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
                      <strong>Pesca incidental:</strong> Captura acidental em redes de emalhe, espinhéis e arrasto, com alta mortalidade devido ao afogamento. <strong>Perda de habitat:</strong> Urbanização e ocupação irregular das praias de desova. <strong>Poluição:</strong> Ingestão de resíduos plásticos, captura em redes fantasmas e contaminação por poluentes químicos. <strong>Mudanças climáticas:</strong> Alterações de temperatura que afetam a proporção sexual e a viabilidade dos ninhos. <strong>Consumo ilegal:</strong> Coleta e venda clandestina de ovos, especialmente em comunidades costeiras.
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
                  <strong>Projeto TAMAR-ICMBio:</strong> Atua fortemente no litoral de Sergipe e Bahia, monitorando praias, protegendo ninhos e soltando filhotes ao mar. <strong>Áreas protegidas:</strong> Reserva Biológica de Santa Isabel (SE), Parque Nacional Marinho de Abrolhos (BA) e áreas de proteção ambiental no litoral nordestino. <strong>Medidas de manejo:</strong> Implantação de TEDs nas redes de pesca de arrasto, fiscalização costeira, conscientização de comunidades e combate ao comércio ilegal de ovos.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Resumo Final</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">
                  A tartaruga-de-oliva (Lepidochelys olivacea) é a menor entre as tartarugas marinhas, mas sua importância ecológica e cultural é enorme. Conhecida por seu casco de cor oliva e por eventos impressionantes de desova coletiva, é um elo fundamental no equilíbrio dos ecossistemas marinhos tropicais. No Brasil, tem sua maior concentração reprodutiva no litoral de Sergipe, tornando a região estratégica para sua conservação. Apesar de protegida por lei, enfrenta ameaças como pesca incidental, poluição e coleta ilegal de ovos. O trabalho contínuo de monitoramento, proteção de praias e conscientização comunitária é essencial para assegurar que essa pequena gigante dos mares continue a cumprir seu papel ecológico e a inspirar admiração nas gerações futuras.
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

export default TartarugaOliva;