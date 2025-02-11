
import { Check, X, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureRow {
  feature: string;
  free: boolean | string;
  essentials: boolean | string;
  studio: boolean | string;
  enterprise: boolean | string;
}

const featuresData: FeatureRow[] = [
  {
    feature: "Best For",
    free: "Solo editors",
    essentials: "Small teams & freelancers",
    studio: "Growing agencies & teams",
    enterprise: "Large-scale enterprises"
  },
  {
    feature: "Storage",
    free: "3GB",
    essentials: "1TB",
    studio: "2TB (Expandable)",
    enterprise: "Unlimited"
  },
  {
    feature: "Additional Storage",
    free: false,
    essentials: "$1.50 per 100GB (Up to 5TB)",
    studio: "$1.50 per 100GB (Up to 5TB)",
    enterprise: "Unlimited"
  },
  {
    feature: "Included Member Seats",
    free: "1",
    essentials: "4",
    studio: "5 (Expandable)",
    enterprise: "Unlimited"
  },
  {
    feature: "Extra Members",
    free: false,
    essentials: false,
    studio: "$7 per seat (Up to 20 seats)",
    enterprise: "Unlimited"
  },
  {
    feature: "Client Guest Access",
    free: "1 per project",
    essentials: "Up to 3 per project",
    studio: "Unlimited",
    enterprise: "Unlimited"
  },
  {
    feature: "Clients Can",
    free: "Upload, comment, approve, download",
    essentials: "Upload, comment, approve, download",
    studio: "Upload, comment, approve, download",
    enterprise: "Upload, comment, approve, download"
  },
  {
    feature: "Members Can",
    free: "Edit, assign tasks, manage workflows",
    essentials: "Edit, assign tasks, manage workflows",
    studio: "Edit, assign tasks, manage workflows",
    enterprise: "Edit, assign tasks, manage workflows"
  },
  {
    feature: "Task & Workflow Automation",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Smart Revision Tracking",
    free: true,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Version Control & History",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Client Portals",
    free: "Basic",
    essentials: "Advanced",
    studio: "Fully Customizable",
    enterprise: "White-labeling"
  },
  {
    feature: "Built-in CRM",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Project Payment Tracking",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Advanced Analytics & AI Tools",
    free: false,
    essentials: false,
    studio: true,
    enterprise: true
  },
  {
    feature: "Integration with WhatsApp & Slack",
    free: false,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "Multi-Language Support (LTR + RTL)",
    free: true,
    essentials: true,
    studio: true,
    enterprise: true
  },
  {
    feature: "API & Custom Deployment",
    free: false,
    essentials: false,
    studio: false,
    enterprise: true
  },
  {
    feature: "Priority 24/7 Support",
    free: false,
    essentials: false,
    studio: true,
    enterprise: true
  },
  {
    feature: "On-Premise Hosting Option",
    free: false,
    essentials: false,
    studio: false,
    enterprise: true
  }
];

const ComparisonTable = () => {
  const { isRTL } = useLanguage();

  const renderValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500/70 mx-auto" />
      );
    }
    return <span className="text-sm text-white/70">{value}</span>;
  };

  return (
    <div className={`w-full overflow-x-auto ${isRTL ? 'rtl' : 'ltr'}`}>
      <table className="w-full min-w-[800px]">
        <thead>
          <tr className="border-b border-white/10">
            <th className="p-4 text-left font-medium text-white/70">Feature</th>
            <th className="p-4 text-center font-medium text-white/70">Free</th>
            <th className="p-4 text-center font-medium text-white/70">Essentials ($29/mo)</th>
            <th className="p-4 text-center font-medium text-white/70">Studio ($49/mo)</th>
            <th className="p-4 text-center font-medium text-white/70">Enterprise (Custom)</th>
          </tr>
        </thead>
        <tbody>
          {featuresData.map((row, index) => (
            <tr 
              key={index} 
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="p-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/90">{row.feature}</span>
                </div>
              </td>
              <td className="p-4 text-center">{renderValue(row.free)}</td>
              <td className="p-4 text-center">{renderValue(row.essentials)}</td>
              <td className="p-4 text-center">{renderValue(row.studio)}</td>
              <td className="p-4 text-center">{renderValue(row.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
