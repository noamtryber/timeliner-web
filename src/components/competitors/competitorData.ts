export interface Feature {
  name: string;
  competitor: boolean | string;
  timeliner: boolean | string;
}

export interface Competitor {
  id: string;
  name: string;
  features: Feature[];
}

export const competitors: Competitor[] = [
  {
    id: "frameio",
    name: "Frame.io V4",
    features: [
      {
        name: "Pricing",
        competitor: "$15/user/month (Basic) = $75/month for 5 users\n$25/user/month (Pro) = $125/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)"
      },
      {
        name: "Time-Synced Comments",
        competitor: true,
        timeliner: true
      },
      {
        name: "Media Status Tracking",
        competitor: "Limited to simple tags",
        timeliner: "Advanced pipeline with List, Kanban, Pool, and Chart views"
      },
      {
        name: "AI Tools",
        competitor: false,
        timeliner: "Automatic caption generation in multiple languages"
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "Client Area and Advanced Permissions",
        competitor: "Limited",
        timeliner: true
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