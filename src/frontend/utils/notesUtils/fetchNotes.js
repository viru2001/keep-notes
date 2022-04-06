import { fetchNotesService } from "frontend/services";
const fetchNotes = async token => {
  const notes = await fetchNotesService(token);
  return notes;
};

export { fetchNotes };
