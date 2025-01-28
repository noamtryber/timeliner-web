import {
  FolderGit2,
  FileCheck,
  MessageCircle,
  FileText,
  Calendar,
  DollarSign,
  Bot,
  ChartBar,
  Globe,
  Slack,
  MessageSquare,
  Users
} from "lucide-react";

export const iconComponents = {
  "revision-workflow": MessageCircle,
  "task-management": FileCheck,
  "version-control": FolderGit2,
  "project-briefs": FileText,
  "portfolio-builder": Calendar,
  "payment-tracking": DollarSign,
  "ai-tools": Bot,
  "crm": ChartBar,
  "multi-language": Globe,
  "slack-integration": Slack,
  "whatsapp-integration": MessageSquare,
  "team-collaboration": Users,
} as const;