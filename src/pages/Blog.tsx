import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, BookOpen, Book, Play, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Blog = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Streamline Revisions with Timelines",
      description: "Master the art of efficient revision management and client feedback loops",
      image: "/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png",
      category: "Course",
    },
    {
      title: "Client Management 101",
      description: "Essential strategies for building strong client relationships",
      image: "/lovable-uploads/be00c295-a143-43d3-941f-e93fd5b58525.png",
      category: "Course",
    },
    {
      title: "AI Tools for Video Editors",
      description: "Leverage AI to enhance your video editing workflow",
      image: "/lovable-uploads/98b8bad0-76f5-4b50-af12-b49cd7309a55.png",
      category: "Course",
    },
  ];

  const articles = [
    {
      title: "Top 5 Workflow Mistakes to Avoid",
      description: "Common pitfalls in video editing workflows and how to overcome them",
      date: "March 15, 2024",
      category: "Article",
    },
    {
      title: "Mastering Client Communication",
      description: "Expert tips for clear, effective client interactions",
      date: "March 10, 2024",
      category: "Article",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 py-8 mt-20">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            Learn, Grow, and Stay Ahead with Timeliner Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 subtitle-gradient text-center">
            Your go-to resource hub for mastering video production, project management, and client collaboration.
          </p>
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-400 leading-relaxed">
              Our blog section is more than just articles – it's your gateway to actionable knowledge and professional growth. 
              Designed for video editors, agencies, and freelancers, this hub features expert content to help you excel in your field.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Browse Articles
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Start a Course
            </Button>
          </div>

          <div className="relative mb-12">
            <div className="flex items-center glass rounded-lg px-4 py-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses and articles..."
                className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 ml-3 w-full"
              />
            </div>
          </div>
        </div>

        <ScrollArea className="w-full">
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 subtitle-gradient">
              Featured Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="glass hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-6">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-primary/20 text-primary mb-3">
                      {course.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-400">{course.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8 subtitle-gradient">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="glass hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-accent/20 text-accent mb-3">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-400 mb-4">{article.description}</p>
                    <time className="text-sm text-gray-500">{article.date}</time>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Blog;