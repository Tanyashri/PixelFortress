
import { Shield, Fingerprint, Server, Database, RefreshCw, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import AnimatedContainer from "@/components/AnimatedContainer";
import GlassMorphism from "@/components/GlassMorphism";

export default function Index() {
  const features = [
    {
      title: "AI-Driven Content Watermarking",
      description: "Implement invisible watermarks with AI detection to track content across the web.",
      icon: Fingerprint,
      iconColor: "text-blue-500"
    },
    {
      title: "Deepfake Detection",
      description: "Identify manipulated content using advanced AI models and temporal analysis.",
      icon: RefreshCw,
      iconColor: "text-emerald-500"
    },
    {
      title: "Blockchain Content Tracking",
      description: "Secure your content with decentralized blockchain verification and smart contracts.",
      icon: Lock,
      iconColor: "text-amber-500"
    },
    {
      title: "Automated Takedown System",
      description: "Generate and submit DMCA takedown requests automatically when violations are detected.",
      icon: Shield,
      iconColor: "text-red-500"
    },
    {
      title: "Tampering Detection",
      description: "Detect watermark removal attempts with sophisticated neural networks.",
      icon: Server,
      iconColor: "text-purple-500"
    },
    {
      title: "Real-Time Piracy Monitoring",
      description: "Track content violations with live updates and automated alerts.",
      icon: Database,
      iconColor: "text-sky-500"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="section">
          <div className="text-center mb-16">
            <AnimatedContainer animation="slide-up">
              <h2 className="section-title">Comprehensive Content Protection</h2>
              <p className="section-subtitle mx-auto">
                Our platform combines multiple protection layers to ensure your content remains secure across the digital landscape.
              </p>
            </AnimatedContainer>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                iconColor={feature.iconColor}
                delay={100 * index}
              />
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section">
          <AnimatedContainer animation="scale-in">
            <GlassMorphism className="px-6 py-20 rounded-3xl text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-heading-lg">Ready to secure your content?</h2>
                <p className="text-body-lg text-muted-foreground">
                  Experience the most advanced content protection system powered by AI and blockchain technology.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/features" className="btn-primary">
                    Explore All Features
                  </Link>
                  <Link to="/login" className="btn-ghost">
                    Sign In
                  </Link>
                </div>
              </div>
            </GlassMorphism>
          </AnimatedContainer>
        </section>
        
        {/* Footer */}
        <footer className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">ContentShield</span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} ContentShield. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
