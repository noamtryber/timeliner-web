import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MessageSquare, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Map from "@/components/community/Map";

const Community = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="fixed top-24 left-4 text-white/70 hover:text-white flex items-center gap-2 px-3 py-2 rounded-md text-sm"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-down">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Join the Timeliner Community
          </h1>
          <p className="text-xl md:text-2xl text-white/70">
            Collaborate, share, and grow with video editors and creators from around the world.
          </p>
        </div>

        {/* Discord Callout */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#5865F2]/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-[#5865F2]/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <img 
                  src="/lovable-uploads/b1c9504e-da95-474e-ba33-779d5ce940e3.png"
                  alt="Discord Logo"
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Join Our Discord Community</h3>
                <p className="text-white/80">
                  Connect with fellow creators, share your work, get feedback, and stay updated with the latest features and events.
                </p>
                <Button 
                  size="lg"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-6 text-lg flex items-center gap-2 w-full md:w-auto"
                >
                  <MessageSquare className="h-5 w-5" />
                  Join Our Discord
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-4xl mx-auto prose prose-invert">
          <p className="text-lg text-white/80">
            Step into the heart of the Timeliner experience by joining our exclusive Discord community! Whether you're a freelance editor, agency professional, or content creator, this is your space to:
          </p>
          <ul className="space-y-4 text-white/80">
            <li>
              <strong className="text-primary">Connect with Peers:</strong> Engage with like-minded professionals, exchange tips, and build your network in the industry.
            </li>
            <li>
              <strong className="text-primary">Share Knowledge:</strong> Get insider advice on using Timeliner, optimizing workflows, and solving project challenges.
            </li>
            <li>
              <strong className="text-primary">Exclusive Updates:</strong> Be the first to hear about new features, product updates, and community events.
            </li>
            <li>
              <strong className="text-primary">Collaborate and Inspire:</strong> Share your work, get feedback, and collaborate on creative projects with fellow Timeliner users.
            </li>
          </ul>
        </div>

        {/* Interactive Map */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">Our Global Community</h2>
          <Map />
        </div>

        {/* Community Videos */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Community Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Video Editing Tips",
                author: "EditPro",
                thumbnail: "https://img.youtube.com/vi/kVoWSFbuACY/maxresdefault.jpg",
                videoId: "kVoWSFbuACY"
              },
              {
                title: "Mastering Timeline Management",
                author: "VideoMaster",
                thumbnail: "https://img.youtube.com/vi/VIAzT2ZYcHA/maxresdefault.jpg",
                videoId: "VIAzT2ZYcHA"
              },
              {
                title: "Professional Editing Workflow",
                author: "CreativePro",
                thumbnail: "https://img.youtube.com/vi/5Tcw1rNy_go/maxresdefault.jpg",
                videoId: "5Tcw1rNy_go"
              }
            ].map((video, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-video hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <Play className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-lg font-semibold text-center px-4">{video.title}</h3>
                  <p className="text-sm text-white/70">by {video.author}</p>
                </div>
                <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-xs font-medium">
                  Created with Timeliner
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24 mb-16">
          <div className="max-w-3xl mx-auto bg-card/50 rounded-xl p-8">
            <p className="text-lg italic text-white/90">
              "The Timeliner Discord has completely transformed how I manage projects. The support and tips are invaluable!"
            </p>
            <p className="mt-4 text-white/70">
              — Alex Thompson, Freelance Video Editor
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;