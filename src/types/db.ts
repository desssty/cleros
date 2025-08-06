import type { Note, NoteStatus } from "./note";
import type { Activity } from "./activity";
import type { Shelf } from "./shelf";
import type { Reminder } from "./reminder";

export interface DB {
  notes: Note[];
  activities: Activity[];
  shelves: Shelf[];
  reminders: Reminder[];
  statuses: NoteStatus[];
}
