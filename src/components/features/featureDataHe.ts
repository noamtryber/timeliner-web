
import { featureGroups } from "./featureData";

export const featureGroupsHe = featureGroups.map(group => ({
  ...group,
  title: `[${group.id}_title_he]`,
  features: group.features.map(feature => ({
    ...feature,
    title: `[${feature.id}_title_he]`,
    description: `[${feature.id}_description_he]`
  }))
}));
