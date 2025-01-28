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
    logo: "/lovable-uploads/f0899906-47ae-4fe3-8b96-2bdca0cc580f.png",
    features: [
      {
        name: "Time-Synced Comments",
        competitor: "Included",
        timeliner: "Included"
      },
      {
        name: "High-Quality Video Previews",
        competitor: "Included",
        timeliner: "Included"
      },
      {
        name: "Client-Friendly Review Links",
        competitor: "Included",
        timeliner: "Included"
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
        timeliner: "Included"
      },
      {
        name: "No Account Required for Reviewers",
        competitor: "Included",
        timeliner: "Included"
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
        timeliner: "Included"
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
    features: [
      {
        name: "Pricing",
        competitor: "$15/user/month (Standard) = $75/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Time-Synced Comments",
        competitor: true,
        timeliner: true
      },
      {
        name: "Integrations",
        competitor: "Limited to Dropbox ecosystem",
        timeliner: "WhatsApp, Gmail, and more"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation in multiple languages"
      },
      {
        name: "Media Status Tracking",
        competitor: false,
        timeliner: "Advanced pipeline with multiple views"
      }
    ]
  },
  {
    id: "wipster",
    name: "Wipster",
    features: [
      {
        name: "Pricing",
        competitor: "$19/user/month = $95/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Media Review Tools",
        competitor: "Basic review tools",
        timeliner: "Advanced review tools with audio comments"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: true
      },
      {
        name: "CRM and Client Management",
        competitor: false,
        timeliner: true
      }
    ]
  },
  {
    id: "vimeo",
    name: "Vimeo Review",
    features: [
      {
        name: "Pricing",
        competitor: "Included with Vimeo hosting (starts at $20/month)",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Time-Synced Comments",
        competitor: true,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation"
      },
      {
        name: "Status Tracking",
        competitor: false,
        timeliner: "Advanced pipeline"
      }
    ]
  },
  {
    id: "clickup",
    name: "ClickUp",
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
