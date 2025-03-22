
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassMorphism from "./GlassMorphism";
import AnimatedContainer from "./AnimatedContainer";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  iconColor?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
  iconColor = "text-primary",
  className = "",
}: FeatureCardProps) {
  return (
    <AnimatedContainer animation="scale-in" delay={delay}>
      <GlassMorphism 
        className={cn(
          "p-6 rounded-2xl hover-scale h-full",
          className
        )}
        hoverEffect
      >
        <div className="flex flex-col space-y-4">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10",
            iconColor.replace("text-", "bg-") + "/10"
          )}>
            <Icon className={cn("h-6 w-6", iconColor)} />
          </div>
          
          <h3 className="text-heading-sm">{title}</h3>
          
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </GlassMorphism>
    </AnimatedContainer>
  );
}
