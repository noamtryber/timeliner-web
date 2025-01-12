import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export const ContactInfo = ({ email, phone, location }: ContactInfoProps) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="space-y-2">
      <div className={`flex items-center gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Mail className="w-4 h-4" />
        <span>{email}</span>
      </div>
      <div className={`flex items-center gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <Phone className="w-4 h-4" />
        <span>{phone}</span>
      </div>
      <div className={`flex items-center gap-2 text-sm text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </div>
  );
};