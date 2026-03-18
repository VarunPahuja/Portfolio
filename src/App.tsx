import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ThemeProvider } from "@/hooks/use-theme";
import { SoundProvider } from "@/hooks/use-sound";
import { AltNameProvider } from "@/hooks/use-alt-name";
import NavigationDock from "@/components/NavigationDock";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import BeyondWork from "./pages/BeyondWork";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Photos from "./pages/Photos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const preventCtrlWheelZoom = (event: WheelEvent) => {
      if (event.ctrlKey) event.preventDefault();
    };
    const preventZoomKeys = (event: KeyboardEvent) => {
      const isZoomCombo = (event.ctrlKey || event.metaKey) &&
        (event.key === "+" || event.key === "-" || event.key === "=" || event.key === "0");
      if (isZoomCombo) event.preventDefault();
    };
    const preventGestureZoom = (event: Event) => event.preventDefault();

    window.addEventListener("wheel", preventCtrlWheelZoom, { passive: false });
    window.addEventListener("keydown", preventZoomKeys);
    window.addEventListener("gesturestart", preventGestureZoom);
    window.addEventListener("gesturechange", preventGestureZoom);
    window.addEventListener("gestureend", preventGestureZoom);

    return () => {
      window.removeEventListener("wheel", preventCtrlWheelZoom);
      window.removeEventListener("keydown", preventZoomKeys);
      window.removeEventListener("gesturestart", preventGestureZoom);
      window.removeEventListener("gesturechange", preventGestureZoom);
      window.removeEventListener("gestureend", preventGestureZoom);
    };
  }, []);
  
  return (
    <div className={`${isHomePage ? "home-page w-screen h-screen overflow-hidden blueprint-grid" : "min-h-screen bg-background"} relative`}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/beyond-work" element={<BeyondWork />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <NavigationDock />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <SoundProvider>
        <AltNameProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </AltNameProvider>
      </SoundProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
