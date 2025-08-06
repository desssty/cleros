export type ReminderType = "soft" | "critical";

export interface Reminder {
  id: string;
  message: string;
  relatedNoteId?: string;
  date: string;
  type: ReminderType;
}
