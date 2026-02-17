import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import Ebook01 from "./pages/Ebook01";
import Ebook01ThankYou from "./pages/Ebook01ThankYou";
import Ebook01_01 from "./pages/Ebook01_01";
import Ebook01_01ThankYou from "./pages/Ebook01_01ThankYou";
import Ebook01_02 from "./pages/Ebook01_02";
import Ebook01_02ThankYou from "./pages/Ebook01_02ThankYou";
import Ebook01_03 from "./pages/Ebook01_03";
import Ebook01_03ThankYou from "./pages/Ebook01_03ThankYou";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { TrackingPixels } from "./components/TrackingPixels";


function Router() {
  return (
    <Switch>
      {/* Hub Principal */}
      <Route path={"/"} component={Index} />
      
      {/* E-book 01 - Versao Original */}
      <Route path={"/ebook01"} component={Ebook01} />
      <Route path={"/ebook01/obrigado"} component={Ebook01ThankYou} />
      
      {/* E-book 01_01 - Ansiedade e Impulsividade */}
      <Route path={"/ebook01_01"} component={Ebook01_01} />
      <Route path={"/ebook01_01/obrigado"} component={Ebook01_01ThankYou} />
      
      {/* E-book 01_02 - Protecao Familiar */}
      <Route path={"/ebook01_02"} component={Ebook01_02} />
      <Route path={"/ebook01_02/obrigado"} component={Ebook01_02ThankYou} />
      
      {/* E-book 01_03 - Inteligencia Financeira */}
      <Route path={"/ebook01_03"} component={Ebook01_03} />
      <Route path={"/ebook01_03/obrigado"} component={Ebook01_03ThankYou} />
      
      {/* Rotas legadas para compatibilidade */}
      <Route path={"/obrigado"} component={Ebook01ThankYou} />
      <Route path={"/thank-you"} component={Ebook01ThankYou} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <TrackingPixels />
          <AnalyticsTracker />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
