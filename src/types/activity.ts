export type ActivityType = "reading" | "watching" | "writing" | "project";

export interface Activity {
  id: string;
  type: ActivityType;
  description: string;
  category: string;
  progress?: string;
  date: string;
}
