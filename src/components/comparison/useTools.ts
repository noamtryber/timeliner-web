import { Tool } from "./types";

export const useTools = (isRTL: boolean, language: string): Tool[] => {
  if (language === 'es') {
    return [
      {
        feature: 'Gestión de Proyectos Avanzada',
        replaces: 'Monday.com',
        cost: '$30/mes',
      },
      {
        feature: 'Sistema de Revisión Profesional',
        replaces: 'Frame.io',
        cost: '$15/mes/usuario',
      },
      {
        feature: 'Portales de Cliente Personalizados',
        replaces: 'Client Portal',
        cost: '$19/mes',
      },
      {
        feature: 'Almacenamiento en la Nube Seguro',
        replaces: 'Dropbox',
        cost: '$10/mes por 1TB',
      },
      {
        feature: 'Gestión de Contratos y Documentos',
        replaces: 'Docusign',
        cost: '$20/mes',
      },
      {
        feature: 'Automatización de Flujos de Trabajo',
        replaces: 'Zapier',
        cost: '$29/mes',
      },
      {
        feature: 'Sistema de Facturación Integrado',
        replaces: 'QuickBooks',
        cost: '$15-$25/mes',
      },
    ];
  }
  
  return [
    {
      feature: isRTL ? 'ניהול פרויקטים' : 'Project Management',
      replaces: 'Monday.com',
      cost: isRTL ? '$30 לחודש' : '$30/month',
    },
    {
      feature: isRTL ? 'זרימת עבודה לתיקונים' : 'Revisions Workflow',
      replaces: 'Frame.io',
      cost: isRTL ? '$15 לחודש/למשתמש' : '$15/month/user',
    },
    {
      feature: isRTL ? 'פורטלים ללקוחות' : 'Client Portals',
      replaces: 'Client Portal',
      cost: isRTL ? '$19 לחודש' : '$19/month',
    },
    {
      feature: isRTL ? 'אחסון בענן' : 'Cloud Storage',
      replaces: 'Dropbox',
      cost: isRTL ? '$10 לחודש עבור 1TB' : '$10/month for 1TB',
    },
    {
      feature: isRTL ? 'חוזים ומסמכים משפטיים' : 'Contracts & Legal Docs',
      replaces: 'Docusign',
      cost: isRTL ? '$20 לחודש' : '$20/month',
    },
    {
      feature: isRTL ? 'אוטומציה וזרימות עבודה' : 'Automation & Workflows',
      replaces: 'Zapier',
      cost: isRTL ? '$29 לחודש' : '$29/month',
    },
    {
      feature: isRTL ? 'קבלות והפקת חשבוניות' : 'Receipt & Invoicing',
      replaces: 'QuickBooks',
      cost: isRTL ? '$15-$25 לחודש' : '$15-$25/month',
    },
  ];
};
