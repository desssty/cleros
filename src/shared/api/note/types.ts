export type NoteStatusDto = "not-started" | "in-progress" | "done";

export interface NoteDto {
  id: string;
  title: string;
  filePath: string;
  shelves: string[];
  status: NoteStatusDto;
  important: boolean;
  draft: boolean;
  createdAt: string;
  updatedAt: string;
}
