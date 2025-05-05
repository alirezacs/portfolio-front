
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/particle-background";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-slate-900/50">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-8xl font-bold mb-4 text-shimmer">404</h1>
        <p className="text-2xl mb-8 text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Oops! Page not found
        </p>
        
        <Button 
          onClick={() => navigate("/")}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-accent/25 opacity-0 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          Return to Home
        </Button>
      </div>
      
      {/* Animated Blobs */}
      <div className="blob-animation w-64 h-64" style={{ top: '20%', left: '15%', animationDelay: '0s' }}></div>
      <div className="blob-animation w-80 h-80" style={{ bottom: '10%', right: '10%', animationDelay: '2s' }}></div>
    </div>
  );
};

export default NotFound;
