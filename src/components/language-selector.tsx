
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/context/language-context";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative overflow-hidden group">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("language")}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fa")}>
          فارسی
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
