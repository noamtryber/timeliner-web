import { LucideIcon, Zap, Rocket, Crown, Star } from "lucide-react";

interface PlanIconProps {
  type: 'free' | 'basic' | 'pro' | 'enterprise';
}

const iconMap: Record<PlanIconProps['type'], { Icon: LucideIcon; color: string }> = {
  free: { Icon: Zap, color: 'primary' },
  basic: { Icon: Star, color: 'primary' },
  pro: { Icon: Rocket, color: 'secondary' },
  enterprise: { Icon: Crown, color: 'primary' }
};

export const PlanIcon = ({ type }: PlanIconProps) => {
  const { Icon, color } = iconMap[type];
  
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${color}/10 mb-6 mx-auto relative group transition-all duration-300`}>
      <div className={`absolute inset-0 rounded-full bg-${color}/20 blur-md group-hover:blur-xl transition-all duration-300`} />
      <Icon className={`w-6 h-6 text-${color} relative z-10 animate-pulse`} />
    </div>
  );
};