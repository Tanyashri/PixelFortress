
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface StarFieldProps {
  starCount?: number;
  twinkleStars?: number;
  shootingStars?: number;
  className?: string;
}

export default function StarField({
  starCount = 20,
  twinkleStars = 10,
  shootingStars = 3,
  className = "",
}: StarFieldProps) {
  const [stars, setStars] = useState<Array<{ id: number; style: React.CSSProperties; type: string }>>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      
      // Generate twinkling stars
      for (let i = 0; i < twinkleStars; i++) {
        newStars.push({
          id: i,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.5,
          },
          type: 'twinkle'
        });
      }
      
      // Generate pulsing stars
      for (let i = 0; i < starCount - twinkleStars - shootingStars; i++) {
        newStars.push({
          id: i + twinkleStars,
          style: {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          },
          type: 'pulse'
        });
      }
      
      // Generate shooting stars
      for (let i = 0; i < shootingStars; i++) {
        newStars.push({
          id: i + starCount - shootingStars,
          style: {
            top: `${Math.random() * 50}%`,
            left: '-50px',
            animationDelay: `${Math.random() * 10 + 2}s`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          },
          type: 'shoot'
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
    
    // Regenerate stars occasionally for a dynamic feel
    const interval = setInterval(() => {
      generateStars();
    }, 15000);
    
    return () => clearInterval(interval);
  }, [starCount, twinkleStars, shootingStars]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {stars.map((star) => {
        if (star.type === 'twinkle') {
          return (
            <Star 
              key={`twinkle-${star.id}`}
              className="star-twinkle text-yellow-200"
              style={star.style}
              size={Math.random() * 10 + 10}
              fill="currentColor"
            />
          );
        } else if (star.type === 'pulse') {
          return (
            <Star 
              key={`pulse-${star.id}`}
              className="star-pulse"
              style={star.style}
              size={Math.random() * 8 + 8}
              fill="currentColor"
            />
          );
        } else if (star.type === 'shoot') {
          return (
            <div 
              key={`shoot-${star.id}`}
              className="star-shoot"
              style={star.style}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
