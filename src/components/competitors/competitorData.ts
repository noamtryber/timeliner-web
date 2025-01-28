export interface Feature {
  name: string;
  competitor: boolean | string;
  timeliner: boolean | string;
}

export interface Competitor {
  id: string;
  name: string;
  logo?: string;
  features: Feature[];
}

export const competitors: Competitor[] = [
  {
    id: "frameio",
    name: "Frame.io",
    logo: "/lovable-uploads/acfcdad6-1f19-423f-9c1e-ae8fdb3f3620.png",
    features: [
      {
        name: "Time-Synced Comments",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        competitor: true,
        timeliner: true
      },
      {
        name: "Pricing",
        competitor: "$15/user/month (Basic) = $75/month for 5 users\n$25/user/month (Pro) = $750/month for 30 users",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)"
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        competitor: "Limited to simple tags",
        timeliner: "Advanced pipeline with List, Kanban, Pool, and Chart views"
      },
      {
        name: "Intuitive Version Comparison",
        competitor: "Limited to file previews",
        timeliner: true
      },
      {
        name: "No Account Required for Reviewers",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive Offer Workflow",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "Integrations",
        competitor: "Limited to Adobe Cloud, Email",
        timeliner: "WhatsApp, Gmail, Slack, and more"
      },
      {
        name: "Team Monitoring and Productivity Tracking",
        competitor: false,
        timeliner: true
      },
      {
        name: "Client Area and Advanced Permissions",
        competitor: "Limited and requires extra cost",
        timeliner: true
      },
      {
        name: "Audio Comments",
        competitor: false,
        timeliner: "Add comments using voice recordings"
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation in multiple languages not supported by Premiere or DaVinci Resolve"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: "Build and send professional portfolios to clients"
      },
      {
        name: "Educational Resources and Onboarding",
        competitor: "Limited",
        timeliner: "Includes video courses and onboarding guides"
      },
      {
        name: "Scalability",
        competitor: "Costs increase significantly as team size grows (e.g., $750/month for 30 users)",
        timeliner: "Flat pricing structure supports growth ($49/month for up to 30 users)"
      }
    ]
  },
  {
    id: "dropbox",
    name: "Dropbox Replay",
    logo: "/lovable-uploads/16ee0992-d929-4b38-b7b4-bbfb80f50721.png",
    features: [
      {
        name: "Media Review Tools",
        competitor: "Included with Replay add-on",
        timeliner: "Fully integrated, with advanced workflow and review tools"
      },
      {
        name: "No Account Required for Reviewers",
        competitor: true,
        timeliner: true
      },
      {
        name: "Pricing",
        competitor: "$10/user/month (Replay) + $10/user/month (Plus plan) = $20/user/month",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)"
      },
      {
        name: "Time-Synced Comments",
        competitor: true,
        timeliner: true
      },
      {
        name: "High-Quality Video Previews",
        competitor: true,
        timeliner: true
      },
      {
        name: "Client-Friendly Review Links",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking Advanced Workflow",
        competitor: false,
        timeliner: "Advanced pipeline with List, Kanban, Pool, and Chart views"
      },
      {
        name: "Interactive Offer Workflow",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "Integrations",
        competitor: "Limited to Dropbox ecosystem (Sync, File Storage)",
        timeliner: "WhatsApp, Gmail, Slack, and more"
      },
      {
        name: "Team Monitoring and Productivity Tracking",
        competitor: false,
        timeliner: true
      },
      {
        name: "Client Area and Advanced Permissions",
        competitor: "Limited to review link access",
        timeliner: "Advanced permissions and dedicated client areas"
      },
      {
        name: "Publish and Share Folders/Videos",
        competitor: true,
        timeliner: true
      },
      {
        name: "Audio Comments",
        competitor: false,
        timeliner: "Add comments using voice recordings"
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation in multiple languages not supported by traditional tools"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources and Onboarding",
        competitor: "Limited",
        timeliner: "Includes video courses and onboarding guides"
      },
      {
        name: "Scalability",
        competitor: "Costs increase significantly as team size grows (e.g., $600/month for 30 users, Replay + Plus)",
        timeliner: "Flat pricing structure supports growth ($49/month for up to 30 users)"
      },
      {
        name: "Version Management",
        competitor: "Basic with Replay",
        timeliner: "Advanced with visual comparisons and history"
      }
    ]
  },
  {
    id: "wipster",
    name: "Wipster",
    logo: "/lovable-uploads/d4d71abe-8984-4b88-baf8-c4dd913ee9b6.png",
    features: [
      {
        name: "Pricing",
        competitor: "$19.95/user/month = $99.75/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Storage",
        competitor: "250 GB",
        timeliner: "1–2 TB (depending on the plan)"
      },
      {
        name: "Media Review Tools",
        competitor: "Time-synced comments, annotations",
        timeliner: "Fully integrated with advanced workflow and review tools"
      },
      {
        name: "No Account Required for Reviewers",
        competitor: true,
        timeliner: true
      },
      {
        name: "Advanced Workflow Management",
        competitor: false,
        timeliner: "Includes List, Kanban, Pool, and Chart views"
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation in multiple languages"
      },
      {
        name: "Audio Comments",
        competitor: false,
        timeliner: "Add comments using voice recordings"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: "Build and send professional portfolios to clients"
      },
      {
        name: "Client Area and Permissions",
        competitor: "Limited",
        timeliner: "Dedicated client area with advanced permissions"
      },
      {
        name: "Educational Resources",
        competitor: "Limited",
        timeliner: "Includes video courses and onboarding guides"
      },
      {
        name: "Scalability",
        competitor: "Costs increase per user",
        timeliner: "Flat pricing supports growth up to 30 users for $49/month"
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
        competitor: "Starter: $12/month (1 seat, 100GB storage)\nStandard: $25/month (2+ seats, 1TB storage)\nAdvanced: $65/month (2+ seats, 5TB storage)",
        timeliner: "$29/month (up to 5 users, 1TB)\n$49/month (up to 30 users, 2TB)"
      },
      {
        name: "Storage",
        competitor: "Starter: 100GB\nStandard: 1TB\nAdvanced: 5TB",
        timeliner: "1–2 TB depending on the plan"
      },
      {
        name: "Media Review Tools",
        competitor: "Basic tools for comments and annotations",
        timeliner: "Fully integrated with advanced workflow and review tools"
      },
      {
        name: "No Account Required for Reviewers",
        competitor: true,
        timeliner: true
      },
      {
        name: "Advanced Workflow Management",
        competitor: false,
        timeliner: "Includes List, Kanban, Pool, and Chart views"
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "AI Tools",
        competitor: "Limited to AI script generator and auto-captioning (Standard/Advanced)",
        timeliner: "Advanced AI tools, including automatic multi-language captions"
      },
      {
        name: "Audio Comments",
        competitor: false,
        timeliner: "Add comments using voice recordings"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: "Build and send professional portfolios to clients"
      },
      {
        name: "Client Area and Permissions",
        competitor: "Limited",
        timeliner: "Dedicated client area with advanced permissions"
      },
      {
        name: "Educational Resources",
        competitor: "Limited",
        timeliner: "Includes video courses and onboarding guides"
      },
      {
        name: "Scalability",
        competitor: "Costs increase significantly with more users and higher plans",
        timeliner: "Flat pricing supports growth up to 30 users for $49/month"
      }
    ]
  },
  {
    id: "clickup",
    name: "ClickUp",
    logo: "/lovable-uploads/549ff6c1-b290-475e-b156-fdc26f5d58d5.png",
    features: [
      {
        name: "Pricing",
        competitor: "$5/user/month = $25/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Workflow Management",
        competitor: "Strong project/task management tools",
        timeliner: "Media-focused workflow with multiple views"
      },
      {
        name: "Media Review Tools",
        competitor: false,
        timeliner: "Advanced review tools with audio comments"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "CRM and Client Management",
        competitor: "Limited",
        timeliner: true
      }
    ]
  }
];
