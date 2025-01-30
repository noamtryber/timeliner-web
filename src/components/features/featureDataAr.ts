import { FeatureGroup } from "./featureData";

export const featureGroupsAr: FeatureGroup[] = [
  {
    id: 'smart-management',
    headline: 'إدارة ذكية للمشاريع والمراجعات',
    features: [
      {
        id: 'revision-workflow',
        title: 'نظام مراجعات متطور',
        description: 'تعليقات مرتبطة بالوقت، رسومات توضيحية، ملاحظات صوتية، وتحميل الملفات بسهولة تامة',
        icon: 'workflow'
      },
      {
        id: 'task-management',
        title: 'إدارة مهام احترافية',
        description: 'نظرة شاملة على جميع المشاريع في مكان واحد، مع تتبع دقيق لحالة كل مهمة',
        icon: 'list-todo'
      },
      {
        id: 'version-control',
        title: 'إدارة الإصدارات',
        description: 'قارن بين النسخ جنباً إلى جنب، واسترجع أي إصدار سابق بضغطة زر',
        icon: 'git-branch'
      },
      {
        id: 'folder-management',
        title: 'تنظيم ذكي للملفات',
        description: 'تنظيم تلقائي للملفات لكل مشروع، كل شيء في مكانه المناسب بدون فوضى',
        icon: 'folder'
      }
    ]
  },
  {
    id: 'client-collaboration',
    headline: 'تعاون أسهل مع العملاء',
    features: [
      {
        id: 'project-briefs',
        title: 'موجز مشروع تفاعلي',
        description: 'اتفقوا على كل شيء قبل ما الشغل يبدأ، בלי مفاجآت لاحقًا',
        icon: 'clipboard'
      },
      {
        id: 'portfolio-builder',
        title: 'منشئ بورتفوليو',
        description: 'اعرض أعمالك السابقة بشكل احترافي وسهل المشاركة',
        icon: 'layout-grid'
      },
      {
        id: 'client-portals',
        title: 'بوابات عملاء مخصصة',
        description: 'العملاء يراجعون، يوافقون، ويحملون الملفات بسهولة، בלי ألف رسالة واتساب',
        icon: 'layout-dashboard'
      }
    ]
  },
  {
    id: 'team-payments',
    headline: 'أدوات قوية للفرق والمدفوعات',
    features: [
      {
        id: 'crm',
        title: 'نظام CRM مدمج للمبدعين',
        description: 'تابع تفاعلات العملاء، المشاريع، والصفقات بمكان واحد',
        icon: 'users'
      },
      {
        id: 'team-collaboration',
        title: 'أدوات تعاون للفريق',
        description: 'وزّع الأدوار، راقب الشغل، وحدد الصلاحيات لكل شخص',
        icon: 'users-round'
      },
      {
        id: 'payment-tracking',
        title: 'تتبع شفاف للمدفوعات',
        description: 'اعرف مين دفع ومين لا، وخلي التيم أو العملاء يتلقوا إشعارات مباشرة',
        icon: 'credit-card'
      }
    ]
  },
  {
    id: 'advanced-features',
    headline: 'ميزات متقدمة لسهولة سير العمل',
    features: [
      {
        id: 'integrations',
        title: 'تكامل مع واتساب وسلاك',
        description: 'تواصل مع العملاء مباشرة داخل النظام، بدون פינג-פונג מיילים',
        icon: 'message-square'
      },
      {
        id: 'multi-language',
        title: 'دعم لغات متعددة',
        description: 'واجهة تدعم الاتجاهين، مناسبة لأي فريق في أي مكان',
        icon: 'languages'
      },
      {
        id: 'ai-tools',
        title: 'أدوات ذكاء اصطناعي',
        description: 'تفريغ تلقائي للكلام، اقتراحات ذكية، وإنجاز العمل أسرع بدون وجع راس',
        icon: 'sparkles'
      }
    ]
  }
] as const;