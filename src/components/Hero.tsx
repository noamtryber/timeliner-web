import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { usePageContent } from "@/hooks/usePageContent";
import { useMediaContent } from "@/hooks/useMediaContent";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const { data: content, error: contentError } = usePageContent('hero', 'main');
  const { data: media, error: mediaError } = useMediaContent('hero', 'main');
  const { toast } = useToast();

  if (contentError || mediaError) {
    toast({
      variant: "destructive",
      title: "Error loading content",
      description: "Please try refreshing the page"
    });
  }

  const getContent = (key: string) => {
    return content?.find(item => item.content_key === key)?.content_value || '';
  };

  const getMedia = (key: string) => {
    return media?.find(item => item.media_key === key)?.media_url || '';
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-accent/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative animate-fade-up">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary/80 font-medium mb-4 block tracking-wide">
            {getContent('subtitle')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text tracking-tight leading-tight">
            {getContent('title')}
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto w-full sm:w-auto"
            >
              {getContent('cta_primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/10 text-lg px-8 py-6 h-auto w-full sm:w-auto hover:bg-white/5"
            >
              <Play className="mr-2 h-5 w-5" />
              {getContent('cta_secondary')}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_projects')}</div>
              <div className="text-white/70">{getContent('stats_projects_label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_clients')}</div>
              <div className="text-white/70">{getContent('stats_clients_label')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{getContent('stats_revenue')}</div>
              <div className="text-white/70">{getContent('stats_revenue_label')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};