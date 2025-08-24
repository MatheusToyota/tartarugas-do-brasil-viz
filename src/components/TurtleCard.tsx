import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TurtleCardProps {
  name: string;
  scientificName: string;
  description: string;
  habitat: string;
  status: string;
  imageUrl?: string;
  onLearnMore: () => void;
}

const TurtleCard = ({ 
  name, 
  scientificName, 
  description, 
  habitat, 
  status,
  imageUrl,
  onLearnMore 
}: TurtleCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'vulnerável':
        return 'text-yellow-600 bg-yellow-100';
      case 'em perigo':
        return 'text-red-600 bg-red-100';
      case 'criticamente ameaçada':
        return 'text-red-800 bg-red-200';
      default:
        return 'text-secondary bg-secondary-light/20';
    }
  };

  return (
    <Card className="hover-lift shadow-card group overflow-hidden">
      {/* Image Placeholder */}
      <div className="aspect-video bg-gradient-subtle flex items-center justify-center relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="text-6xl opacity-40 group-hover:scale-110 transition-smooth">🐢</div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
          {name}
        </CardTitle>
        <CardDescription className="text-muted-foreground italic">
          {scientificName}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-primary">Habitat:</span>
            <span className="text-muted-foreground">{habitat}</span>
          </div>
        </div>

        <Button 
          onClick={onLearnMore}
          variant="ocean"
          className="w-full"
        >
          Saiba Mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default TurtleCard;