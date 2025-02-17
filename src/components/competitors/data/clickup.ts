import { Competitor } from "../types";

export const clickup: Competitor = {
  id: "clickup",
  name: "ClickUp",
  logo: "/lovable-uploads/d4d71abe-8984-4b88-baf8-c4dd913ee9b6.png",
  features: [
    {
      name: "Pricing",
      hebrewName: "תמחור",
      spanishName: "Precios",
      competitor: "$7/user/month (Unlimited Plan) = $35/month for 5 users\n$12/user/month (Business Plan) = $60/month for 5 users\n$360/month for 30 users",
      hebrewCompetitor: "$7 למשתמש לחודש (תכנית ללא הגבלה) = $35 לחודש עבור 5 משתמשים\n$12 למשתמש לחודש (תכנית עסקית) = $60 לחודש עבור 5 משתמשים\n$360 לחודש עבור 30 משתמשים",
      spanishCompetitor: "$7/usuario/mes (Plan Ilimitado) = $35/mes para 5 usuarios\n$12/usuario/mes (Plan Business) = $60/mes para 5 usuarios\n$360/mes para 30 usuarios",
      timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
      hebrewTimeliner: "$29 לחודש (עד 5 משתמשים)\n$49 לחודש (עד 30 משתמשים)",
      spanishTimeliner: "$29/mes (hasta 5 usuarios)\n$49/mes (hasta 30 usuarios)",
      keyTakeaways: [
        {
          type: "negative",
          text: "ClickUp is a fantastic general project management tool, offering task tracking, automation, and time management—great for businesses handling diverse projects. It even has basic video commenting, but it lacks dedicated video review tools, AI captions, media storage, and advanced creative workflows.",
          hebrewText: "ClickUp הוא כלי מצוין לניהול פרויקטים כללי, המציע מעקב אחר משימות, אוטומציה וניהול זמן - מעולה לעסקים המטפלים בפרויקטים מגוונים. יש לו אפילו אפשרות בסיסית להערות על וידאו, אבל חסרים לו כלי ביקורת וידאו ייעודיים, כתוביות AI, אחסון מדיה וזרימות עבודה יצירתיות מתקדמות.",
          spanishText: "ClickUp es una excelente herramienta de gestión de proyectos general, que ofrece seguimiento de tareas, automatización y gestión del tiempo, ideal para empresas que manejan proyectos diversos. Incluso tiene comentarios básicos de video, pero carece de herramientas dedicadas de revisión de video, subtítulos AI, almacenamiento de medios y flujos de trabajo creativos avanzados."
        },
        {
          type: "positive",
          text: "Timeliner is tailor-made for video production workflows, combining Kanban-style project tracking, video review tools, media storage, CRM, and client collaboration in one place. Plus, audio comments, AI captions, and WhatsApp integrations ensure smoother communication for video editors and creative teams. Flat pricing makes it scalable, without the per-user cost of ClickUp.",
          hebrewText: "Timeliner נבנתה במיוחד לזרימות עבודה של הפקות וידאו, משלבת מעקב פרויקטים בסגנון קנבן, כלי ביקורת וידאו, אחסון מדיה, CRM ושיתוף פעולה עם לקוחות במקום אחד. בנוסף, הערות קוליות, כתוביות AI ואינטגרציות עם וואטסאפ מבטיחות תקשורת חלקה יותר לעורכי וידאו וצוותים יצירתיים. תמחור קבוע הופך אותה לסקיילבילית, ללא העלות לפי משתמש של ClickUp.",
          spanishText: "Timeliner está diseñado específicamente para flujos de trabajo de producción de video, combinando seguimiento de proyectos estilo Kanban, herramientas de revisión de video, almacenamiento de medios, CRM y colaboración con clientes en un solo lugar. Además, los comentarios de audio, subtítulos AI e integraciones de WhatsApp aseguran una comunicación más fluida para editores de video y equipos creativos. El precio fijo lo hace escalable, sin el costo por usuario de ClickUp."
        }
      ]
    },
    {
      name: "Time-Synced Comments",
      hebrewName: "תגובות מסונכרנות לזמן הוידאו",
      spanishName: "Comentarios sincronizados con el tiempo",
      competitor: true,
      timeliner: true
    },
    {
      name: "Client-Friendly Review Links",
      hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
      spanishName: "Enlaces de revisión amigables para clientes",
      competitor: "Requires complex task sharing",
      hebrewCompetitor: "דורש שיתוף משימות מורכב",
      spanishCompetitor: "Requiere compartir tareas complejas",
      timeliner: true
    },
    {
      name: "Intuitive Split Screen Version Comparison",
      hebrewName: "השוואת גרסאות במסך מפוצל",
      spanishName: "Comparación de versiones en pantalla dividida",
      competitor: false,
      timeliner: true
    },
    {
      name: "Interactive New Offer Workflow",
      hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
      spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
      competitor: false,
      timeliner: true
    },
    {
      name: "WhatsApp Business Integration",
      hebrewName: "אינטגרציה עם וואטסאפ",
      spanishName: "Integración con WhatsApp Business",
      competitor: false,
      timeliner: true
    },
    {
      name: "Team Monitoring & Productivity Tracking",
      hebrewName: "מעקב אחר משימות וביצועי צוות",
      spanishName: "Seguimiento de equipo y productividad",
      competitor: true,
      timeliner: "More advanced media-specific tracking",
      hebrewTimeliner: "מעקב מתקדם יותר המותאם למדיה",
      spanishTimeliner: "Seguimiento más avanzado específico para medios"
    },
    {
      name: "Add comments using voice recordings",
      hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
      spanishName: "Agregar comentarios usando grabaciones de voz",
      competitor: false,
      timeliner: true
    },
    {
      name: "Fit to RTL languages (Arabic, Hebrew)",
      hebrewName: "תמיכה בשפות RTL (ערבית, עברית)",
      spanishName: "Adaptado a idiomas RTL (árabe, hebreo)",
      competitor: false,
      timeliner: true
    },
    {
      name: "Pro Portfolio Builder",
      hebrewName: "בניית תיק עבודות מקצועי",
      spanishName: "Constructor de portafolio profesional",
      competitor: false,
      timeliner: true
    },
    {
      name: "Educational Resources & 1-on-1 Onboarding",
      hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
      spanishName: "Recursos educativos y capacitación 1 a 1",
      competitor: "Limited to project management training",
      hebrewCompetitor: "מוגבל להדרכות ניהול פרויקטים",
      spanishCompetitor: "Limitado a capacitación en gestión de proyectos",
      timeliner: true
    },
    {
      name: "Costs rise exponentially as team grows",
      hebrewName: "תמחור גדל ככל שהצוות מתרחב",
      spanishName: "Los costos aumentan exponencialmente a medida que crece el equipo",
      competitor: "$360/month for 30 users, pricing increases per user",
      hebrewCompetitor: "$360 לחודש עבור 30 משתמשים, המחיר עולה לפי משתמש",
      spanishCompetitor: "$360/mes para 30 usuarios, el precio aumenta por usuario",
      timeliner: "Flat pricing covers up to 30 users with no extra fees",
      hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!",
      spanishTimeliner: "Precio fijo cubre hasta 30 usuarios sin cargos adicionales"
    }
  ]
};
