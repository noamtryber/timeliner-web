
import { featureGroups } from "./featureData";

export const featureGroupsAr = featureGroups.map(group => ({
  ...group,
  title: `[${group.id}_title_ar]`,
  features: group.features.map(feature => ({
    ...feature,
    title: `[${feature.id}_title_ar]`,
    description: `[${feature.id}_description_ar]`
  }))
}));
