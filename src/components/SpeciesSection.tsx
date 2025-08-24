import TurtleCard from "./TurtleCard";
import { useToast } from "@/hooks/use-toast";

// Import images
import tartarugaVerde from "@/assets/tartaruga-verde.jpg";
import tartarugaCabecuda from "@/assets/tartaruga-cabecuda.jpg";
import tartarugaDePente from "@/assets/tartaruga-de-pente.jpg";
import jabutiPiranga from "@/assets/jabuti-piranga.jpg";

const SpeciesSection = () => {
  const { toast } = useToast();

  const turtleSpecies = [
    {
      id: 1,
      name: "Tartaruga-verde",
      scientificName: "Chelonia mydas",
      description: "A maior das tartarugas marinhas encontradas no Brasil, conhecida por sua dieta herbívora quando adulta. Seus filhotes são onívoros, mas migram para uma dieta baseada em algas marinhas e gramíneas.",
      habitat: "Águas costeiras tropicais e subtropicais",
      status: "Vulnerável",
      imageUrl: tartarugaVerde
    },
    {
      id: 2,
      name: "Tartaruga-cabeçuda",
      scientificName: "Caretta caretta",
      description: "Reconhecida por sua grande cabeça e mandíbulas poderosas, adaptadas para quebrar crustáceos e moluscos. É uma das espécies mais comuns nas costas brasileiras.",
      habitat: "Águas oceânicas e costeiras",
      status: "Vulnerável",
      imageUrl: tartarugaCabecuda
    },
    {
      id: 3,
      name: "Tartaruga-de-pente",
      scientificName: "Eretmochelys imbricata",
      description: "Famosa por seu casco belamente padronizado que foi historicamente usado para fazer pentes e ornamentos. Possui bico afiado ideal para se alimentar de esponjas marinhas.",
      habitat: "Recifes de coral e águas tropicais",
      status: "Criticamente ameaçada",
      imageUrl: tartarugaDePente
    },
    {
      id: 4,
      name: "Tartaruga-oliva",
      scientificName: "Lepidochelys olivacea",
      description: "A menor das tartarugas marinhas brasileiras, conhecida por suas desovas sincronizadas em massa. Possui coloração olivácea característica.",
      habitat: "Águas oceânicas tropicais",
      status: "Vulnerável"
    },
    {
      id: 5,
      name: "Tartaruga-de-couro",
      scientificName: "Dermochelys coriacea",
      description: "A maior tartaruga marinha do mundo, distinguida por não possuir casco rígido, mas sim uma carapaça coriácea. Especialista em alimentar-se de águas-vivas.",
      habitat: "Oceanos profundos e águas costeiras",
      status: "Vulnerável"
    },
    {
      id: 6,
      name: "Jabuti-piranga",
      scientificName: "Chelonoidis carbonarius",
      description: "Tartaruga terrestre com marcas vermelhas distintivas nas patas e cabeça. É uma das duas espécies de jabuti encontradas no Brasil, sendo maior que o jabuti-tinga.",
      habitat: "Florestas tropicais e cerrado",
      status: "Pouco preocupante",
      imageUrl: jabutiPiranga
    },
    {
      id: 7,
      name: "Jabuti-tinga",
      scientificName: "Chelonoidis denticulatus",
      description: "Menor que o jabuti-piranga, com marcas amareladas características. Habita principalmente a região amazônica e é importante dispersor de sementes.",
      habitat: "Floresta amazônica",
      status: "Pouco preocupante"
    }
  ];

  const handleLearnMore = (name: string) => {
    toast({
      title: `Saiba mais sobre ${name}`,
      description: "Em breve teremos informações detalhadas sobre cada espécie!",
    });
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Espécies de Tartarugas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as fascinantes espécies de tartarugas que habitam as águas e terras brasileiras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {turtleSpecies.map((turtle, index) => (
            <div key={turtle.id} style={{ animationDelay: `${index * 100}ms` }}>
              <TurtleCard
                name={turtle.name}
                scientificName={turtle.scientificName}
                description={turtle.description}
                habitat={turtle.habitat}
                status={turtle.status}
                imageUrl={turtle.imageUrl}
                onLearnMore={() => handleLearnMore(turtle.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;