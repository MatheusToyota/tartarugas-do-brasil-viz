import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import TartarugaVerde from "./pages/TartarugaVerde";
import TartarugaCabecuda from "./pages/TartarugaCabecuda";
import TartarugaDePente from "./pages/TartarugaDePente";
import TartarugaOliva from "./pages/TartarugaOliva";
import TartarugaDeCouro from "./pages/TartarugaDeCouro";
import Conservacao from "./pages/Conservacao";
import Sobre from "./pages/Sobre";
import Comentarios from "./pages/Comentarios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-subtle">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tartaruga-verde" element={<TartarugaVerde />} />
            <Route path="/tartaruga-cabecuda" element={<TartarugaCabecuda />} />
            <Route path="/tartaruga-de-pente" element={<TartarugaDePente />} />
            <Route path="/tartaruga-oliva" element={<TartarugaOliva />} />
            <Route path="/tartaruga-de-couro" element={<TartarugaDeCouro />} />
            <Route path="/conservacao" element={<Conservacao />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/comentarios" element={<Comentarios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
