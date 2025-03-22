
import { ArrowRight, Shield, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import GlassMorphism from "./GlassMorphism";
import StarField from "./StarField";
import MagicWand from "./MagicWand";

export default function Hero() {
  const [showMagicEffect, setShowMagicEffect] = useState(false);
  
  useEffect(() => {
    // Show magic effect after a short delay
    const timer = setTimeout(() => setShowMagicEffect(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const createRandomSparkle = () => {
    const size = Math.random() * 30 + 10;
    return {
      id: Math.random(),
      size,
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${Math.random() * 3}s`,
      }
    };
  };

  const sparkles = Array.from({ length: 6 }, createRandomSparkle);

  return (
    <div className="relative min-h-screen flex items-center py-24 px-4 md:px-6 overflow-hidden">
      {/* Star Background */}
      <StarField starCount={30} twinkleStars={15} shootingStars={4} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }} />
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full border border-primary/30 animate-rotate-slow" />
        
        {/* Disney-style sparkles */}
        {showMagicEffect && sparkles.map(sparkle => (
          <div 
            key={sparkle.id}
            className="magic-circle"
            style={sparkle.style}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start space-y-8">
            <AnimatedContainer animation="slide-up" delay={100}>
              <MagicWand>
                <span className="feature-chip mb-4 disney-sparkle">
                  <span className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    AI-Powered Security
                  </span>
                </span>
              </MagicWand>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={200}>
              <h1 className="text-heading-xl text-balance">
                Protect Your Content with Advanced AI Technology
                <Star className="inline-block ml-2 text-yellow-300 star-pulse" size={24} fill="currentColor" />
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={300}>
              <p className="text-body-lg text-muted-foreground max-w-lg">
                Leverage cutting-edge AI to detect and prevent content piracy, track watermarks, and ensure your valuable content remains secure across the digital landscape.
              </p>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={400} className="flex flex-col sm:flex-row gap-4">
              <MagicWand color="text-yellow-200" sparkleCount={8}>
                <Link to="/features" className="btn-primary disney-sparkle">
                  Explore Features
                </Link>
              </MagicWand>
              <Link to="/dashboard" className="btn-secondary flex items-center gap-2">
                <span>View Dashboard</span>
                <ArrowRight className="h-4 w-4 disney-wave" />
              </Link>
            </AnimatedContainer>
            
            <AnimatedContainer animation="slide-up" delay={500}>
              <div className="pt-6 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { label: "Watermarks Protected", value: "10M+" },
                  { label: "Piracy Attempts Blocked", value: "99.8%" },
                  { label: "Content Secured", value: "250K+" }
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col disney-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <span className="text-heading-sm text-primary font-semibold">
                      {stat.value}
                      {index === 1 && (
                        <Star className="inline-block ml-1 text-yellow-300 star-twinkle" size={14} fill="currentColor" />
                      )}
                    </span>
                    <span className="text-body-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="relative">
            <AnimatedContainer animation="fade-in" delay={300} className="disney-bounce">
              <GlassMorphism className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400" />
                </div>
                <div className="relative p-6 sm:p-8">
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4 p-8 text-center">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center disney-float">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-heading-sm">Content Security Platform</h3>
                      <p className="text-muted-foreground">Real-time protection for your valuable content assets</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                      { label: "AI Detection", value: "Active" },
                      { label: "Blockchain", value: "Secured" },
                      { label: "Cloud Storage", value: "Protected" },
                      { label: "Legal Compliance", value: "Automated" }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm disney-sparkle"
                        style={{ animationDelay: `${index * 0.7}s` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">{item.label}</span>
                          <span className="text-sm font-medium">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassMorphism>
            </AnimatedContainer>
            
            {/* Decorative Elements with Stars */}
            <div className="absolute -top-4 -right-4 h-16 w-16 border border-primary/20 rounded-full disney-float" style={{ animationDelay: "0.5s" }}>
              <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/70 star-pulse" size={12} fill="currentColor" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border border-primary/20 rounded-full disney-float" style={{ animationDelay: "1.2s" }}>
              <Star className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/70 star-twinkle" size={16} fill="currentColor" />
            </div>
            
            {/* Additional floating stars */}
            <Star className="absolute top-10 right-10 text-yellow-300 star-pulse" size={18} fill="currentColor" />
            <Star className="absolute bottom-20 left-20 text-yellow-200 star-twinkle" size={14} fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
}
