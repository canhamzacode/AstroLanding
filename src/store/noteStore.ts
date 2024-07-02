import { atom } from 'nanostores';

export const notes = atom([]);

export const addNote = (note: any) => {
  notes.set([...notes.get(), note]);
};
