
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import GlassMorphism from "@/components/GlassMorphism";
import AnimatedContainer from "@/components/AnimatedContainer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AnimatedContainer animation="scale-in">
        <GlassMorphism className="p-8 md:p-12 rounded-3xl max-w-lg text-center">
          <div className="mb-6 mx-auto h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-heading-lg mb-4">404</h1>
          <p className="text-body-lg text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </GlassMorphism>
      </AnimatedContainer>
    </div>
  );
};

export default NotFound;
