export const featureGroups = [
  {
    id: 'smart-management',
    headline: 'Take control of your workflow with tools that simplify and streamline your editing process.',
    features: [
      {
        id: 'revision-workflow',
        title: 'Revision Workflow',
        description: 'Add comments by timecode, draw, record voice memos, and upload files for precise feedback.',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'Task Management by Status',
        description: 'Organize tasks with clear status updates, and use "Global View" to see everything in one place.',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'Version Control',
        description: 'Compare versions side-by-side with split-screen tools and download previous versions easily.',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'Smart Folder Management',
        description: 'Auto-organize files by status, project, or client to eliminate folder clutter.',
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
        title: 'Interactive Project Briefs',
        description: 'Define deliverables, timelines, and payment terms upfront with dynamic, guided briefs.',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Portfolio Builder',
        description: 'Showcase your work with customizable templates to impress clients and close deals faster.',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'Customizable Client Portals',
        description: 'Give clients a sleek dashboard for feedback, approvals, and downloading final deliverables.',
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
        title: 'Built-In CRM for Creatives',
        description: 'Track leads, client communications, and project histories in one centralized system.',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'Team Collaboration Tools',
        description: 'Assign roles, monitor workloads, and ensure smooth workflows with custom permissions.',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Transparent Payment Tracking',
        description: 'Track payments for projects or tasks, and notify team members and clients about due payments.',
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
        description: 'Communicate directly with clients and teams using tools you already love.',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'Multi-Language Support',
        description: 'Fully supports both LTR and RTL languages, making it perfect for global teams.',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'AI Tools',
        description: 'Generate auto captions, get workflow suggestions, and speed up editing with smart automation.',
        icon: 'sparkles'
      }
    ]
  }
] as const;