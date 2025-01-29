import { FeatureGroup } from "./featureData";

export const featureGroupsHe: FeatureGroup[] = [
  {
    id: 'smart-management',
    headline: 'ניהול פרויקטים ותיקונים חכם',
    features: [
      {
        id: 'revision-workflow',
        title: 'סבבי תיקונים חכמים',
        description: 'אתם והלקוחות שלכם יכולים להוסיף הערות לפי קוד זמן, לצייר , להקליט הערות קוליות ולהעלות קבצים לקבלת פידבק מדויק ולחסוך חתול ועכבר.',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'ניהול משימות לפי סטטוס',
        description: 'ארגנו משימות עם עדכוני סטטוס ברורים, והשתמשו ב"מבט" את כל המשימות כדי לראות את כל המשימות מכל הלקוחות לפי סטטוס במקום אחד.',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'ניהול גרסאות',
        description: 'השוו בין גרסאות עם כלי מסך מפוצל והורידו בקלות גרסאות עדכניות / ישנות.',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'ניהול תיקיות',
        description: 'ארגנו קבצים אוטומטית לפי סטטוס, פרויקט או לקוח, וחסלו את הבלגן בתיקיות מפוזרות בין פלטפורומות שונות.',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'שיתוף פעולה פשוט עם לקוחות',
    features: [
      {
        id: 'project-briefs',
        title: 'תיאום ציפיות מושלם',
        description: 'כלי אינטראקטיבי לתיאום ציפיות בינך לבין הלקוח שלך. בחירת רפרנסים, לוחות זמנים ותנאי תשלום מראש עם תקצירי פרוייקט דינמיים וברורים.',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'בניית תיק עבודות',
        description: 'סוף ללשלוח ללקוחות את העבודות שלכם מבולגנים בדרייב. הציגו את העבודות שלכם עם תבניות איכותיות מותאמות אישית כדי להרשים לקוחות ולסגור עסקאות מהר יותר.',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'פורטלים מותאמים ללקוחות',
        description: 'ספקו ללקוחות לוח בקרה אלגנטי לשליחת הערות, פידבק, אישורים והורדת תוצרים סופיים.',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'כלים חזקים לצוותים ותשלומים',
    features: [
      {
        id: 'crm',
        title: 'CRM מובנה',
        description: 'עקבו אחרי סטטוס לידים, פולואפ, לקוחות עם CRM איכותי שחוסך אוטומציות צד שלישי וכאב ראש.',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'כלי שיתוף פעולה לצוותים',
        description: 'נהלו את הצוות שלכם ממבט על, הרשאות לפי תפקידים, בקרה על עובדים, כמה כסף אתם חייבים לצוות, עקבו אחרי עומסי עבודה והבטיחו שהכל זורם.',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'מעקב תשלומים שקוף',
        description: 'עקבו אחרי תשלומים לפרויקטים או משימות, והודיעו לחברי צוות וללקוחות על תשלומים שמועד פירעונם מתקרב.',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'תכונות מתקדמות לזרימת עבודה חלקה',
    features: [
      {
        id: 'integrations',
        title: 'אינטגרציות ל-WhatsApp ול-Slack',
        description: 'הגדירו איזה התראות הלקוחות והצוות שלכם יקבלו ואיפה. למשל- כשסרטון מחכה לאישור, אוטומטית הלקוח יקבל התראה לווצאפ עם לינק לצפייה.',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'תמיכה רב-לשונית',
        description: 'המערכת היחידה בעולם שמשלבת ניהול פרוייקטים ובקרה על סרטונים שמותאמת מימין לשמאל! תומך באופן מלא בשפות ימין-לשמאל ושמאל-לימין, אידיאלי לצוותים גלובליים.',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'כלי AI',
        description: 'צרו כתוביות אוטומטיות בעברית (אין צורך לבזבז כסף על כלים אחרים), קבלו המלצות לייעול העבודה, וזרזו את תהליך העריכה עם אוטומציה חכמה.',
        icon: 'sparkles'
      }
    ]
  }
] as const;