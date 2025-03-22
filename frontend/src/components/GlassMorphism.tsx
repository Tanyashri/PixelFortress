
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassMorphismProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hoverEffect?: boolean;
}

export default function GlassMorphism({
  children,
  className = "",
  variant = "light",
  hoverEffect = false,
}: GlassMorphismProps) {
  return (
    <div 
      className={cn(
        variant === "light" ? "glass" : "glass-dark",
        hoverEffect && "transition-all duration-300 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
