import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfoProps {
  email: string;
  phone: string;
  location: string;
}

export const ContactInfo = ({ email, phone, location }: ContactInfoProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <Mail className="w-4 h-4" />
        <span>{email}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <Phone className="w-4 h-4" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <MapPin className="w-4 h-4" />
        <span>{location}</span>
      </div>
    </div>
  );
};