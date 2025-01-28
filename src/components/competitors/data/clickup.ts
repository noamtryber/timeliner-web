import { Competitor } from "../types";

export const clickupData: Competitor = {
  id: "clickup",
  name: "ClickUp",
  logo: "/lovable-uploads/be9f8176-6ebd-4c6f-a721-34b1f9bd40cd.png",
  features: [
    {
      name: "Project Management",
      hebrewName: "ניהול פרויקטים",
      spanishName: "Gestión de Proyectos",
      competitor: "Basic project management, limited video features",
      hebrewCompetitor: "ניהול פרויקטים בסיסי, תכונות וידאו מוגבלות",
      spanishCompetitor: "Gestión básica de proyectos, características de video limitadas",
      timeliner: "Specialized video project management",
      hebrewTimeliner: "ניהול פרויקטי וידאו מתמחה",
      spanishTimeliner: "Gestión especializada de proyectos de video",
      keyTakeaways: [
        {
          type: "negative",
          text: "Not specialized for video projects",
          hebrewText: "לא מתמחה בפרויקטי וידאו",
          spanishText: "No especializado en proyectos de video"
        },
        {
          type: "positive",
          text: "Timeliner offers video-specific features",
          hebrewText: "Timeliner מציע תכונות ייעודיות לווידאו",
          spanishText: "Timeliner ofrece características específicas para video"
        }
      ]
    },
    {
      name: "Collaboration",
      hebrewName: "שיתוף פעולה",
      spanishName: "Colaboración",
      competitor: "General team collaboration",
      hebrewCompetitor: "שיתוף פעולה כללי בצוות",
      spanishCompetitor: "Colaboración general en equipo",
      timeliner: "Video-focused collaboration tools",
      hebrewTimeliner: "כלי שיתוף פעולה ממוקדי וידאו",
      spanishTimeliner: "Herramientas de colaboración enfocadas en video",
      keyTakeaways: [
        {
          type: "negative",
          text: "Generic collaboration features",
          hebrewText: "תכונות שיתוף פעולה כלליות",
          spanishText: "Características de colaboración genéricas"
        },
        {
          type: "positive",
          text: "Timeliner's tools are built for video teams",
          hebrewText: "הכלים של Timeliner בנויים לצוותי וידאו",
          spanishText: "Las herramientas de Timeliner están diseñadas para equipos de video"
        }
      ]
    }
  ]
};