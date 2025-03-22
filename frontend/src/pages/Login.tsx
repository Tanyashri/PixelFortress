
import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, LogIn, AtSign, KeyRound, Eye, EyeOff } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlassMorphism from "@/components/GlassMorphism";
import AnimatedContainer from "@/components/AnimatedContainer";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-4 flex items-center justify-center">
        <div className="container max-w-screen-xl mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animation and Graphics Side */}
            <AnimatedContainer animation="fade-in" className="hidden lg:block">
              <div className="relative p-8">
                <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent rounded-3xl" />
                
                <div className="relative space-y-8">
                  <h2 className="text-heading-lg">Secure Your Digital Content</h2>
                  <p className="text-body-lg text-muted-foreground max-w-md">
                    Access the most advanced content protection platform powered by AI and blockchain technology.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 py-4">
                    {[
                      { label: "Watermark Detection", value: "Real-time" },
                      { label: "Deepfake Protection", value: "AI-powered" },
                      { label: "Blockchain Security", value: "Decentralized" },
                      { label: "Legal Compliance", value: "Automated" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-1/4 right-1/4 -z-10 w-40 h-40 rounded-full border border-primary/20 animate-pulse-subtle" />
                  <div className="absolute bottom-1/4 left-1/4 -z-10 w-60 h-60 rounded-full border border-primary/20 animate-rotate-slow" />
                </div>
              </div>
            </AnimatedContainer>
            
            {/* Auth Form Side */}
            <AnimatedContainer animation="slide-up">
              <GlassMorphism className="rounded-3xl p-8 md:p-10 max-w-md mx-auto lg:ml-auto">
                <div className="mb-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h1 className="text-heading-md mb-2">
                    {isLogin ? "Sign in to your account" : "Create an account"}
                  </h1>
                  <p className="text-muted-foreground">
                    {isLogin 
                      ? "Enter your credentials to access the platform" 
                      : "Join us to protect your content assets"
                    }
                  </p>
                </div>
                
                <form className="space-y-6">
                  {!isLogin && (
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          className="w-full h-11 pl-10 rounded-md border border-border bg-white/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        className="w-full h-11 pl-10 rounded-md border border-border bg-white/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Enter your email address"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <AtSign className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      {isLogin && (
                        <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                          Forgot password?
                        </Link>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="w-full h-11 pl-10 pr-10 rounded-md border border-border bg-white/60 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder="Enter your password"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <KeyRound className="h-5 w-5" />
                      </div>
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>{isLogin ? "Sign In" : "Create Account"}</span>
                  </button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                      type="button"
                      className="ml-1 text-primary hover:underline"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>
              </GlassMorphism>
            </AnimatedContainer>
          </div>
        </div>
      </main>
    </>
  );
}
