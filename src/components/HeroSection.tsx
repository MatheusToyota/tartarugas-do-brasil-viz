import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-subtle py-20 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Enciclopédia das Tartarugas Marinhas do Brasil
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Descubra a riqueza e diversidade das espécies de tartarugas marinhas brasileiras. 
            Uma jornada fascinante pela vida marinha do nosso país.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="ocean"
              size="lg"
              className="px-8 py-6 text-lg"
            >
              Explorar Espécies
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-scale px-8 py-6 text-lg"
            >
              Sobre a Conservação
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-scale-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Espécies Catalogadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-muted-foreground">Espécies Marinhas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">Ameaçadas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;