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
    headline: 'Take control of your workflow with tools that simplify and streamline your editing process.',
    features: [
      {
        id: 'revision-workflow',
        title: 'Smart Revision Workflow',
        description: 'You and your clients can add timecode-based comments, draw annotations, record voice notes, and upload files for precise feedback, eliminating back-and-forth.',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'Status-Based Task Management',
        description: 'Organize tasks with clear status updates, and use the "All Tasks View" to see every task from all clients by status in one place.',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'Version Control',
        description: 'Compare versions with split-screen tools and easily download latest/previous versions.',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'Folder Management',
        description: 'Automatically organize files by status, project, or client, and eliminate the mess of scattered folders across platforms.',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'Deliver better results by aligning expectations and making client interactions effortless.',
    features: [
      {
        id: 'project-briefs',
        title: 'Perfect Expectation Alignment',
        description: 'Interactive tool for aligning expectations between you and your client. Choose references, timelines, and payment terms upfront with clear, dynamic project briefs.',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Portfolio Builder',
        description: 'Stop sending your work to clients in messy drives. Present your work with quality, customized templates to impress clients and close deals faster.',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'Custom Client Portals',
        description: 'Provide clients with an elegant dashboard for submitting comments, feedback, approvals, and downloading final deliverables.',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'Stay organized, get paid on time, and collaborate more effectively with your team.',
    features: [
      {
        id: 'crm',
        title: 'Built-in CRM',
        description: 'Track lead status, follow-ups, and clients with a quality CRM that saves third-party automations and headaches.',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'Team Collaboration Tools',
        description: 'Manage your team from an overview, role-based permissions, employee control, how much money you owe the team, track workloads, and ensure everything flows.',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Transparent Payment Tracking',
        description: 'Track payments for projects or tasks, and notify team members and clients about upcoming payment due dates.',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'Enhance productivity with integrations, multilingual support, and AI-powered tools.',
    features: [
      {
        id: 'integrations',
        title: 'WhatsApp & Slack Integrations',
        description: 'Set which notifications your clients and team receive and where. For example - when a video is waiting for approval, the client automatically receives a WhatsApp notification with a viewing link.',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'Multilingual Support',
        description: 'The only system in the world that combines project management and video control adapted from right to left! Fully supports right-to-left and left-to-right languages, ideal for global teams.',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'AI Tools',
        description: 'Create automatic subtitles in Hebrew (no need to waste money on other tools), get recommendations for work efficiency, and speed up the editing process with smart automation.',
        icon: 'sparkles'
      }
    ]
  }
] as const;

export type { FeatureGroup, Feature };