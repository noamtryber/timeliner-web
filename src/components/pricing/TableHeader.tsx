
import { useLanguage } from "@/contexts/LanguageContext";

export const TableHeader = () => {
  const { language, isRTL } = useLanguage();

  return (
    <tr className="border-b border-white/10">
      <th className={`p-4 ${isRTL ? 'text-right' : 'text-left'} font-medium text-white/70`}>
        {language === 'he' ? 'תכונה' : 
         language === 'ar' ? 'الميزة' : 
         language === 'es' ? 'Característica' : 
         'Feature'}
      </th>
      <th className="p-4 text-center font-medium text-white/70">Free</th>
      <th className="p-4 text-center font-medium text-white/70">Essentials ($29/mo)</th>
      <th className="p-4 text-center font-medium text-white/70">Studio ($49/mo)</th>
      <th className="p-4 text-center font-medium text-white/70">
        {language === 'he' ? 'אנטרפרייז (מותאם)' :
         language === 'ar' ? 'إنتربرايز (مخصص)' :
         language === 'es' ? 'Enterprise (Personalizado)' :
         'Enterprise (Custom)'}
      </th>
    </tr>
  );
};
