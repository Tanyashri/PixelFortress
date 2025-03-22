
import { 
  Shield, Fingerprint, Server, Database, RefreshCw, Lock, 
  FileText, XCircle, Workflow, CheckCircle, BellRing, BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GlassMorphism from "@/components/GlassMorphism";
import AnimatedContainer from "@/components/AnimatedContainer";
import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  const featuresSections = [
    {
      title: "Content Watermarking & Detection",
      description: "Protect your content with advanced AI-driven watermarking technology",
      features: [
        {
          title: "Invisible Watermarking",
          description: "Add imperceptible watermarks that survive compression and format changes",
          icon: Fingerprint,
          iconColor: "text-blue-500"
        },
        {
          title: "AI-Powered Detection",
          description: "Automatically track and identify your watermarked content across the web",
          icon: Shield,
          iconColor: "text-blue-600"
        },
        {
          title: "Cloud Storage Integration",
          description: "Securely store all your watermarked assets in Google Cloud Storage",
          icon: Database,
          iconColor: "text-blue-400"
        }
      ]
    },
    {
      title: "Deepfake & Manipulation Detection",
      description: "Identify manipulated content with sophisticated AI analysis",
      features: [
        {
          title: "Video Authenticity Verification",
          description: "Use advanced AI models to detect manipulated video content",
          icon: RefreshCw,
          iconColor: "text-emerald-500"
        },
        {
          title: "Temporal Consistency Analysis",
          description: "Detect inconsistencies and anomalies that indicate manipulation",
          icon: Workflow,
          iconColor: "text-emerald-600"
        },
        {
          title: "Tampering Detection",
          description: "Identify attempts to remove or alter content watermarks",
          icon: XCircle,
          iconColor: "text-emerald-400"
        }
      ]
    },
    {
      title: "Blockchain Security & Compliance",
      description: "Leverage blockchain technology for secure content verification",
      features: [
        {
          title: "Decentralized Content Registry",
          description: "Register your content ownership on an immutable blockchain ledger",
          icon: Lock,
          iconColor: "text-amber-500"
        },
        {
          title: "Smart Contract Licensing",
          description: "Automate content licensing and usage rights with smart contracts",
          icon: FileText,
          iconColor: "text-amber-600"
        },
        {
          title: "Automated Takedown System",
          description: "Generate and submit DMCA notices when violations are detected",
          icon: CheckCircle,
          iconColor: "text-amber-400"
        }
      ]
    },
    {
      title: "Real-Time Monitoring & Analytics",
      description: "Track content usage and piracy attempts with live monitoring",
      features: [
        {
          title: "Global Piracy Tracking",
          description: "Monitor content usage across multiple platforms and regions",
          icon: BarChart3,
          iconColor: "text-purple-500"
        },
        {
          title: "Instant Violation Alerts",
          description: "Receive real-time notifications when unauthorized use is detected",
          icon: BellRing,
          iconColor: "text-purple-600"
        },
        {
          title: "Comprehensive Analytics",
          description: "Gain insights into content usage patterns and violation trends",
          icon: Server,
          iconColor: "text-purple-400"
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-12">
        {/* Header */}
        <section className="section pt-12">
          <AnimatedContainer animation="slide-up">
            <div className="text-center max-w-3xl mx-auto">
              <span className="feature-chip mb-4">Protection Features</span>
              <h1 className="text-heading-xl mb-6">Comprehensive Content Protection</h1>
              <p className="text-body-lg text-muted-foreground">
                Our platform combines AI, blockchain, and cloud technologies to provide
                the most robust content protection system available.
              </p>
            </div>
          </AnimatedContainer>
        </section>

        {/* Feature Sections */}
        {featuresSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="section py-16">
            <div className="mb-12">
              <AnimatedContainer animation="slide-up">
                <h2 className="text-heading-lg mb-4">{section.title}</h2>
                <p className="text-body-lg text-muted-foreground max-w-3xl">
                  {section.description}
                </p>
              </AnimatedContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.features.map((feature, featureIndex) => (
                <FeatureCard
                  key={featureIndex}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  iconColor={feature.iconColor}
                  delay={100 * featureIndex}
                />
              ))}
            </div>
            
            {sectionIndex === 1 && (
              <AnimatedContainer animation="fade-in" delay={300} className="mt-12">
                <GlassMorphism className="rounded-2xl p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-heading-sm mb-4">How AI Deepfake Detection Works</h3>
                      <p className="text-muted-foreground mb-6">
                        Our system analyzes video content frame-by-frame to detect inconsistencies
                        that indicate manipulation, using multiple AI models for verification.
                      </p>
                      <div className="space-y-3">
                        {[
                          "Facial landmark analysis",
                          "Temporal consistency verification",
                          "Audio-visual synchronization checks",
                          "Metadata and compression artifact analysis"
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="relative w-full max-w-sm aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-50 p-4 flex items-center justify-center">
                        <div className="relative z-10 text-center">
                          <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                            <RefreshCw className="h-8 w-8 text-emerald-500" />
                          </div>
                          <h4 className="font-medium mb-2">Deepfake Detection Engine</h4>
                          <p className="text-sm text-muted-foreground">AI-powered analysis in real-time</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <div className="w-full h-full bg-gradient-conic from-emerald-500 to-blue-500 animate-rotate-slow" />
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassMorphism>
              </AnimatedContainer>
            )}
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="section py-16">
          <AnimatedContainer animation="scale-in">
            <GlassMorphism className="px-6 py-16 rounded-3xl text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-heading-lg">Experience the full protection suite</h2>
                <p className="text-body-lg text-muted-foreground">
                  Gain access to our complete content protection platform with advanced AI features, 
                  blockchain security, and real-time monitoring.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/dashboard" className="btn-primary">
                    View Dashboard
                  </Link>
                  <Link to="/login" className="btn-ghost">
                    Sign In
                  </Link>
                </div>
              </div>
            </GlassMorphism>
          </AnimatedContainer>
        </section>
      </main>
    </>
  );
}
