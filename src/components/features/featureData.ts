interface FeatureGroup {
  id: string;
  headline: string;
  features: Feature[];
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'smart-management',
    headline: 'Gestión Inteligente de Proyectos y Revisiones',
    features: [
      {
        id: 'revision-workflow',
        title: 'Flujo de Revisiones',
        description: 'Comentarios con código de tiempo, dibujos, notas de voz, carga de archivos',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'Gestión de Tareas por Estado',
        description: 'Vista global para seguir todos los proyectos a la vez',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'Control de Versiones',
        description: 'Comparación en pantalla dividida, descarga de versiones anteriores',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'Gestión Inteligente de Carpetas',
        description: 'Estructura de archivos auto-organizada por proyecto',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'Colaboración Simplificada con Clientes',
    features: [
      {
        id: 'project-briefs',
        title: 'Briefings Interactivos',
        description: 'Alinear expectativas antes de comenzar el trabajo',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Constructor de Portafolio',
        description: 'Muestra trabajos anteriores con plantillas compartibles',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'Portales Personalizables',
        description: 'Los clientes revisan, aprueban y descargan trabajos fácilmente',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'Herramientas Potentes para Equipos y Pagos',
    features: [
      {
        id: 'crm',
        title: 'CRM Integrado para Creativos',
        description: 'Seguimiento de interacciones, leads y proyectos',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'Herramientas de Colaboración',
        description: 'Asignar roles, monitorear cargas de trabajo y permisos',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Seguimiento Transparente de Pagos',
        description: 'Ver pagos pendientes, notificar a miembros/clientes',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'Funciones Avanzadas para un Flujo de Trabajo Sin Problemas',
    features: [
      {
        id: 'integrations',
        title: 'Integraciones WhatsApp y Slack',
        description: 'Comunícate con clientes directamente dentro de Timeliner',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'Soporte Multiidioma',
        description: 'Interfaz LTR + RTL para equipos globales',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'Herramientas de IA',
        description: 'Subtítulos automáticos, sugerencias inteligentes para un flujo más rápido',
        icon: 'sparkles'
      }
    ]
  }
] as const;

export type { FeatureGroup, Feature };