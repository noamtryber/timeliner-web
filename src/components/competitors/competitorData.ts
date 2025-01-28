import { Competitor } from "./types";

export const competitors: Competitor[] = [
  {
    id: "frameio",
    name: "Frame.io",
    logo: "/lovable-uploads/acfcdad6-1f19-423f-9c1e-ae8fdb3f3620.png",
    features: [
      {
        name: "Pricing",
        competitor: "$15/user/month (Basic) = $75/month for 5 users\n$25/user/month (Pro) = $750/month for 30 users",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Frame.io is great for quick storage and video review, but it becomes costly as teams grow and lacks advanced workflow, CRM, and marketing tools.'
          },
          {
            type: 'positive',
            text: 'Timeliner is an all-in-one solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.'
          },
          {
            type: 'positive',
            text: 'Seamless smart integrations with WhatsApp, Email, and Slack ensure effortless client collaboration and team notifications.'
          },
          {
            type: 'positive',
            text: 'Flat pricing means no surprise costs, making Timeliner the smarter choice for growing media teams and agencies.'
          }
        ]
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
        competitor: "Basic tags only",
        timeliner: "List, Kanban, Pool, and Chart Status Groups"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        competitor: false,
        timeliner: true
      },
      {
        name: "No Account Required for Reviewers",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp & Slack Integrations",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions (for uncommon languages as well)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1on1 Onboarding",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        competitor: false,
        timeliner: true,
        description: "Flat pricing covers up to 30 users with no extra fees"
      }
    ]
  },
  {
    id: "dropbox",
    name: "Dropbox Replay",
    logo: "/lovable-uploads/16ee0992-d929-4b38-b7b4-bbfb80f50721.png",
    features: [
      {
        name: "Pricing",
        competitor: "$10/user/month for Replay Add-On\nRequires Dropbox Plus ($10/user/month) = $20/user/month total\n$100/month for 5 users\n$600/month for 30 users",
        timeliner: "$29/month (fixed up to 5 users)\n$49/month (fixed up to 30 users)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Dropbox Replay is mainly a review add-on, requiring Dropbox Plus for full functionality, making it $20/user/month—which quickly adds up as teams grow.'
          },
          {
            type: 'positive',
            text: 'Timeliner is a complete media management solution, combining project management, video review, media storage, CRM, marketing tools, and portfolio building in one platform.'
          },
          {
            type: 'positive',
            text: 'Smart integrations with WhatsApp, Email, and Slack allow seamless team communication and client notifications.'
          },
          {
            type: 'positive',
            text: 'Flat pricing ensures cost predictability, making Timeliner the more scalable and cost-effective choice for video editors and media teams.'
          }
        ]
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
        competitor: "Basic file storage and sharing",
        timeliner: "List, Kanban, Pool, and Chart views"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        competitor: false,
        timeliner: true
      },
      {
        name: "No Account Required for Reviewers",
        competitor: true,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp & Slack Integrations",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions (for uncommon languages as well)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        competitor: "$600/month for 30 users (Replay + Dropbox Plus required)",
        timeliner: "Flat pricing covers up to 30 users with no extra fees"
      }
    ]
  },
  {
    id: "wipster",
    name: "Wipster",
    logo: "/lovable-uploads/632bc234-7a2b-4c8a-bf51-2bf57e7f4c7b.png",
    features: [
      {
        name: "Pricing",
        competitor: "$19.95/user/month = $99.75/month for 5 users\n$598.50/month for 30 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Wipster is a solid choice for simple video review with time-synced comments and a clean interface, making it great for small teams handling basic client feedback. However, it charges per user ($19.95/month) and storage is capped at 250GB, which limits scalability for larger teams.'
          },
          {
            type: 'positive',
            text: 'Timeliner goes beyond just video review—it offers project management, CRM, team monitoring, media storage (1-2TB), marketing tools, and portfolio building in one platform. Plus, with WhatsApp, Slack, and email integrations, your team and clients stay connected without extra tools. Flat pricing means you scale without increasing costs, making it the smarter choice for post-production teams and creative agencies. 🚀'
          }
        ]
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
        competitor: "Basic tags only",
        timeliner: "List, Kanban, Pool, and Chart Status Groups"
      },
      {
        name: "Intuitive Split Screen Version Comparison",
        competitor: false,
        timeliner: true
      },
      {
        name: "Interactive New Offer Workflow",
        competitor: false,
        timeliner: true
      },
      {
        name: "Built-In CRM",
        competitor: false,
        timeliner: true
      },
      {
        name: "WhatsApp & Slack Integrations",
        competitor: false,
        timeliner: true
      },
      {
        name: "Team Monitoring & Productivity Tracking",
        competitor: false,
        timeliner: true
      },
      {
        name: "Add comments using voice recordings",
        competitor: false,
        timeliner: true
      },
      {
        name: "Multi-language AI captions (for uncommon languages as well)",
        competitor: false,
        timeliner: true
      },
      {
        name: "Pro Portfolio Builder",
        competitor: false,
        timeliner: true
      },
      {
        name: "Educational Resources & 1-on-1 Onboarding",
        competitor: false,
        timeliner: true
      },
      {
        name: "Costs rise exponentially as team grows",
        competitor: "$598.50/month for 30 users",
        timeliner: "Flat pricing covers up to 30 users with no extra fees"
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
        timeliner: "$29/month (up to 5 users, 1TB)\n$49/month (up to 30 users, 2TB)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'Vimeo Review is great for content creators already in the Vimeo ecosystem, offering video hosting, review tools, and team collaboration. It’s useful for independent filmmakers and brands, especially with AI-generated scripts and auto-captioning in higher tiers. However, its review tools are basic, and pricing scales per user ($25+/month), making it costly for growing teams.'
          },
          {
            type: 'positive',
            text: 'Timeliner is purpose-built for video editors and post-production teams, with advanced version control, team monitoring, client portals, and AI-powered captions in multiple languages—not just English. It also integrates with WhatsApp, Slack, and email for streamlined client collaboration. No per-user pricing means agencies and video teams save money while getting more features. 🎬'
          }
        ]
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
    logo: "/lovable-uploads/d4d71abe-8984-4b88-baf8-c4dd913ee9b6.png",
    features: [
      {
        name: "Pricing",
        competitor: "$7/user/month (Unlimited) = $35/month for 5 users",
        timeliner: "$29/month (up to 5 users)\n$49/month (up to 30 users)",
        keyTakeaways: [
          {
            type: 'negative',
            text: 'ClickUp is a fantastic general project management tool, offering task tracking, automation, and time management—great for businesses handling diverse projects. It even has basic video commenting, but it lacks dedicated video review tools, AI captions, media storage, and advanced creative workflows.'
          },
          {
            type: 'positive',
            text: 'Timeliner is tailor-made for video production workflows, combining Kanban-style project tracking, video review tools, media storage, CRM, and client collaboration in one place. Plus, audio comments, AI captions, and WhatsApp & Slack integrations ensure smoother communication for video editors and creative teams. Flat pricing makes it scalable, without the per-user cost of ClickUp.'
          }
        ]
      },
      {
        name: "Video Review Tools",
        competitor: "Basic video review with comments",
        timeliner: "Advanced review tools with time-synced comments, annotations, and audio comments"
      },
      {
        name: "Audio Comments",
        competitor: false,
        timeliner: "Included"
      },
      {
        name: "CRM",
        competitor: false,
        timeliner: "Built-in"
      },
      {
        name: "WhatsApp Integration",
        competitor: false,
        timeliner: "Included"
      },
      {
        name: "Client Collaboration",
        competitor: "Task sharing with basic permissions",
        timeliner: "Dedicated client area with advanced permissions"
      }
    ]
  }
];
