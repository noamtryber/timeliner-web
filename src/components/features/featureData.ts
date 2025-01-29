interface FeatureGroup {
  id: string;
  headline: string;
  hebrewHeadline?: string;
  features: Feature[];
}

interface Feature {
  id: string;
  title: string;
  hebrewTitle?: string;
  description: string;
  hebrewDescription?: string;
  icon: string;
}

export const featureGroups: FeatureGroup[] = [
  {
    id: 'smart-management',
    headline: 'Take control of your workflow with tools that simplify and streamline your editing process.',
    hebrewHeadline: 'קחו שליטה על תהליך העבודה שלכם עם כלים שמפשטים ומייעלים את תהליך העריכה.',
    features: [
      {
        id: 'revision-workflow',
        title: 'Revision Workflow',
        hebrewTitle: 'סבבי תיקונים חכמים',
        description: 'Add comments by timecode, draw, record voice memos, and upload files for precise feedback.',
        hebrewDescription: 'אתם והלקוחות שלכם יכולים להוסיף הערות לפי קוד זמן, לצייר , להקליט הערות קוליות ולהעלות קבצים לקבלת פידבק מדויק ולחסוך חתוך ועכבר.',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'Task Management by Status',
        hebrewTitle: 'ניהול משימות לפי סטטוס',
        description: 'Organize tasks with clear status updates, and use "Global View" to see everything in one place.',
        hebrewDescription: 'ארגנו משימות עם עדכוני סטטוס ברורים, והשתמשו ב"מבט" את כל המשימות כדי לראות את כל המשימות מכל הלקוחות לפי סטטוס במקום אחד.',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'Version Control',
        hebrewTitle: 'ניהול גרסאות',
        description: 'Compare versions side-by-side with split-screen tools and download previous versions easily.',
        hebrewDescription: 'השוו בין גרסאות עם כלי מסך מפוצל והורידו בקלות גרסאות עדכניות / ישנות.',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'Smart Folder Management',
        hebrewTitle: 'ניהול תיקיות',
        description: 'Auto-organize files by status, project, or client to eliminate folder clutter.',
        hebrewDescription: 'ארגנו קבצים אוטומטית לפי סטטוס, פרויקט או לקוח, וחסלו את הבלגן בתיקיות מפוזרות בין פלטפורומות שונות.',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'Deliver better results by aligning expectations and making client interactions effortless.',
    hebrewHeadline: 'הגיעו לתוצאות טובות יותר על ידי יישור קו עם הלקוחות והפיכת האינטראקציות איתם לקלות ופשוטות.',
    features: [
      {
        id: 'project-briefs',
        title: 'Interactive Project Briefs',
        hebrewTitle: 'תיאום ציפיות מושלם',
        description: 'Define deliverables, timelines, and payment terms upfront with dynamic, guided briefs.',
        hebrewDescription: 'כלי אינטראקטיבי לתיאום ציפיות בינך לבין הלקוח שלך. בחירת רפרנסים, לוחות זמנים ותנאי תשלום מראש עם תקצירי פרוייקט דינמיים וברורים.',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'Portfolio Builder',
        hebrewTitle: 'בניית תיק עבודות',
        description: 'Showcase your work with customizable templates to impress clients and close deals faster.',
        hebrewDescription: 'סוף ללשלוח ללקוחות את העבודות שלכם מבולגנים בדרייב. הציגו את העבודות שלכם עם תבניות איכותיות מותאמות אישית כדי להרשים לקוחות ולסגור עסקאות מהר יותר.',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'Customizable Client Portals',
        hebrewTitle: 'פורטלים מותאמים ללקוחות',
        description: 'Give clients a sleek dashboard for feedback, approvals, and downloading final deliverables.',
        hebrewDescription: 'ספקו ללקוחות לוח בקרה אלגנטי לשליחת הערות, פידבק, אישורים והורדת תוצרים סופיים.',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'Stay organized, get paid on time, and collaborate more effectively with your team.',
    hebrewHeadline: 'הישארו מאורגנים, קבלו תשלום בזמן, ושתפו פעולה ביעילות רבה יותר עם הצוות שלכם.',
    features: [
      {
        id: 'crm',
        title: 'Built-In CRM for Creatives',
        hebrewTitle: 'CRM מובנה',
        description: 'Track leads, client communications, and project histories in one centralized system.',
        hebrewDescription: 'עקבו אחרי סטטוס לידים, פולואפ, לקוחות עם CRM איכותי שחוסך אוטומציות צד שלישי וכאב ראש.',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'Team Collaboration Tools',
        hebrewTitle: 'כלי שיתוף פעולה לצוותים',
        description: 'Assign roles, monitor workloads, and ensure smooth workflows with custom permissions.',
        hebrewDescription: 'נהלו את הצוות שלכם ממבט על, הרשאות לפי תפקידים, בקרה על עובדים, כמה כסף אתם חייבים לצוות, עקבו אחרי עומסי עבודה והבטיחו שהכל זורם.',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'Transparent Payment Tracking',
        hebrewTitle: 'מעקב תשלומים שקוף',
        description: 'Track payments for projects or tasks, and notify team members and clients about due payments.',
        hebrewDescription: 'עקבו אחרי תשלומים לפרויקטים או משימות, והודיעו לחברי צוות וללקוחות על תשלומים שמועד פירעונם מתקרב.',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'Enhance productivity with integrations, multilingual support, and AI-powered tools.',
    hebrewHeadline: 'שפרו את הפרודוקטיביות עם אינטגרציות, תמיכה במספר שפות וכלים מבוססי AI.',
    features: [
      {
        id: 'integrations',
        title: 'WhatsApp & Slack Integrations',
        hebrewTitle: 'אינטגרציות ל-WhatsApp ול-Slack',
        description: 'Communicate directly with clients and teams using tools you already love.',
        hebrewDescription: 'הגדירו איזה התראות הלקוחות והצוות שלכם יקבלו ואיפה. למשל- כשסרטון מחכה לאישור, אוטומטית הלקוח יקבל התראה לווצאפ עם לינק לצפייה.',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'Multi-Language Support',
        hebrewTitle: 'תמיכה רב-לשונית',
        description: 'Fully supports both LTR and RTL languages, making it perfect for global teams.',
        hebrewDescription: 'המערכת היחידה בעולם שמשלבת ניהול פרוייקטים ובקרה על סרטונים שמותאמת מימין לשמאל! תומך באופן מלא בשפות ימין-לשמאל ושמאל-לימין, אידיאלי לצוותים גלובליים.',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'AI Tools',
        hebrewTitle: 'כלי AI',
        description: 'Generate auto captions, get workflow suggestions, and speed up editing with smart automation.',
        hebrewDescription: 'צרו כתוביות אוטומטיות בעברית (אין צורך לבזבז כסף על כלים אחרים), קבלו המלצות לייעול העבודה, וזרזו את תהליך העריכה עם אוטומציה חכמה.',
        icon: 'sparkles'
      }
    ]
  }
] as const;

export type { FeatureGroup, Feature };