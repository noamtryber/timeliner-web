import { Competitor } from "./types";

export const competitors: Competitor[] = [
  {
    id: "frameio",
    name: "Frame.io",
    logo: "/lovable-uploads/acfcdad6-1f19-423f-9c1e-ae8fdb3f3620.png",
    features: [
      {
        name: "Pricing",
        spanishName: "Precios",
        hebrewName: "תמחור",
        competitor: "$15/user/month (Basic) = $75/month for 5 users\n$25/user/month (Pro) = $750/month for 30 users",
        spanishCompetitor: "$15/usuario/mes (Básico) = $75/mes para 5 usuarios\n$25/usuario/mes (Pro) = $750/mes para 30 usuarios",
        hebrewCompetitor: "$15 למשתמש בייסיק = $75 לחודש עבור 5 משתמשים\n$25 למשתמש פרו = $750 לחודש עבור 30 משתמשים",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
        spanishTimeliner: "$29/mes (fijo hasta 5 usuarios)\n$49/mes (fijo hasta 30 usuarios)",
        hebrewTimeliner: "$29 לחודש (עד 5 משתמשים)\n$49 לחודש (עד 30 משתמשים)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Frame.io is great for quick storage and video review, but it becomes costly as teams grow and lacks advanced workflow, CRM, and marketing tools.',
            spanishText: 'Frame.io es excelente para almacenamiento rápido y revisión de videos, pero se vuelve costoso a medida que los equipos crecen y carece de flujo de trabajo avanzado, CRM y herramientas de marketing.',
            hebrewText: 'Frame.io מצוינת לאחסון מהיר ולכתיבת הערות, אבל העלות שלה גדלה משמעותית ככל שהצוות מתרחב ואין לה פתרונות CRM, ניהול פרויקטים או כלי שיווק.'
          },
          {
            type: 'positive',
            text: 'Timeliner is an all-in-one solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.',
            spanishText: 'Timeliner es una solución todo en uno que combina gestión de proyectos, revisión de videos, almacenamiento de medios, CRM, herramientas de marketing y creación de portafolio en una plataforma.',
            hebrewText: 'Timeliner מספקת את כל הכלים במקום אחד – ניהול פרויקטים, הערות על וידאו, אחסון מדיה, CRM, כלים שיווקיים, בניית תיק עבודות, ואינטגרציות חכמות עם וואטסאפ, מייל וסלאק.'
          },
          {
            type: 'positive',
            text: 'Flat pricing means no surprise costs, making Timeliner the smarter choice for growing media teams and agencies.',
            spanishText: 'El precio fijo significa que no hay costos sorpresa, lo que hace de Timeliner la opción más inteligente para equipos de medios y agencias en crecimiento.',
            hebrewText: 'בזכות תמחור קבוע, אין הפתעות במחיר, מה שהופך את Timeliner לאופציה המשתלמת והמקיפה ביותר עבור עורכי וידאו, צלמים, סוכנויות וצוותי פוסט-פרודקשן.'
          }
        ]
      },
      {
        name: "Time-Synced Comments",
        spanishName: "Comentarios sincronizados con el tiempo",
        hebrewName: "תגובות מסונכרנות לזמן הוידאו",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        spanishName: "Vistas previas de video en alta calidad",
        hebrewName: "תצוגה מקדימה באיכות גבוהה",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        spanishName: "Enlaces de revisión amigables para el cliente",
        hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        spanishName: "Flujo de trabajo avanzado de seguimiento de estado de medios",
        hebrewName: "ניהול מדיה ומעקב אחר סטטוסים",
        competitor: "Basic tags only",
        spanishCompetitor: "Solo etiquetas básicas",
        hebrewCompetitor: "תיוגים בסיסיים בלבד",
        timeliner: "List, Kanban, Pool, and Chart Status Groups",
        spanishTimeliner: "Grupos de estado en Lista, Kanban, Pool y Gráficos",
        hebrewTimeliner: "מערכת מתקדמת עם רשימות, Kanban, Pool ותרשימים מבוססי סטטוס"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        spanishName: "Comparación de versiones en pantalla dividida",
        hebrewName: "השוואת גרסאות במסך מפוצל",
        competitor: false,
        timeliner: true
      },
      {
        name: "No Account Required for Reviewers",
        spanishName: "No se requiere cuenta para los revisores",
        hebrewName: "גישה ללא צורך בחשבון למבקרים",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
        hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        spanishName: "CRM integrado",
        hebrewName: "CRM מובנה",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp Business Integration",
        spanishName: "Integración con WhatsApp Business",
        hebrewName: "אינטגרציה עם וואטסאפ",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        spanishName: "Monitoreo del equipo y seguimiento de la productividad",
        hebrewName: "מעקב אחר משימות וביצועי צוות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        spanishName: "Agregar comentarios usando grabaciones de voz",
        hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions",
        spanishName: "Subtítulos de IA en varios idiomas",
        hebrewName: "כתוביות AI חכמות (גם לעברית)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        spanishName: "Constructor de portafolios profesional",
        hebrewName: "בניית תיק עבודות מקצועי",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        spanishName: "Recursos educativos y capacitación uno a uno",
        hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        spanishName: "Los costos aumentan exponencialmente a medida que el equipo crece",
        hebrewName: "תמחור גדל ככל שהצוות מתרחב",
        competitor: "$750/month for 30 users",
        spanishCompetitor: "$750/mes para 30 usuarios",
        hebrewCompetitor: "$750 לחודש עבור 30 משתמשים",
        timeliner: "Flat pricing covers up to 30 users with no extra fees",
        spanishTimeliner: "El precio fijo cubre hasta 30 usuarios sin tarifas adicionales",
        hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!"
      }
    ]
  },
  {
    id: "dropbox",
    name: "Dropbox Replay",
    logo: "/lovable-uploads/16ee0992-d929-4b38-b7b4-bbfb80f50721.png",
    features: [
      {
        name: "Pricing",
        spanishName: "Precios",
        hebrewName: "תמחור",
        competitor: "$10/user/month for Replay Add-On\nRequires Dropbox Plus ($10/user/month) = $20/user/month total\n$100/month for 5 users\n$600/month for 30 users",
        spanishCompetitor: "$10/usuario/mes para el complemento Replay\nRequiere Dropbox Plus ($10/usuario/mes) = $20/usuario/mes en total\n$100/mes para 5 usuarios\n$600/mes para 30 usuarios",
        hebrewCompetitor: "$10 למשתמש לחודש עבור תוסף Replay\nדורש Dropbox Plus ($10 למשתמש לחודש) = $20 למשתמש לחודש\n$100 לחודש עבור 5 משתמשים\n$600 לחודש עבור 30 משתמשים",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
        spanishTimeliner: "$29/mes (fijo hasta 5 usuarios)\n$49/mes (fijo hasta 30 usuarios)",
        hebrewTimeliner: "$29 לחודש (עד 5 משתמשים)\n$49 לחודש (עד 30 משתמשים)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Dropbox Replay is mainly a review add-on, requiring Dropbox Plus for full functionality, making it $20/user/month—which quickly adds up as teams grow.',
            spanishText: 'Dropbox Replay es principalmente un complemento de revisión, que requiere Dropbox Plus para funcionalidad completa, lo que lo convierte en $20/usuario/mes, lo que rápidamente se acumula a medida que los equipos crecen.',
            hebrewText: 'Dropbox Replay הוא בעיקר תוסף לביקורת, הדורש Dropbox Plus לפונקציונליות מלאה, מה שהופך אותו ל-$20 למשתמש לחודש - סכום שגדל במהירות ככל שהצוות גדל.'
          },
          {
            type: 'positive',
            text: 'Timeliner is a complete media management solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.',
            spanishText: 'Timeliner es una solución completa de gestión de medios, que combina gestión de proyectos, revisión de videos, almacenamiento de medios, CRM, herramientas de marketing y creación de portafolio en una plataforma.',
            hebrewText: 'Timeliner היא פלטפורמה מלאה לניהול מדיה, המשלבת ניהול פרויקטים, ביקורת וידאו, אחסון מדיה, CRM, כלי שיווק ובניית תיק עבודות במקום אחד.'
          },
          {
            type: 'positive',
            text: 'Smart integrations with WhatsApp, Email, and Slack allow seamless team communication and client notifications.',
            spanishText: 'Las integraciones inteligentes con WhatsApp, correo electrónico y Slack permiten una comunicación fluida del equipo y notificaciones a los clientes.',
            hebrewText: 'אינטגרציות חכמות עם וואטסאפ, אימייל וסלאק מאפשרות תקשורת חלקה בין הצוות והתראות ללקוחות.'
          },
          {
            type: 'positive',
            text: 'Flat pricing ensures cost predictability, making Timeliner the more scalable and cost-effective choice for video editors and media teams.',
            spanishText: 'El precio fijo garantiza la previsibilidad de costos, lo que hace de Timeliner la opción más escalable y rentable para editores de video y equipos de medios.',
            hebrewText: 'תמחור קבוע מבטיח יציבות בעלויות, מה שהופך את Timeliner לבחירה המשתלמת והמדרגית יותר עבור עורכי וידאו וצוותי מדיה.'
          }
        ]
      },
      {
        name: "Time-Synced Comments",
        spanishName: "Comentarios sincronizados con el tiempo",
        hebrewName: "תגובות מסונכרנות לזמן הוידאו",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        spanishName: "Vistas previas de video en alta calidad",
        hebrewName: "תצוגה מקדימה באיכות גבוהה",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        spanishName: "Enlaces de revisión amigables para el cliente",
        hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        spanishName: "Flujo de trabajo avanzado de seguimiento de estado de medios",
        hebrewName: "ניהול מדיה ומעקב אחר סטטוסים",
        competitor: "Basic file storage and sharing",
        spanishCompetitor: "Almacenamiento y compartición de archivos básicos",
        hebrewCompetitor: "אחסון ושיתוף קבצים בסיסי",
        timeliner: "List, Kanban, Pool, and Chart views",
        spanishTimeliner: "Vistas de lista, Kanban, Pool y gráficos",
        hebrewTimeliner: "תצוגות רשימה, קנבן, פול ותרשימים"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        spanishName: "Comparación de versiones en pantalla dividida",
        hebrewName: "השוואת גרסאות במסך מפוצל",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
        hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        spanishName: "CRM integrado",
        hebrewName: "CRM מובנה",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp Business Integration",
        spanishName: "Integración con WhatsApp Business",
        hebrewName: "אינטגרציה עם וואטסאפ",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        spanishName: "Monitoreo del equipo y seguimiento de la productividad",
        hebrewName: "מעקב אחר משימות וביצועי צוות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        spanishName: "Agregar comentarios usando grabaciones de voz",
        hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions",
        spanishName: "Subtítulos de IA en varios idiomas",
        hebrewName: "כתוביות AI חכמות (גם לעברית)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        spanishName: "Constructor de portafolios profesional",
        hebrewName: "בניית תיק עבודות מקצועי",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        spanishName: "Recursos educativos y capacitación uno a uno",
        hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        spanishName: "Los costos aumentan exponencialmente a medida que el equipo crece",
        hebrewName: "תמחור גדל ככל שהצוות מתרחב",
        competitor: "$600/month for 30 users (Replay + Dropbox Plus required)",
        spanishCompetitor: "$600/mes para 30 usuarios (se requiere Replay + Dropbox Plus)",
        hebrewCompetitor: "$600 לחודש עבור 30 משתמשים (נדרש Replay + Dropbox Plus)",
        timeliner: "Flat pricing covers up to 30 users with no extra fees",
        spanishTimeliner: "El precio fijo cubre hasta 30 usuarios sin tarifas adicionales",
        hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!"
      }
    ]
  },
  {
    id: "wipster",
    name: "Wipster",
    logo: "/lovable-uploads/632bc234-7a2b-4c8a-bf51-2bf57e7f4c7b.png",
    features: [
      {
        name: "Pricing",
        spanishName: "Precios",
        hebrewName: "תמחור",
        competitor: "$19.95/user/month = $99.75/month for 5 users\n$598.50/month for 30 users",
        spanishCompetitor: "$19.95/usuario/mes = $99.75/mes para 5 usuarios\n$598.50/mes para 30 usuarios",
        hebrewCompetitor: "$19.95 למשתמש לחודש = $99.75 לחודש עבור 5 משתמשים\n$598.50 לחודש עבור 30 משתמשים",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)",
        spanishTimeliner: "$29/mes (hasta 5 usuarios)\n$49/mes (hasta 30 usuarios)",
        hebrewTimeliner: "$29 לחודש (עד 5 משתמשים)\n$49 לחודש (עד 30 משתמשים)",
        keyTakeaways: [
          {
            type: "negative",
            text: "Wipster is a solid choice for simple video review with time-synced comments and a clean interface, making it great for small teams handling basic client feedback. However, it charges per user ($19.95/month) and storage is capped at 250GB, which limits scalability for larger teams.",
            spanishText: "Wipster es una buena opción para una revisión de video simple con comentarios sincronizados y una interfaz limpia, lo que la hace ideal para equipos pequeños que manejan comentarios básicos de clientes. Sin embargo, cobra por usuario ($19.95/mes) y el almacenamiento está limitado a 250GB, lo que limita la escalabilidad para equipos más grandes.",
            hebrewText: "Wipster היא בחירה טובה לביקורת וידאו פשוטה עם הערות מסונכרנות וממשק נקי, מה שהופך אותה למעולה לצוותים קטנים המטפלים במשוב בסיסי מלקוחות. עם זאת, היא גובה לפי משתמש ($19.95 לחודש) והאחסון מוגבל ל-250GB, מה שמגביל את הסקייליות לצוותים גדולים יותר."
          },
          {
            type: "positive",
            text: "Timeliner goes beyond just video review—it offers project management, CRM, team monitoring, media storage (1-2TB), marketing tools, and portfolio building in one platform. Plus, with WhatsApp Business Integration, your team and clients stay connected without extra tools. Flat pricing means you scale without increasing costs, making it the smarter choice for post-production teams and creative agencies. 🚀",
            spanishText: "Timeliner va más allá de la simple revisión de video; ofrece gestión de proyectos, CRM, monitoreo de equipos, almacenamiento de medios (1-2TB), herramientas de marketing y creación de portafolios en una plataforma. Además, con la integración de WhatsApp Business, tu equipo y clientes se mantienen conectados sin herramientas adicionales. El precio fijo significa que puedes escalar sin aumentar costos, lo que la convierte en la opción más inteligente para equipos de postproducción y agencias creativas. 🚀",
            hebrewText: "Timeliner היא הרבה מעבר לביקורת וידאו - היא מציעה ניהול פרויקטים, CRM, מעקב אחר צוותים, אחסון מדיה (1-2TB), כלי שיווק ובניית תיק עבודות בפלטפורמה אחת. בנוסף, עם אינטגרציה לוואטסאפ עסקי, הצוות והלקוחות שלך נשארים מחוברים ללא כלים נוספים. תמחור קבוע מאפשר לך לצמוח ללא הגדלת עלויות, מה שהופך אותה לבחירה החכמה יותר לצוותי פוסט-פרודקשן וסוכנויות יצירתיות. 🚀"
          }
        ]
      },
      {
        name: "Time-Synced Comments",
        spanishName: "Comentarios sincronizados con el tiempo",
        hebrewName: "תגובות מסונכרנות לזמן הוידאו",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        spanishName: "Vistas previas de video en alta calidad",
        hebrewName: "תצוגה מקדימה באיכות גבוהה",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        spanishName: "Enlaces de revisión amigables para el cliente",
        hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        spanishName: "Flujo de trabajo avanzado de seguimiento de estado de medios",
        hebrewName: "ניהול מדיה ומעקב אחר סטטוסים",
        competitor: "Basic tags only",
        spanishCompetitor: "Solo etiquetas básicas",
        hebrewCompetitor: "תיוגים בסיסיים בלבד",
        timeliner: "List, Kanban, Pool, and Chart views",
        spanishTimeliner: "Vistas de lista, Kanban, Pool y gráficos",
        hebrewTimeliner: "תצוגות רשימה, קנבן, פול ותרשימים"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        spanishName: "Comparación de versiones en pantalla dividida",
        hebrewName: "השוואת גרסאות במסך מפוצל",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
        hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        spanishName: "CRM integrado",
        hebrewName: "CRM מובנה",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp Business Integration",
        spanishName: "Integración con WhatsApp Business",
        hebrewName: "אינטגרציה עם וואטסאפ",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        spanishName: "Monitoreo del equipo y seguimiento de la productividad",
        hebrewName: "מעקב אחר משימות וביצועי צוות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        spanishName: "Agregar comentarios usando grabaciones de voz",
        hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions",
        spanishName: "Subtítulos de IA en varios idiomas",
        hebrewName: "כתוביות AI חכמות (גם לעברית)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        spanishName: "Constructor de portafolios profesional",
        hebrewName: "בניית תיק עבודות מקצועי",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        spanishName: "Recursos educativos y capacitación uno a uno",
        hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        spanishName: "Los costos aumentan exponencialmente a medida que el equipo crece",
        hebrewName: "תמחור גדל ככל שהצוות מתרחב",
        competitor: "$598.50/month for 30 users",
        spanishCompetitor: "$598.50/mes para 30 usuarios",
        hebrewCompetitor: "$598.50 לחודש עבור 30 משתמשים",
        timeliner: "Flat pricing covers up to 30 users with no extra fees",
        spanishTimeliner: "El precio fijo cubre hasta 30 usuarios sin tarifas adicionales",
        hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!"
      }
    ]
  },
  {
    id: "vimeo",
    name: "Vimeo Review",
    logo: "/lovable-uploads/e612d0f5-d66b-4f48-9de7-f142a4fa9670.png",
    features: [
      {
        name: "Pricing",
        spanishName: "Precios",
        hebrewName: "תמחור",
        competitor: "Starter: $12/month (1 seat, 100GB storage)\nStandard: $25/month (2+ seats, 1TB storage)\nAdvanced: $65/month (2+ seats, 5TB storage)\n$600+/month for 30 users (Advanced Plan)",
        spanishCompetitor: "Inicio: $12/mes (1 asiento, 100GB de almacenamiento)\nEstándar: $25/mes (2+ asientos, 1TB de almacenamiento)\nAvanzado: $65/mes (2+ asientos, 5TB de almacenamiento)\n$600+/mes para 30 usuarios (Plan Avanzado)",
        hebrewCompetitor: "סטארטר: $12 לחודש (משתמש אחד, 100GB אחסון)\nסטנדרט: $25 לחודש (2+ משתמשים, 1TB אחסון)\nמתקדם: $65 לחודש (2+ משתמשים, 5TB אחסון)\n$600+ לחודש עבור 30 משתמשים (תכנית מתקדמת)",
        timeliner: "$29/month (up to 5 users, 1TB)\n$49/month (up to 30 users, 2TB)",
        spanishTimeliner: "$29/mes (hasta 5 usuarios, 1TB)\n$49/mes (hasta 30 usuarios, 2TB)",
        hebrewTimeliner: "$29 לחודש (עד 5 משתמשים, 1TB)\n$49 לחודש (עד 30 משתמשים, 2TB)",
        keyTakeaways: [
          {
            type: "negative",
            text: "Vimeo Review is great for content creators already in the Vimeo ecosystem, offering video hosting, review tools, and team collaboration. It's useful for independent filmmakers and brands, especially with AI-generated scripts and auto-captioning in higher tiers. However, its review tools are basic, and pricing scales per user ($25+/month), making it costly for growing teams.",
            spanishText: "Vimeo Review es excelente para creadores de contenido que ya están en el ecosistema de Vimeo, ofreciendo alojamiento de video, herramientas de revisión y colaboración en equipo. Es útil para cineastas independientes y marcas, especialmente con guiones generados por IA y subtítulos automáticos en niveles más altos. Sin embargo, sus herramientas de revisión son básicas y el precio aumenta por usuario ($25+/mes), lo que lo hace costoso para equipos en crecimiento.",
            hebrewText: "Vimeo Review מצוין ליוצרי תוכן שכבר משתמשים במערכת Vimeo, ומציע אחסון וידאו, כלי ביקורת ושיתוף פעולה בצוות. זה שימושי לקולנוענים עצמאיים ומותגים, במיוחד עם תסריטים מבוססי AI וכתוביות אוטומטיות בחבילות הגבוהות. עם זאת, כלי הביקורת שלו בסיסיים, והתמחור עולה לפי משתמש ($25+ לחודש), מה שהופך אותו ליקר עבור צוותים שגדלים."
          },
          {
            type: "positive",
            text: "Timeliner is purpose-built for video editors and post-production teams, with advanced version control, team monitoring, client portals, and AI-powered captions in multiple languages—not just English. It also integrates with WhatsApp, Slack, and email for streamlined client collaboration. No per-user pricing means agencies and video teams save money while getting more features. 🎬",
            spanishText: "Timeliner está diseñado específicamente para editores de video y equipos de postproducción, con control de versiones avanzado, monitoreo de equipos, portales para clientes y subtítulos impulsados por IA en varios idiomas, no solo en inglés. También se integra con WhatsApp, Slack y correo electrónico para una colaboración fluida con los clientes. Sin precios por usuario, las agencias y los equipos de video ahorran dinero mientras obtienen más funciones. 🎬",
            hebrewText: "Timeliner נבנתה במיוחד עבור עורכי וידאו וצוותי פוסט-פרודקשן, עם בקרת גרסאות מתקדמת, מעקב אחר צוותים, פורטלים ללקוחות וכתוביות מבוססות AI במספר שפות - לא רק באנגלית. היא גם משתלבת עם וואטסאפ, סלאק ואימייל לשיתוף פעולה יעיל עם לקוחות. ללא תמחור לפי משתמש, סוכנויות וצוותי וידאו חוסכים כסף תוך קבלת יותר תכונות. 🎬"
          }
        ]
      },
      {
        name: "Time-Synced Comments",
        spanishName: "Comentarios sincronizados con el tiempo",
        hebrewName: "תגובות מסונכרנות לזמן הוידאו",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        spanishName: "Vistas previas de video en alta calidad",
        hebrewName: "תצוגה מקדימה באיכות גבוהה",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        spanishName: "Enlaces de revisión amigables para el cliente",
        hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        spanishName: "Flujo de trabajo avanzado de seguimiento de estado de medios",
        hebrewName: "ניהול מדיה ומעקב אחר סטטוסים",
        competitor: "Basic tags only",
        spanishCompetitor: "Solo etiquetas básicas",
        hebrewCompetitor: "תיוגים בסיסיים בלבד",
        timeliner: "List, Kanban, Pool, and Chart Status Groups",
        spanishTimeliner: "Grupos de estado en Lista, Kanban, Pool y Gráficos",
        hebrewTimeliner: "מערכת מתקדמת עם רשימות, Kanban, Pool ותרשימים מבוססי סטטוס"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        spanishName: "Comparación de versiones en pantalla dividida",
        hebrewName: "השוואת גרסאות במסך מפוצל",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
        hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        spanishName: "CRM integrado",
        hebrewName: "CRM מובנה",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp Business Integration",
        spanishName: "Integración con WhatsApp Business",
        hebrewName: "אינטגרציה עם וואטסאפ",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        spanishName: "Monitoreo del equipo y seguimiento de la productividad",
        hebrewName: "מעקב אחר משימות וביצועי צוות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        spanishName: "Agregar comentarios usando grabaciones de voz",
        hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions",
        spanishName: "Subtítulos de IA en varios idiomas",
        hebrewName: "כתוביות AI חכמות (גם לעברית)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        spanishName: "Constructor de portafolios profesional",
        hebrewName: "בניית תיק עבודות מקצועי",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        spanishName: "Recursos educativos y capacitación uno a uno",
        hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        spanishName: "Los costos aumentan exponencialmente a medida que el equipo crece",
        hebrewName: "תמחור גדל ככל שהצוות מתרחב",
        competitor: "$600/month for 30 users (Advanced Plan required for full features)",
        spanishCompetitor: "$600/mes para 30 usuarios (se requiere Plan Avanzado para funciones completas)",
        hebrewCompetitor: "$600 לחודש עבור 30 משתמשים (נדרשת תכנית מתקדמת לתכונות מלאות)",
        timeliner: "Flat pricing covers up to 30 users with no extra fees",
        spanishTimeliner: "El precio fijo cubre hasta 30 usuarios sin tarifas adicionales",
        hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!"
      }
    ]
  },
  {
    id: "clickup",
    name: "ClickUp",
    logo: "/lovable-uploads/d4d71abe-8984-4b88-baf8-c4dd913ee9b6.png",
    features: [
      {
        name: "Pricing",
        spanishName: "Precios",
        hebrewName: "תמחור",
        competitor: "$7/user/month (Unlimited Plan) = $35/month for 5 users\n$12/user/month (Business Plan) = $60/month for 5 users\n$360/month for 30 users",
        spanishCompetitor: "$7/usuario/mes (Plan Ilimitado) = $35/mes para 5 usuarios\n$12/usuario/mes (Plan Empresarial) = $60/mes para 5 usuarios\n$360/mes para 30 usuarios",
        hebrewCompetitor: "$7 למשתמש לחודש (תכנית ללא הגבלה) = $35 לחודש עבור 5 משתמשים\n$12 למשתמש לחודש (תכנית עסקית) = $60 לחודש עבור 5 משתמשים\n$360 לחודש עבור 30 משתמשים",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
        spanishTimeliner: "$29/mes (fijo hasta 5 usuarios)\n$49/mes (fijo hasta 30 usuarios)",
        hebrewTimeliner: "$29 לחודש (עד 5 משתמשים)\n$49 לחודש (עד 30 משתמשים)",
        keyTakeaways: [
          {
            type: "negative",
            text: "ClickUp is a fantastic general project management tool, offering task tracking, automation, and time management—great for businesses handling diverse projects. It even has basic video commenting, but it lacks dedicated video review tools, AI captions, media storage, and advanced creative workflows.",
            spanishText: "ClickUp es una herramienta de gestión de proyectos general fantástica, que ofrece seguimiento de tareas, automatización y gestión del tiempo, ideal para empresas que manejan proyectos diversos. Incluso tiene comentarios básicos de video, pero carece de herramientas de revisión de video dedicadas, subtítulos de IA, almacenamiento de medios y flujos de trabajo creativos avanzados.",
            hebrewText: "ClickUp הוא כלי מצוין לניהול פרויקטים כללי, המציע מעקב אחר משימות, אוטומציה וניהול זמן - מעולה לעסקים המטפלים בפרויקטים מגוונים. יש לו אפילו אפשרות בסיסית להערות על וידאו, אבל חסרים לו כלי ביקורת וידאו ייעודיים, כתוביות AI, אחסון מדיה וזרימות עבודה יצירתיות מתקדמות."
          },
          {
            type: "positive",
            text: "Timeliner is tailor-made for video production workflows, combining Kanban-style project tracking, video review tools, media storage, CRM, and client collaboration in one place. Plus, audio comments, AI captions, and WhatsApp integrations ensure smoother communication for video editors and creative teams. Flat pricing makes it scalable, without the per-user cost of ClickUp.",
            spanishText: "Timeliner está hecho a medida para flujos de trabajo de producción de video, combinando seguimiento de proyectos al estilo Kanban, herramientas de revisión de video, almacenamiento de medios, CRM y colaboración con clientes en un solo lugar. Además, los comentarios de audio, los subtítulos de IA y las integraciones de WhatsApp garantizan una comunicación más fluida para los editores de video y los equipos creativos. El precio fijo lo hace escalable, sin el costo por usuario de ClickUp.",
            hebrewText: "Timeliner נבנתה במיוחד לזרימות עבודה של הפקות וידאו, משלבת מעקב פרויקטים בסגנון קנבן, כלי ביקורת וידאו, אחסון מדיה, CRM ושיתוף פעולה עם לקוחות במקום אחד. בנוסף, הערות קוליות, כתוביות AI ואינטגרציות עם וואטסאפ מבטיחות תקשורת חלקה יותר לעורכי וידאו וצוותים יצירתיים. תמחור קבוע הופך אותה לסקיילבילית, ללא העלות לפי משתמש של ClickUp."
          }
        ]
      },
      {
        name: "Time-Synced Comments",
        spanishName: "Comentarios sincronizados con el tiempo",
        hebrewName: "תגובות מסונכרנות לזמן הוידאו",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        spanishName: "Enlaces de revisión amigables para el cliente",
        hebrewName: "קישורי צפייה וביקורת נוחים ללקוחות",
        competitor: "Requires complex task sharing",
        spanishCompetitor: "Requiere compartir tareas complejas",
        hebrewCompetitor: "דורש שיתוף משימות מורכב",
        timeliner: true
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        spanishName: "Comparación de versiones en pantalla dividida",
        hebrewName: "השוואת גרסאות במסך מפוצל",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        spanishName: "Flujo de trabajo interactivo para nuevas ofertas",
        hebrewName: "מערכת ליצירת הצעות אינטראקטיבית",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp Business Integration",
        spanishName: "Integración con WhatsApp Business",
        hebrewName: "אינטגרציה עם וואטסאפ",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        spanishName: "Monitoreo del equipo y seguimiento de la productividad",
        hebrewName: "מעקב אחר משימות וביצועי צוות",
        competitor: true,
        timeliner: "More advanced media-specific tracking",
        spanishTimeliner: "Seguimiento más avanzado específico para medios",
        hebrewTimeliner: "מעקב מתקדם יותר המותאם למדיה"
      },
      {
        name: "Add comments using voice recordings",
        spanishName: "Agregar comentarios usando grabaciones de voz",
        hebrewName: "הוספת הערות באמצעות הקלטות קוליות",
        competitor: false,
        timeliner: true
      },
      {
        name: "Fit to RTL languages (Arabic, Hebrew)",
        spanishName: "Ajustar a idiomas RTL (árabe, hebreo)",
        hebrewName: "תמיכה בשפות RTL (ערבית, עברית)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        spanishName: "Constructor de portafolios profesional",
        hebrewName: "בניית תיק עבודות מקצועי",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        spanishName: "Recursos educativos y capacitación uno a uno",
        hebrewName: "הדרכות מותאמות ואונבורדינג 1על1 בזום",
        competitor: "Limited to project management training",
        spanishCompetitor: "Limitado a capacitación en gestión de proyectos",
        hebrewCompetitor: "מוגבל להדרכות ניהול פרויקטים",
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        spanishName: "Los costos aumentan exponencialmente a medida que el equipo crece",
        hebrewName: "תמחור גדל ככל שהצוות מתרחב",
        competitor: "$360/month for 30 users, pricing increases per user",
        spanishCompetitor: "$360/mes para 30 usuarios, el precio aumenta por usuario",
        hebrewCompetitor: "$360 לחודש עבור 30 משתמשים, המחיר עולה לפי משתמש",
        timeliner: "Flat pricing covers up to 30 users with no extra fees",
        spanishTimeliner: "El precio fijo cubre hasta 30 usuarios sin tarifas adicionales",
        hebrewTimeliner: "תמחור קבוע ללא עלות נוספת – עד 30 משתמשים!"
      }
    ]
  }
];
