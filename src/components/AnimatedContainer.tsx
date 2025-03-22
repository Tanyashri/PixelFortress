
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AnimationVariant = 
  | "fade-in" 
  | "slide-up" 
  | "slide-down" 
  | "scale-in" 
  | "none";

interface AnimatedContainerProps {
  children: ReactNode;
  animation?: AnimationVariant;
  delay?: number;
  className?: string;
}

export default function AnimatedContainer({
  children,
  animation = "fade-in",
  delay = 0,
  className = "",
}: AnimatedContainerProps) {
  const getAnimationClass = () => {
    if (animation === "none") return "";
    return `animate-${animation}`;
  };

  const getDelayStyle = () => {
    if (delay === 0) return {};
    return { animationDelay: `${delay}ms` };
  };

  return (
    <div 
      className={cn(getAnimationClass(), className)} 
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
}
