import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQ = () => {
  const { language } = useLanguage();
  const isHebrew = language === 'he';
  const isSpanish = language === 'es';

  const faqs = [
    {
      question: isSpanish 
        ? "¿Qué pasa si los clientes no quieren usar el sistema y cómo los convenzo?"
        : isHebrew 
          ? "מה אם הלקוחות לא רוצים להשתמש במערכת, ואיך לגרום להם להתחיל?"
          : "What if clients don't want use the system, and how do I get them to start?",
      answer: isSpanish
        ? "Timeliner está diseñado para ser intuitivo y fácil de usar, lo que facilita la adaptación de los clientes. Proporcionamos recursos de capacitación y plantillas para ayudarte a presentar el sistema. Muchos usuarios descubren que una vez que los clientes experimentan la comunicación fluida y el proceso de retroalimentación, rápidamente aprecian el valor."
        : isHebrew 
          ? "Timeliner תוכנן להיות אינטואיטיבי וידידותי למשתמש, מה שמקל על הלקוחות להסתגל. אנו מספקים משאבי הדרכה ותבניות כדי לעזור לכם להציג את המערכת ללקוחות. משתמשים רבים מגלים שברגע שהלקוחות חווים את התקשורת החלקה ותהליך המשוב, הם מעריכים את הערך במהירות."
          : "Timeliner is designed to be intuitive and user-friendly, making it easy for clients to adapt. We provide onboarding resources and templates to help you introduce the system to clients. Many users find that once clients experience the streamlined communication and feedback process, they quickly appreciate the value."
    },
    {
      question: isSpanish
        ? "¿Cuál es la diferencia entre los planes Basic y Pro?"
        : isHebrew 
          ? "מה ההבדל בין התוכניות Basic ו-Pro?"
          : "What's the difference between the Basic and Pro plans?",
      answer: isSpanish
        ? "Mientras que ambos planes ofrecen características esenciales de gestión de proyectos, el plan Pro incluye funciones avanzadas como marca personalizada, soporte prioritario y herramientas ampliadas de colaboración en equipo. Los usuarios Pro obtienen más almacenamiento, pueden manejar equipos más grandes y acceder a funciones premium como bibliotecas de referencia y análisis avanzados."
        : isHebrew 
          ? "בעוד ששתי התוכניות מציעות תכונות ניהול פרויקטים בסיסיות, תוכנית Pro כוללת תכונות מתקדמות כמו מיתוג מותאם אישית, תמיכה בעדיפות גבוהה וכלים מורחבים לשיתוף פעולה בצוות. משתמשי Pro מקבלים יותר אחסון, יכולים לנהל צוותים גדולים יותר ומקבלים גישה לתכונות פרימיום כמו ספריות עזר ואנליטיקה מתקדמת."
          : "While both plans offer essential project management features, the Pro plan includes advanced features like custom branding, priority support, and expanded team collaboration tools. Pro users get more storage, can handle larger teams, and access premium features like reference libraries and advanced analytics."
    },
    {
      question: isSpanish
        ? "¿Cómo mejora Timeliner la gestión de proyectos de edición de video?"
        : isHebrew 
          ? "איך Timeliner משפר את ניהול פרויקטים של עריכת וידאו?"
          : "How does Timeliner improve video editing project management?",
      answer: isSpanish
        ? "Timeliner optimiza todo el flujo de trabajo de edición de video al centralizar la comunicación, retroalimentación y compartición de archivos en una sola plataforma. Ofrece características como comentarios basados en código de tiempo, control de versiones y seguimiento automático del estado, haciendo la gestión de proyectos más eficiente y reduciendo la comunicación innecesaria."
        : isHebrew 
          ? "Timeliner מפשט את כל תהליך העבודה של עריכת וידאו על ידי ריכוז התקשורת, המשוב ושיתוף הקבצים בפלטפורמה אחת. הוא מציע תכונות כמו תגובות מבוססות קוד זמן, בקרת גרסאות ומעקב סטטוס אוטומטי, מה שהופך את ניהול הפרויקטים ליעיל יותר ומפחית את התקשורת החוזרת."
          : "Timeliner streamlines the entire video editing workflow by centralizing communication, feedback, and file sharing in one platform. It offers features like timecode-based comments, version control, and automated status tracking, making project management more efficient and reducing back-and-forth communication."
    },
    {
      question: isSpanish
        ? "¿Timeliner garantiza pagos puntuales de los clientes?"
        : isHebrew 
          ? "האם Timeliner מבטיח תשלומים בזמן מהלקוחות?"
          : "Does Timeliner ensure timely payments from clients?",
      answer: isSpanish
        ? "Si bien Timeliner no procesa pagos directamente, ayuda a mantener hitos y entregables claros del proyecto, facilitando el seguimiento del progreso y la justificación de la facturación. Puedes configurar hitos de pago y notificar automáticamente a los clientes cuando se alcancen."
        : isHebrew 
          ? "למרות ש-Timeliner אינו מעבד תשלומים ישירות, הוא מסייע לשמור על אבני דרך ותוצרים ברורים לפרויקט, מה שמקל על מעקב ההתקדמות והצדקת החיוב. תוכלו להגדיר אבני דרך לתשלומים ולהודיע ללקוחות באופן אוטומטי כאשר אלו מושגות."
          : "While Timeliner doesn't directly process payments, it helps maintain clear project milestones and deliverables, making it easier to track progress and justify billing. You can set up payment milestones and automatically notify clients when these are reached."
    },
    {
      question: isSpanish
        ? "¿Puede Timeliner manejar múltiples miembros de equipo y clientes?"
        : isHebrew 
          ? "האם Timeliner יכול להתמודד עם מספר חברי צוות ולקוחות?"
          : "Can Timeliner handle multiple team members and clients?",
      answer: isSpanish
        ? "¡Sí! Timeliner está construido para la colaboración. Puedes agregar miembros del equipo y clientes con diferentes niveles de permisos, gestionar múltiples proyectos simultáneamente y mantener canales de comunicación claros para cada proyecto."
        : isHebrew 
          ? "כן! Timeliner נבנה לשיתוף פעולה. תוכלו להוסיף חברי צוות ולקוחות עם רמות הרשאה שונות, לנהל מספר פרויקטים במקביל ולשמור על ערוצי תקשורת ברורים לכל פרויקט."
          : "Yes! Timeliner is built for collaboration. You can add team members and clients with different permission levels, manage multiple projects simultaneously, and maintain clear communication channels for each project."
    },
    {
      question: isSpanish
        ? "¿Puedo cancelar mi suscripción en cualquier momento?"
        : isHebrew 
          ? "האם ניתן לבטל את המנוי בכל עת?"
          : "Can I cancel my subscription anytime?",
      answer: isSpanish
        ? "Absolutamente. No se requieren contratos a largo plazo. Puedes cancelar tu suscripción en cualquier momento y continuarás teniendo acceso hasta el final de tu período de facturación actual."
        : isHebrew 
          ? "בהחלט. אין צורך בחוזים לטווח ארוך. תוכלו לבטל את המנוי בכל עת, ותמשיכו ליהנות מגישה עד לסוף תקופת החיוב הנוכחית שלכם."
          : "Absolutely. There are no long-term contracts required. You can cancel your subscription at any time, and you'll continue to have access until the end of your current billing period."
    },
    {
      question: isSpanish
        ? "¿Es Timeliner adecuado tanto para freelancers como para grandes agencias?"
        : isHebrew 
          ? "האם Timeliner מתאים גם לפרילנסרים וגם לסוכנויות גדולות?"
          : "Is Timeliner suitable for freelancers and large agencies alike?",
      answer: isSpanish
        ? "¡Sí! Nuestros planes flexibles se adaptan a diferentes necesidades. Los freelancers pueden comenzar con el plan Basic y escalar a medida que crecen, mientras que las agencias pueden utilizar los planes Pro o Enterprise para una colaboración más extensa en equipo y necesidades avanzadas de gestión de proyectos."
        : isHebrew 
          ? "כן! התוכניות הגמישות שלנו מתאימות לצרכים שונים. פרילנסרים יכולים להתחיל עם התוכנית Basic ולהתרחב ככל שהם גדלים, בעוד שסוכנויות יכולות לנצל את התוכניות Pro או Enterprise לשיתוף פעולה רחב יותר בצוותים ולצרכים מתקדמים בניהול פרויקטים."
          : "Yes! Our flexible plans cater to different needs. Freelancers can start with the Basic plan and scale up as they grow, while agencies can utilize the Pro or Enterprise plans for more extensive team collaboration and project management needs."
    },
    {
      question: isSpanish
        ? "¿Qué sucede si necesito ayuda para configurar o usar Timeliner?"
        : isHebrew 
          ? "מה אם אני זקוק לעזרה בהגדרת או שימוש ב-Timeliner?"
          : "What if I need help setting up or using Timeliner?",
      answer: isSpanish
        ? "Proporcionamos soporte integral a través de nuestra documentación, tutoriales en video y equipo de soporte dedicado. Los usuarios del plan Basic reciben soporte comunitario, mientras que los usuarios Pro y Enterprise reciben soporte prioritario con tiempos de respuesta más rápidos."
        : isHebrew 
          ? "אנו מספקים תמיכה מקיפה דרך תיעוד, מדריכי וידאו וצוות תמיכה ייעודי. משתמשי תוכנית Basic מקבלים תמיכה קהילתית, בעוד שמשתמשי Pro ו-Enterprise מקבלים תמיכה בעדיפות גבוהה עם זמני תגובה מהירים יותר."
          : "We provide comprehensive support through our documentation, video tutorials, and dedicated support team. Basic plan users get community support, while Pro and Enterprise users receive priority support with faster response times."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[100%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-[40%] -left-[20%] w-[70%] h-[100%] bg-secondary/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            {isSpanish 
              ? "Tus Preguntas, Respondidas"
              : isHebrew 
                ? "כל התשובות לשאלות שלכם"
                : "Your Questions, Answered"}
          </h2>
          <p className="text-xl text-white/70 animate-fade-up delay-100">
            {isSpanish
              ? "Encuentra respuestas a las preguntas más frecuentes sobre Timeliner."
              : isHebrew 
                ? "קבלו מענה לשאלות נפוצות על טיימליינר."
                : "Find answers to commonly asked questions about Timeliner."}
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass rounded-xl p-6 animate-fade-up delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className={`${isHebrew ? 'text-right' : 'text-left'} hover:text-primary transition-colors`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className={`text-white/70 ${isHebrew ? 'text-right' : 'text-left'}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};