import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FrustrationCardProps {
  title: string;
  description: string;
  illustration?: string;
  icon: LucideIcon;
  index: number;
  inView: boolean;
  iconType: 'expectations' | 'payments' | 'tools' | 'time';
}

export const FrustrationCard = ({
  illustration,
  icon: Icon,
  title,
  description,
  index,
  inView,
  iconType
}: FrustrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="glass rounded-2xl p-6 relative group"
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6 relative">
          <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 flex items-center justify-center relative">
            {/* Gradient background with animation */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 opacity-50 animate-shimmer"
              style={{
                backgroundSize: '200% 100%',
              }}
            />
            
            {/* Icon */}
            <Icon 
              className="w-12 h-12 relative z-10 text-white transition-transform duration-300 group-hover:scale-110" 
              strokeWidth={1.5}
            />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 gradient-text text-center">{title}</h3>
        <p className="text-white/70 mb-3 text-center">{description}</p>
      </div>
    </motion.div>
  );
};