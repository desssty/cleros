import type { Note, NoteStatus } from "entities/note";
import type { Activity } from "entities/activity";
import type { Shelf } from "entities/shelf";
import type { Reminder } from "entities/reminder";

export interface DB {
  notes: Note[];
  activities: Activity[];
  shelves: Shelf[];
  reminders: Reminder[];
  statuses: NoteStatus[];
}
