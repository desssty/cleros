import type { NoteState } from "./slice";

export const selectNoteItems = (state: NoteState) => state.items;

export const selectImportantNotes = (state: NoteState) =>
  state.items.filter((note) => note.important);

export const selectNoteById = (state: NoteState, id: string) =>
  state.items.find((note) => note.id === id);
