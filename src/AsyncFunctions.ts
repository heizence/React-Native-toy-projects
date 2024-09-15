import AsyncStorage from '@react-native-async-storage/async-storage';
import {Note} from './Types';

const NOTES_STORAGE_KEY = '@notes_storage_key'; // Key for AsyncStorage

// Helper to fetch all notes from AsyncStorage
const fetchNotes = async () => {
  try {
    const notes = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (error) {
    console.error('Error fetching notes:', error);
    return [];
  }
};

// 1. Create (Add a New Note)
export const createNote = async (newNote: Note) => {
  console.log('[async]createNote');
  try {
    const notes = await fetchNotes();
    const updatedNotes = [...notes, newNote];
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
  } catch (error) {
    console.error('Error creating note:', error);
  }
};

// 2. Read (Fetch All Notes)
export const getAllNotes = async () => {
  try {
    return await fetchNotes();
  } catch (error) {
    console.error('Error getting all notes:', error);
    return [];
  }
};

// 3. Update (Edit a Note by ID)
export const updateNote = async (updatedNote: Note) => {
  console.log('[async]updateNote');
  try {
    const notes = await fetchNotes();
    const updatedNotes = notes.map((note: Note) => {
      if (note.id === updatedNote.id) {
        return {
          ...note,
          title: updatedNote.title,
          contents: updatedNote.contents,
        };
      }
      return note;
    });
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
  } catch (error) {
    console.error('Error updating note:', error);
  }
};

// 4. Delete (Remove a Note by ID)
export const deleteNote = async (id: string) => {
  try {
    const notes = await fetchNotes();
    const updatedNotes = notes.filter((note: Note) => note.id !== id);
    await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};
