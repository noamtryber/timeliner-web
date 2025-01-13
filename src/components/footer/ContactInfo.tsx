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
      <div className={`flex items-center gap-2 ${isRTL ? 'justify-end' : ''}`}>
        {isRTL ? (
          <>
            <span className="text-sm text-gray-400">{email}</span>
            <Mail className="w-4 h-4 text-gray-400" />
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{email}</span>
          </>
        )}
      </div>
      <div className={`flex items-center gap-2 ${isRTL ? 'justify-end' : ''}`}>
        {isRTL ? (
          <>
            <span className="text-sm text-gray-400">{phone}</span>
            <Phone className="w-4 h-4 text-gray-400" />
          </>
        ) : (
          <>
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{phone}</span>
          </>
        )}
      </div>
      <div className={`flex items-center gap-2 ${isRTL ? 'justify-end' : ''}`}>
        {isRTL ? (
          <>
            <span className="text-sm text-gray-400">{location}</span>
            <MapPin className="w-4 h-4 text-gray-400" />
          </>
        ) : (
          <>
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{location}</span>
          </>
        )}
      </div>
    </div>
  );
};