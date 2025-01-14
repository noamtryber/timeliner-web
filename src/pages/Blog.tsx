import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, BookOpen, Book, Play, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const navigate = useNavigate();
  const { language, isRTL } = useLanguage();
  const isSpanish = language === 'es';

  const getContent = () => {
    if (isRTL) {
      return {
        backToHome: 'חזרה לדף הבית',
        title: 'למד, צמח והישאר מעודכן עם אקדמיית טיימליינר',
        subtitle: 'מרכז המשאבים שלך לשליטה בהפקת וידאו, ניהול פרויקטים ושיתוף פעולה עם לקוחות.',
        description: 'מדור הבלוג שלנו הוא יותר מסתם מאמרים - זהו השער שלך לידע מעשי וצמיחה מקצועית. מיועד לעורכי וידאו, סוכנויות ופרילנסרים, מרכז זה מציג תוכן מומחה שיעזור לך להצטיין בתחום שלך.',
        browseArticles: 'עיין במאמרים',
        startCourse: 'התחל קורס',
        searchPlaceholder: 'חפש קורסים ומאמרים...',
        featuredCourses: 'קורסים מובילים',
        latestArticles: 'מאמרים אחרונים',
        courseCategory: 'קורס',
        articleCategory: 'מאמר'
      };
    } else if (isSpanish) {
      return {
        backToHome: 'Volver al Inicio',
        title: 'Aprende, Crece y Mantente Adelante con la Academia Timeliner',
        subtitle: 'Tu centro de recursos para dominar la producción de video, gestión de proyectos y colaboración con clientes.',
        description: 'Nuestra sección de blog es más que solo artículos - es tu puerta de entrada al conocimiento práctico y crecimiento profesional. Diseñado para editores de video, agencias y freelancers, este centro presenta contenido experto para ayudarte a sobresalir en tu campo.',
        browseArticles: 'Explorar Artículos',
        startCourse: 'Comenzar un Curso',
        searchPlaceholder: 'Buscar cursos y artículos...',
        featuredCourses: 'Cursos Destacados',
        latestArticles: 'Últimos Artículos',
        courseCategory: 'Curso',
        articleCategory: 'Artículo'
      };
    } else {
      return {
        backToHome: 'Back to Home',
        title: 'Learn, Grow, and Stay Ahead with Timeliner Academy',
        subtitle: 'Your go-to resource hub for mastering video production, project management, and client collaboration.',
        description: "Our blog section is more than just articles – it's your gateway to actionable knowledge and professional growth. Designed for video editors, agencies, and freelancers, this hub features expert content to help you excel in your field.",
        browseArticles: 'Browse Articles',
        startCourse: 'Start a Course',
        searchPlaceholder: 'Search courses and articles...',
        featuredCourses: 'Featured Courses',
        latestArticles: 'Latest Articles',
        courseCategory: 'Course',
        articleCategory: 'Article'
      };
    }
  };

  const content = getContent();

  const courses = [
    {
      title: isRTL ? 'ייעול תהליך התיקונים עם ציר זמן' : 
             isSpanish ? 'Optimiza las Revisiones con Líneas de Tiempo' :
             'Streamline Revisions with Timelines',
      description: isRTL ? 'שלוט באומנות ניהול תיקונים יעיל ומשוב מלקוחות' :
                   isSpanish ? 'Domina el arte de la gestión eficiente de revisiones y ciclos de retroalimentación del cliente' :
                   'Master the art of efficient revision management and client feedback loops',
      image: "/lovable-uploads/94a8f111-a09f-4217-80ff-c246e3f328d1.png",
      videoId: "cIaOwP8jcFw",
      category: content.courseCategory,
    },
    {
      title: isRTL ? 'ניהול לקוחות 101' :
             isSpanish ? 'Gestión de Clientes 101' :
             'Client Management 101',
      description: isRTL ? 'אסטרטגיות חיוניות לבניית קשרי לקוחות חזקים' :
                   isSpanish ? 'Estrategias esenciales para construir relaciones sólidas con los clientes' :
                   'Essential strategies for building strong client relationships',
      image: "/lovable-uploads/be00c295-a143-43d3-941f-e93fd5b58525.png",
      videoId: "_WHgqxETirM",
      category: content.courseCategory,
    },
    {
      title: isRTL ? 'כלי בינה מלאכותית לעורכי וידאו' :
             isSpanish ? 'Herramientas de IA para Editores de Video' :
             'AI Tools for Video Editors',
      description: isRTL ? 'נצל את הבינה המלאכותית לשיפור תהליך עריכת הווידאו שלך' :
                   isSpanish ? 'Aprovecha la IA para mejorar tu flujo de trabajo de edición de video' :
                   'Leverage AI to enhance your video editing workflow',
      image: "/lovable-uploads/98b8bad0-76f5-4b50-af12-b49cd7309a55.png",
      videoId: "327YDvqSINQ",
      category: content.courseCategory,
    },
  ];

  const articles = [
    {
      title: isRTL ? '5 טעויות תהליך עבודה נפוצות שיש להימנע מהן' :
             isSpanish ? '5 Errores Comunes de Flujo de Trabajo a Evitar' :
             'Top 5 Workflow Mistakes to Avoid',
      description: isRTL ? 'מכשולים נפוצים בתהליכי עריכת וידאו וכיצד להתגבר עליהם' :
                   isSpanish ? 'Errores comunes en los flujos de trabajo de edición de video y cómo superarlos' :
                   'Common pitfalls in video editing workflows and how to overcome them',
      date: "March 15, 2024",
      category: content.articleCategory,
    },
    {
      title: isRTL ? 'שליטה בתקשורת עם לקוחות' :
             isSpanish ? 'Dominando la Comunicación con Clientes' :
             'Mastering Client Communication',
      description: isRTL ? 'טיפים מומחים לתקשורת ברורה ויעילה עם לקוחות' :
                   isSpanish ? 'Consejos expertos para una comunicación clara y efectiva con los clientes' :
                   'Expert tips for clear, effective client interactions',
      date: "March 10, 2024",
      category: content.articleCategory,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className={`container px-4 py-8 mt-20 ${isRTL ? 'rtl' : ''}`}>
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => navigate("/")}
        >
          <ChevronLeft className={`${isRTL ? 'ml-2' : 'mr-2'} h-4 w-4`} />
          {content.backToHome}
        </Button>

        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 subtitle-gradient text-center">
            {content.subtitle}
          </p>
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-gray-400 leading-relaxed">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              {content.browseArticles}
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              {content.startCourse}
            </Button>
          </div>

          <div className="relative mb-12">
            <div className="flex items-center glass rounded-lg px-4 py-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 ml-3 w-full"
              />
            </div>
          </div>
        </div>

        <ScrollArea className="w-full">
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 subtitle-gradient">
              {content.featuredCourses}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="glass hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-6">
                    <div className="mb-4 overflow-hidden rounded-lg relative">
                      <img
                        src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                        alt={course.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
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
              {content.latestArticles}
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