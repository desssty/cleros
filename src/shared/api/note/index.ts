import { httpClient } from "shared/api/http-client";
import type { NoteDto } from "./types";

const baseUrl = "/notes";

export async function fetchNotes(): Promise<NoteDto[]> {
  const data = await httpClient.get<NoteDto[]>(baseUrl);
  return data;
}

export async function fetchNoteById(id: string): Promise<NoteDto> {
  const data = await httpClient.get<NoteDto>(`${baseUrl}/${id}`);
  return data;
}

export async function createNote(note: NoteDto): Promise<NoteDto> {
  const data = await httpClient.post<NoteDto, NoteDto>(baseUrl, note);
  return data;
}

export async function updateNote(note: NoteDto): Promise<NoteDto> {
  const data = await httpClient.put<NoteDto, NoteDto>(
    `${baseUrl}/${note.id}`,
    note
  );
  return data;
}

export async function deleteNote(id: string): Promise<void> {
  await httpClient.delete<void>(`${baseUrl}/${id}`);
}
