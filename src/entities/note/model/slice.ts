import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note } from "./types";

export interface NoteState {
  items: Note[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NoteState = {
  items: [],
  isLoading: false,
  error: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNotes(state, action: PayloadAction<Note[]>) {
      state.items = action.payload;
    },
    addNote(state, action: PayloadAction<Note>) {
      state.items.push(action.payload);
    },
    removeNote(state, action: PayloadAction<string>) {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
    updateNote(state, action: PayloadAction<Note>) {
      const idx = state.items.findIndex((n) => n.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
  },
});

export const { setNotes, addNote, removeNote, updateNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
