import TurtleCard from "./TurtleCard";
import { useNavigate } from "react-router-dom";

// Import images
import tartarugaVerdeImg from "@/assets/img/Tartaruga-Verde/Tartaruga-Verde(5).jpg";
import tartarugaCabecudaImg from "@/assets/img/Tartaruga-Cabecuda/closeup-shot-beautiful-turtle-swimming-sea.jpg";
import tartarugaDePenteImg from "@/assets/img/Tartaruga-de-Pente/Eretmochelys_imbricata_485863712.jpg";
import tartarugaOlivaImg from "@/assets/img/Tartaruga-Olivia/Lepidochelys-olivacea-Kélonia-1.jpg";
import tartarugaDeCouroImg from "@/assets/img/Tartaruga-de-Couro/640px-Close_up_of_dermochelys_coriacea_leatherback_turtle.jpg";

const SpeciesSection = () => {
  const navigate = useNavigate();

  const turtleSpecies = [
    {
      id: 1,
      name: "Tartaruga-verde",
      scientificName: "Chelonia mydas",
      description: "A maior das tartarugas marinhas encontradas no Brasil, conhecida por sua dieta herbívora quando adulta. Seus filhotes são onívoros, mas migram para uma dieta baseada em algas marinhas e gramíneas.",
      habitat: "Águas costeiras tropicais e subtropicais",
      status: "Vulnerável",
      route: "/tartaruga-verde",
      imageUrl: tartarugaVerdeImg
    },
    {
      id: 2,
      name: "Tartaruga-cabeçuda",
      scientificName: "Caretta caretta",
      description: "Reconhecida por sua grande cabeça e mandíbulas poderosas, adaptadas para quebrar crustáceos e moluscos. É uma das espécies mais comuns nas costas brasileiras.",
      habitat: "Águas oceânicas e costeiras",
      status: "Vulnerável",
      route: "/tartaruga-cabecuda",
      imageUrl: tartarugaCabecudaImg
    },
    {
      id: 3,
      name: "Tartaruga-de-pente",
      scientificName: "Eretmochelys imbricata",
      description: "Famosa por seu casco belamente padronizado que foi historicamente usado para fazer pentes e ornamentos. Possui bico afiado ideal para se alimentar de esponjas marinhas.",
      habitat: "Recifes de coral e águas tropicais",
      status: "Criticamente ameaçada",
      route: "/tartaruga-de-pente",
      imageUrl: tartarugaDePenteImg
    },
    {
      id: 4,
      name: "Tartaruga-oliva",
      scientificName: "Lepidochelys olivacea",
      description: "A menor das tartarugas marinhas brasileiras, conhecida por suas desovas sincronizadas em massa. Possui coloração olivácea característica.",
      habitat: "Águas oceânicas tropicais",
      status: "Vulnerável",
      route: "/tartaruga-oliva",
      imageUrl: tartarugaOlivaImg
    },
    {
      id: 5,
      name: "Tartaruga-de-couro",
      scientificName: "Dermochelys coriacea",
      description: "A maior tartaruga marinha do mundo, distinguida por não possuir casco rígido, mas sim uma carapaça coriácea. Especialista em alimentar-se de águas-vivas.",
      habitat: "Oceanos profundos e águas costeiras",
      status: "Vulnerável",
      route: "/tartaruga-de-couro",
      imageUrl: tartarugaDeCouroImg
    }
  ];

  const handleLearnMore = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tartarugas Marinhas do Brasil
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as fascinantes espécies de tartarugas marinhas que habitam as águas brasileiras
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
                onLearnMore={() => handleLearnMore(turtle.route)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeciesSection;