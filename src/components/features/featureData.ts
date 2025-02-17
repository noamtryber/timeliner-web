
import { iconComponents } from "./iconComponents";

export interface Feature {
  id: string;
  icon: keyof typeof iconComponents;
  title: string;
  description: string;
}

export interface FeatureGroup {
  id: string;
  title: string;
  features: Feature[];
}

export const featureGroups: FeatureGroup[] = [
  {
    id: "workflow",
    title: "[feature_group_workflow_title]",
    features: [
      {
        id: "revision-workflow",
        icon: "git-branch",
        title: "[feature_revision_workflow_title]",
        description: "[feature_revision_workflow_description]"
      },
      {
        id: "task-management",
        icon: "list-todo",
        title: "[feature_task_management_title]",
        description: "[feature_task_management_description]"
      },
      {
        id: "storage",
        icon: "folder",
        title: "[feature_storage_title]",
        description: "[feature_storage_description]"
      }
    ]
  },
  {
    id: "collaboration",
    title: "[feature_group_collaboration_title]",
    features: [
      {
        id: "client-portal",
        icon: "layout-grid",
        title: "[feature_client_portal_title]",
        description: "[feature_client_portal_description]"
      },
      {
        id: "team-dashboard",
        icon: "layout-dashboard",
        title: "[feature_team_dashboard_title]",
        description: "[feature_team_dashboard_description]"
      },
      {
        id: "client-management",
        icon: "users",
        title: "[feature_client_management_title]",
        description: "[feature_client_management_description]"
      }
    ]
  },
  {
    id: "automation",
    title: "[feature_group_automation_title]",
    features: [
      {
        id: "smart-notifications",
        icon: "sparkles",
        title: "[feature_smart_notifications_title]",
        description: "[feature_smart_notifications_description]"
      },
      {
        id: "ai-captions",
        icon: "languages",
        title: "[feature_ai_captions_title]",
        description: "[feature_ai_captions_description]"
      },
      {
        id: "payment-tracking",
        icon: "credit-card",
        title: "[feature_payment_tracking_title]",
        description: "[feature_payment_tracking_description]"
      }
    ]
  }
];
