import { fetchArchiveNotesService } from "frontend/services";
const fetchArchiveNotes = async token => {
  const notes = await fetchArchiveNotesService(token);
  return notes.archives;
};

export { fetchArchiveNotes };
