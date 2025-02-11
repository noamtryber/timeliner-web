
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export interface PlanFeature {
  feature_key: string;
  feature_value: string;
  feature_tooltip?: string | null;
}

export interface PricingPlan {
  plan_id: string;
  title: string;
  subtitle: string;
  base_price: number | null;
  base_storage: number | null;
  base_members: number | null;
  max_client_guests: number | null;
  features: PlanFeature[];
}

export interface PricingRule {
  rule_type: string;
  unit_price: number;
  unit_size: number;
  min_units: number;
  max_units: number;
}

export const usePricingData = () => {
  const { language } = useLanguage();

  return useQuery({
    queryKey: ['pricing-data', language],
    queryFn: async () => {
      // Fetch pricing plans
      const { data: plansData, error: plansError } = await supabase
        .from('pricing_plans')
        .select('*')
        .eq('language', language);

      if (plansError) throw plansError;

      // Fetch features for all plans
      const { data: featuresData, error: featuresError } = await supabase
        .from('plan_features')
        .select('*')
        .eq('language', language);

      if (featuresError) throw featuresError;

      // Fetch pricing rules
      const { data: rulesData, error: rulesError } = await supabase
        .from('pricing_rules')
        .select('*');

      if (rulesError) throw rulesError;

      // Organize features by plan
      const planFeatures = featuresData.reduce((acc, feature) => {
        if (!acc[feature.plan_id]) {
          acc[feature.plan_id] = [];
        }
        acc[feature.plan_id].push({
          feature_key: feature.feature_key,
          feature_value: feature.feature_value,
          feature_tooltip: feature.feature_tooltip,
        });
        return acc;
      }, {} as Record<string, PlanFeature[]>);

      // Combine plans with their features
      const plans = plansData.map(plan => ({
        ...plan,
        features: planFeatures[plan.plan_id] || [],
      }));

      return {
        plans,
        rules: rulesData,
      };
    },
  });
};
