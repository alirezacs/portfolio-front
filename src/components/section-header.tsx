
import { useLanguage } from "@/context/language-context";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  const { t } = useLanguage();
  
  return (
    <div className={`mb-10 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-2 inline-block text-shimmer">
        {t(title)}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t(subtitle)}
        </p>
      )}
      <div className="mt-2 flex justify-center">
        <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
      </div>
    </div>
  );
}
