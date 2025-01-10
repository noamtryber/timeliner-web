import { useInView } from "react-intersection-observer";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/hooks/use-toast";
import { FrustrationCard } from "./frustrations/FrustrationCard";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const Frustrations = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { data: content, error: contentError } = usePageContent('feature');
  const { data: media, error: mediaError } = useMediaContent('feature');
  const { toast } = useToast();

  useEffect(() => {
    if (contentError || mediaError) {
      toast({
        variant: "destructive",
        title: "Error loading content",
        description: "Please try refreshing the page"
      });
    }
  }, [contentError, mediaError, toast]);

  const getContent = (sectionId: string, key: string) => {
    return content?.find(item => 
      item.section_id === sectionId && 
      item.content_key === key
    )?.content_value || '';
  };

  const getMedia = (sectionId: string, key: string) => {
    return media?.find(item => 
      item.section_id === sectionId && 
      item.media_key === key
    )?.media_url || '';
  };

  const frustrations = [
    {
      id: 'expectations',
      illustration: getMedia('expectations', 'illustration'),
      title: getContent('expectations', 'title'),
      description: getContent('expectations', 'description'),
    },
    {
      id: 'revisions',
      illustration: getMedia('revisions', 'illustration'),
      title: getContent('revisions', 'title'),
      description: getContent('revisions', 'description'),
    },
    {
      id: 'payments',
      illustration: getMedia('payments', 'illustration'),
      title: getContent('payments', 'title'),
      description: getContent('payments', 'description'),
      subtext: getContent('payments', 'subtext'),
    },
    {
      id: 'tools',
      illustration: getMedia('tools', 'illustration'),
      title: getContent('tools', 'title'),
      description: getContent('tools', 'description'),
      subtext: getContent('tools', 'subtext'),
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {getContent('main', 'title')}
          </h2>
          <p className="text-xl text-white/70">
            {getContent('main', 'subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {frustrations.map((frustration, index) => (
            <FrustrationCard
              key={frustration.id}
              {...frustration}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-3 gradient-text">
            {getContent('main', 'cta_text')}
          </h3>
          <p className="text-lg text-white/70">
            {getContent('main', 'cta_subtext')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};