import { FeatureRow } from "./types";

export const englishFeatures: FeatureRow[] = [
  {
    feature: "Best for",
    free: "Independent editors",
    essentials: "Small teams & freelancers",
    studio: "Growing agencies & teams",
    enterprise: "Large businesses"
  },
  {
    feature: "Storage",
    free: "3GB",
    essentials: "1TB",
    studio: "2TB (Expandable)",
    enterprise: "Unlimited"
  },
  {
    feature: "Additional storage",
    free: false,
    essentials: "$1.50 per 100GB (up to 5TB)",
    studio: "$1.50 per 100GB (up to 5TB)",
    enterprise: "Unlimited"
  },
  {
    feature: "Member seats included",
    free: "1",
    essentials: "4",
    studio: "5 (Expandable)",
    enterprise: "Unlimited"
  },
  {
    feature: "Additional members",
    free: false,
    essentials: false,
    studio: "$7 per seat (up to 20 seats)",
    enterprise: "Unlimited"
  },
  {
    feature: "Client access",
    free: "1 per project",
    essentials: "Up to 3 per project",
    studio: "Unlimited",
    enterprise: "Unlimited"
  },
  {
    feature: "Clients can",
    free: "Upload, comment, approve, download",
    essentials: "Upload, comment, approve, download",
    studio: "Upload, comment, approve, download",
    enterprise: "Upload, comment, approve, download"
  },
  {
    feature: "Team members can",
    free: "Edit, assign tasks, manage workflows",
    essentials: "Edit, assign tasks, manage workflows",
    studio: "Edit, assign tasks, manage workflows",
    enterprise: "Edit, assign tasks, manage workflows"
  },
  {
    feature: "Task & workflow automation",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Smart revision tracking",
    free: true,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Version control & history",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Client portals",
    free: "Basic",
    essentials: "Advanced",
    studio: "Fully customizable",
    enterprise: "White-label"
  },
  {
    feature: "Built-in CRM",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Project payment tracking",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Advanced analytics & AI tools",
    free: false,
    essentials: false,
    studio: true,
    enterprise: true
  },
  {
    feature: "WhatsApp & Slack integration",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Language support (RTL + LTR)",
    free: true,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "API & custom deployment",
    free: false,
    essentials: false,
    studio: false,
    enterprise: true
  },
  {
    feature: "Priority 24/7 support",
    free: false,
    essentials: false,
    studio: true,
    enterprise: true
  },
  {
    feature: "Local hosting option",
    free: false,
    essentials: false,
    studio: false,
    enterprise: true
  }
];

export const getFeatureData = (language: string): FeatureRow[] => {
  switch (language) {
    case 'he':
      return [
        {
          feature: "הכי מתאים ל",
          free: "עורכים עצמאיים",
          essentials: "צוותים קטנים ופרילנסרים",
          studio: "סוכנויות וצוותים בצמיחה",
          enterprise: "עסקים גדולים"
        },
        {
          feature: "אחסון",
          free: "3GB",
          essentials: "1TB",
          studio: "2TB (ניתן להרחבה)",
          enterprise: "ללא הגבלה"
        },
        {
          feature: "אחסון נוסף",
          free: false,
          essentials: "1.50$ ל-100GB (עד 5TB)",
          studio: "1.50$ ל-100GB (עד 5TB)",
          enterprise: "ללא הגבלה"
        },
        {
          feature: "מספר משתמשים כלול",
          free: "1",
          essentials: "4",
          studio: "5 (ניתן להרחבה)",
          enterprise: "ללא הגבלה"
        },
        {
          feature: "משתמשים נוספים",
          free: false,
          essentials: false,
          studio: "7$ למשתמש (עד 20 משתמשים)",
          enterprise: "ללא הגבלה"
        },
        {
          feature: "גישת לקוחות-אורחים",
          free: "1 לפרויקט",
          essentials: "עד 3 לפרויקט",
          studio: "ללא הגבלה",
          enterprise: "ללא הגבלה"
        },
        {
          feature: "לקוחות יכולים",
          free: "להעלות, להגיב, לאשר, להוריד",
          essentials: "להעלות, להגיב, לאשר, להוריד",
          studio: "להעלות, להגיב, לאשר, להוריד",
          enterprise: "להעלות, להגיב, לאשר, להוריד"
        },
        {
          feature: "חברי צוות יכולים",
          free: "לערוך, להקצות משימות, לנהל תהליכים",
          essentials: "לערוך, להקצות משימות, לנהל תהליכים",
          studio: "לערוך, להקצות משימות, לנהל תהליכים",
          enterprise: "לערוך, להקצות משימות, לנהל תהליכים"
        },
        {
          feature: "אוטומציה של משימות ותהליכים",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "מעקב חכם אחר תיקונים",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "בקרת גרסאות והistorיה",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "פורטל לקוחות",
          free: "בסיסי",
          essentials: "מתקדם",
          studio: "התאמה אישית מלאה",
          enterprise: "white-label"
        },
        {
          feature: "CRM מובנה",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "מעקב תשלומי פרויקטים",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "אנליטיקס מתקדם וכלי AI",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "אינטגרציה עם וואטסאפ וסלאק",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "תמיכה בשפות (RTL + LTR)",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "API והתקנה מותאמת אישית",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        },
        {
          feature: "תמיכה 24/7 בעדיפות",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "אפשרות לאחסון מקומי",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        }
      ];
    case 'ar':
      return [
        {
          feature: "الأفضل لـ",
          free: "المحررين المستقلين",
          essentials: "الفرق الصغيرة والمستقلين",
          studio: "الوكالات والفرق النامية",
          enterprise: "الشركات الكبيرة"
        },
        {
          feature: "التخزين",
          free: "3GB",
          essentials: "1TB",
          studio: "2TB (قابل للتوسيع)",
          enterprise: "غير محدود"
        },
        {
          feature: "تخزين إضافي",
          free: false,
          essentials: "1.50$ لكل 100GB (حتى 5TB)",
          studio: "1.50$ لكل 100GB (حتى 5TB)",
          enterprise: "غير محدود"
        },
        {
          feature: "عدد المستخدمين المشمولين",
          free: "1",
          essentials: "4",
          studio: "5 (قابل للتوسيع)",
          enterprise: "غير محدود"
        },
        {
          feature: "مستخدمين إضافيين",
          free: false,
          essentials: false,
          studio: "7$ لكل مستخدم (حتى 20 مستخدم)",
          enterprise: "غير محدود"
        },
        {
          feature: "وصول العملاء الضيوف",
          free: "1 لكل مشروع",
          essentials: "حتى 3 لكل مشروع",
          studio: "غير محدود",
          enterprise: "غير محدود"
        },
        {
          feature: "يمكن للعملاء",
          free: "رفع، تعليق، موافقة، تنزيل",
          essentials: "رفع، تعليق، موافقة، تنزيل",
          studio: "رفع، تعليق، موافقة، تنزيل",
          enterprise: "رفع، تعليق، موافقة، تنزيل"
        },
        {
          feature: "يمكن لأعضاء الفريق",
          free: "تحرير، تعيين المهام، إدارة سير العمل",
          essentials: "تحرير، تعيين المهام، إدارة سير العمل",
          studio: "تحرير، تعيين المهام، إدارة سير العمل",
          enterprise: "تحرير، تعيين المهام، إدارة سير العمل"
        },
        {
          feature: "أتمتة المهام وسير العمل",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "تتبع المراجعات الذكي",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "التحكم في الإصدارات والتاريخ",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "بوابة العملاء",
          free: "أساسي",
          essentials: "متقدم",
          studio: "تخصيص كامل",
          enterprise: "علامة تجارية خاصة"
        },
        {
          feature: "CRM مدمج",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "تتبع مدفوعات المشروع",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "تحليلات متقدمة وأدوات AI",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "تكامل مع واتساب وسلاك",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "دعم اللغات (RTL + LTR)",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "API وتثبيت مخصص",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        },
        {
          feature: "دعم 24/7 ذو أولوية",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "خيار الاستضافة المحلية",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        }
      ];
    case 'es':
      return [
        {
          feature: "Mejor para",
          free: "Editores independientes",
          essentials: "Equipos pequeños y freelancers",
          studio: "Agencias y equipos en crecimiento",
          enterprise: "Grandes empresas"
        },
        {
          feature: "Almacenamiento",
          free: "3GB",
          essentials: "1TB",
          studio: "2TB (Expandible)",
          enterprise: "Ilimitado"
        },
        {
          feature: "Almacenamiento adicional",
          free: false,
          essentials: "$1.50 por 100GB (hasta 5TB)",
          studio: "$1.50 por 100GB (hasta 5TB)",
          enterprise: "Ilimitado"
        },
        {
          feature: "Asientos incluidos",
          free: "1",
          essentials: "4",
          studio: "5 (Expandible)",
          enterprise: "Ilimitado"
        },
        {
          feature: "Miembros adicionales",
          free: false,
          essentials: false,
          studio: "$7 por asiento (hasta 20 asientos)",
          enterprise: "Ilimitado"
        },
        {
          feature: "Acceso clientes",
          free: "1 por proyecto",
          essentials: "Hasta 3 por proyecto",
          studio: "Ilimitado",
          enterprise: "Ilimitado"
        },
        {
          feature: "Los clientes pueden",
          free: "Subir, comentar, aprobar, descargar",
          essentials: "Subir, comentar, aprobar, descargar",
          studio: "Subir, comentar, aprobar, descargar",
          enterprise: "Subir, comentar, aprobar, descargar"
        },
        {
          feature: "Los miembros pueden",
          free: "Editar, asignar tareas, gestionar flujos",
          essentials: "Editar, asignar tareas, gestionar flujos",
          studio: "Editar, asignar tareas, gestionar flujos",
          enterprise: "Editar, asignar tareas, gestionar flujos"
        },
        {
          feature: "Automatización de tareas y flujos",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Seguimiento inteligente de revisiones",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Control de versiones e historial",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Portales de cliente",
          free: "Básico",
          essentials: "Avanzado",
          studio: "Totalmente personalizable",
          enterprise: "Marca blanca"
        },
        {
          feature: "CRM integrado",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Seguimiento de pagos de proyectos",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Análisis avanzado y herramientas IA",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "Integración con WhatsApp y Slack",
          free: false,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "Soporte multiidioma (RTL + LTR)",
          free: true,
          essentials: true,
          studio: true,
          enterprise: true
        },
        {
          feature: "API y despliegue personalizado",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        },
        {
          feature: "Soporte prioritario 24/7",
          free: false,
          essentials: false,
          studio: true,
          enterprise: true
        },
        {
          feature: "Opción de alojamiento local",
          free: false,
          essentials: false,
          studio: false,
          enterprise: true
        }
      ];
    default:
      return englishFeatures;
  }
};
