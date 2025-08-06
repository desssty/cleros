export type NoteStatus = "not-started" | "in-progress" | "done";

export interface Note {
  id: string;
  title: string;
  filePath: string;
  shelves: string[];
  status: NoteStatus;
  important: boolean;
  draft: boolean;
  createdAt: string;
  updatedAt: string;
}
