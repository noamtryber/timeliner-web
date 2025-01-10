import { motion } from "framer-motion";

interface FrustrationCardProps {
  title: string;
  description: string;
  illustration: string;
  index: number;
  inView: boolean;
}

export const FrustrationCard = ({
  illustration,
  title,
  description,
  index,
  inView
}: FrustrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="glass rounded-2xl p-6 relative group"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6 relative">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            {illustration && (
              <img
                src={illustration}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 gradient-text">{title}</h3>
        <p className="text-white/70 mb-3">{description}</p>
      </div>
    </motion.div>
  );
};