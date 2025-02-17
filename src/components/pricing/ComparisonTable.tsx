
import { Check, HelpCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonTable = () => {
  const { language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  const features = [
    {
      name: '[comparison_feature_1]',
      tooltip: '[comparison_feature_1_tooltip]',
      free: true,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: '[comparison_feature_2]',
      tooltip: '[comparison_feature_2_tooltip]',
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: '[comparison_feature_3]',
      tooltip: '[comparison_feature_3_tooltip]',
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      name: '[comparison_feature_4]',
      tooltip: '[comparison_feature_4_tooltip]',
      free: false,
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: '[comparison_feature_5]',
      tooltip: '[comparison_feature_5_tooltip]',
      free: false,
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      name: '[comparison_feature_6]',
      tooltip: '[comparison_feature_6_tooltip]',
      free: false,
      basic: false,
      pro: false,
      enterprise: true,
    }
  ];

  const plans = [
    { key: 'free', title: '[plan_free]' },
    { key: 'basic', title: '[plan_basic]' },
    { key: 'pro', title: '[plan_pro]' },
    { key: 'enterprise', title: '[plan_enterprise]' }
  ];

  return (
    <div className="mt-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">[comparison_features]</TableHead>
            {plans.map((plan) => (
              <TableHead key={plan.key} className="text-center">
                {plan.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {feature.name}
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TableCell>
              {plans.map((plan) => (
                <TableCell key={plan.key} className="text-center">
                  {feature[plan.key as keyof typeof feature] && (
                    <Check className="h-4 w-4 mx-auto text-primary" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
