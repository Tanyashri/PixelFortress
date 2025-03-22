
import { WandSparkles } from "lucide-react";
import { useState, useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagicWandProps {
  children: ReactNode;
  color?: string;
  className?: string;
  sparkleCount?: number;
}

export default function MagicWand({
  children,
  color = "text-yellow-300",
  className = "",
  sparkleCount = 5
}: MagicWandProps) {
  const [isActive, setIsActive] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isActive) return;
    
    const createSparkle = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const newSparkles = [];
      
      for (let i = 0; i < sparkleCount; i++) {
        newSparkles.push({
          id: Date.now() + i,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 10 + 10}px`,
            animationDelay: `${Math.random() * 0.5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }
        });
      }
      
      setSparkles(newSparkles);
      
      // Clear sparkles after animation
      setTimeout(() => {
        setSparkles([]);
        setIsActive(false);
      }, 2000);
    };
    
    createSparkle();
  }, [isActive, sparkleCount]);
  
  return (
    <div 
      ref={containerRef}
      className={cn("relative inline-block cursor-pointer", className)}
      onClick={() => setIsActive(true)}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      <div className="absolute top-0 right-0 -mt-3 -mr-3 z-20">
        {isActive && (
          <WandSparkles 
            className={cn("animate-scale-in star-spin", color)} 
            size={24} 
          />
        )}
      </div>
      
      {sparkles.map(sparkle => (
        <Star 
          key={sparkle.id}
          style={sparkle.style}
          className={cn("absolute star-pulse z-0", color)}
        />
      ))}
    </div>
  );
}

const Star = ({ style, className }: { style: React.CSSProperties; className: string }) => (
  <span style={style} className={className}>
    ✦
  </span>
);
