import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-ocean shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-3 hover-scale group"
          >
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-card">
              <span className="text-2xl">🐢</span>
            </div>
            <h1 className="text-2xl font-bold text-primary-foreground">
              Tartarugas Marinhas do Brasil
            </h1>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
              onClick={() => navigate("/")}
            >
              Início
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
            >
              Espécies
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
            >
              Conservação
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
            >
              Sobre
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground hover:bg-primary-light/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;