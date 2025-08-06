import type { NoteDto } from "shared/api/note/types";
import type { Note } from "./types";

export function mapNoteFromDto(dto: NoteDto): Note {
  return {
    ...dto,
  };
}

export function mapNoteToDto(note: Note): NoteDto {
  return {
    ...note,
  };
}
