import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'he', name: 'עברית' },
] as const;

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const buttonText = language === 'he' ? 'הגדרת שפה' : 'Select Language';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 text-white hover:text-white w-full justify-start text-base font-medium md:w-auto md:text-sm md:px-3 px-0"
        >
          <Globe className="h-[1.2rem] w-[1.2rem] md:text-white text-white" />
          <span className="md:text-white text-white">{buttonText}</span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px] bg-card z-[10000]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${
              language === lang.code ? 'bg-accent' : ''
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};