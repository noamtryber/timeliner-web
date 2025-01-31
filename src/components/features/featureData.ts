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
    headline: 'Smart Project and Revision Management',
    features: [
      {
        id: 'revision-workflow',
        title: 'Revision Workflow',
        description: 'Timecode comments, draw, voice memo, file upload',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'Task Management by Status',
        description: 'Global View to track all projects at once',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'Version Control',
        description: 'Split-screen compare, download previous versions',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'Smart Folder Management',
        description: 'Auto-organized file structure per project',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'Simplified Client Collaboration',
    features: [
      {
        id: 'project-briefs',
        title: 'Interactive Project Briefs',
        description: 'Align expectations before work begins',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Portfolio Builder',
        description: 'Showcase past work with shareable templates',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'Customizable Client Portals',
        description: 'Clients review, approve, and download work easily',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'Powerful Tools for Teams and Payments',
    features: [
      {
        id: 'crm',
        title: 'Built-In CRM for Creatives',
        description: 'Track client interactions, leads, and projects',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'Team Collaboration Tools',
        description: 'Assign roles, monitor workloads, and permissions',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Transparent Payment Tracking',
        description: 'See payments owed, notify team members/clients',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'Advanced Features for Seamless Workflow',
    features: [
      {
        id: 'integrations',
        title: 'WhatsApp & Slack Integrations',
        description: 'Communicate with clients directly inside Timeliner',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'Multi-Language Support',
        description: 'LTR + RTL interface for global teams',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'AI Tools',
        description: 'Auto captions, smart suggestions for faster workflow',
        icon: 'sparkles'
      }
    ]
  }
];

export const featureGroupsEs: FeatureGroup[] = [
  {
    id: 'smart-management',
    headline: 'Gestión Inteligente de Proyectos y Revisiones',
    features: [
      {
        id: 'revision-workflow',
        title: 'Flujo de Revisión',
        description: 'Comentarios con código de tiempo, dibujos, notas de voz y carga de archivos',
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
        description: 'Estructura de archivos organizada automáticamente por proyecto',
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
        description: 'Alinea expectativas antes de comenzar el trabajo',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Creador de Portafolio',
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
        description: 'Asigna roles, monitorea cargas de trabajo y permisos',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Seguimiento Transparente de Pagos',
        description: 'Ve pagos pendientes, notifica a miembros/clientes',
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
        title: 'Soporte Multilingüe',
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
];

export type { FeatureGroup, Feature };
