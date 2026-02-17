import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import Ebook01 from "./pages/Ebook01";
import Ebook01ThankYou from "./pages/Ebook01ThankYou";
import AnalyticsTracker from "./components/AnalyticsTracker";


function Router() {
  return (
    <Switch>
      {/* Hub Principal */}
      <Route path={"/"} component={Index} />
      
      {/* E-book 01 */}
      <Route path={"/ebook01"} component={Ebook01} />
      <Route path={"/ebook01/obrigado"} component={Ebook01ThankYou} />
      
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
          <AnalyticsTracker />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
