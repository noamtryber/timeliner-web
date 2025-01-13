import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Blog = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "React Mastery",
      description: "Master React with hands-on projects and real-world examples",
      image: "/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png",
      category: "Course",
    },
    {
      title: "TypeScript Fundamentals",
      description: "Learn TypeScript from basics to advanced concepts",
      image: "/lovable-uploads/be00c295-a143-43d3-941f-e93fd5b58525.png",
      category: "Course",
    },
  ];

  const articles = [
    {
      title: "Building Scalable Applications",
      description: "Learn best practices for building scalable web applications",
      date: "March 15, 2024",
      category: "Article",
    },
    {
      title: "Modern Web Development",
      description: "Explore the latest trends in web development",
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

        <h1 className="text-4xl font-bold mb-12 gradient-text">
          Learn & Grow with Us
        </h1>

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
      </div>
    </div>
  );
};

export default Blog;