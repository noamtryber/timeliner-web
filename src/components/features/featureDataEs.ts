
import { featureGroups } from "./featureData";

export const featureGroupsEs = featureGroups.map(group => ({
  ...group,
  title: `[${group.id}_title_es]`,
  features: group.features.map(feature => ({
    ...feature,
    title: `[${feature.id}_title_es]`,
    description: `[${feature.id}_description_es]`
  }))
}));
