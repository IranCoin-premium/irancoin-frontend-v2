/*
 * Style direction: «سکوتِ کوانت» — dark editorial finance, asymmetric layouts, copper signal accents,
 * calm motion, and explicit product boundaries. Keep the shell quiet so evidence and actions lead.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Market from "./pages/Market";
import Operations from "./pages/Operations";
import Methodology from "./pages/Methodology";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <WouterRouter base="/irancoin-frontend-v2">
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/research" component={Research} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/profile" component={Profile} />
      <Route path="/market" component={Market} />
      <Route path="/operations" component={Operations} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark" switchable>
        <TooltipProvider>
          <Toaster position="bottom-left" richColors />
          <Router />
        </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}
