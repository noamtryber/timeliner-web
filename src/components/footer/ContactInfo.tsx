import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export const ContactInfo = ({ email, phone, location }: ContactInfoProps) => {
  const { isRTL } = useLanguage();
  
  const ContactItem = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
      <Icon className="w-4 h-4 text-gray-400" />
      <span className="text-sm text-gray-400">{text}</span>
    </div>
  );

  return (
    <div className="space-y-2">
      <ContactItem icon={Mail} text={email} />
      <ContactItem icon={Phone} text={phone} />
      <ContactItem icon={MapPin} text={location} />
    </div>
  );
};