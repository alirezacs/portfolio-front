
import { useLanguage } from "@/context/language-context";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  description?: string;
  delay?: number;
}

export function SkillCard({ title, icon, description, delay = 0 }: SkillCardProps) {
  const { t } = useLanguage();
  
  return (
    <div 
      className="skill-card group"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="text-accent text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>
      {description && <p className="text-muted-foreground text-sm text-center">{t(description)}</p>}
      
      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-xl transform transition-all duration-500 group-hover:scale-150"></div>
    </div>
  );
}
