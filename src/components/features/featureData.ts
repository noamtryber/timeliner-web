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
] as const;

export type { FeatureGroup, Feature };
