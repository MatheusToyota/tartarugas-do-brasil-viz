import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          <nav className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
              onClick={() => navigate("/")}
            >
              Início
            </Button>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-light/20 bg-transparent data-[state=open]:bg-primary-light/20">
                    Espécies
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {[
                        { name: "Tartaruga-verde", route: "/tartaruga-verde" },
                        { name: "Tartaruga-cabeçuda", route: "/tartaruga-cabecuda" },
                        { name: "Tartaruga-de-pente", route: "/tartaruga-de-pente" },
                        { name: "Tartaruga-oliva", route: "/tartaruga-oliva" },
                        { name: "Tartaruga-de-couro", route: "/tartaruga-de-couro" },
                      ].map((species) => (
                        <li key={species.route}>
                          <NavigationMenuLink asChild>
                            <button
                              onClick={() => navigate(species.route)}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{species.name}</div>
                            </button>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
              onClick={() => navigate("/conservacao")}
            >
              Conservação
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-light/20 transition-smooth"
              onClick={() => navigate("/sobre")}
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