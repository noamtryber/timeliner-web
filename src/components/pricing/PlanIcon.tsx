import { LucideIcon } from "lucide-react";

interface PlanIconProps {
  Icon: LucideIcon;
  color: string;
}

export const PlanIcon = ({ Icon, color }: PlanIconProps) => (
  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}/10 mb-6 mx-auto relative group transition-all duration-300`}>
    <div className={`absolute inset-0 rounded-full bg-${color}/20 blur-md group-hover:blur-xl transition-all duration-300`} />
    <Icon className={`w-6 h-6 text-${color} relative z-10 animate-pulse`} />
  </div>
);