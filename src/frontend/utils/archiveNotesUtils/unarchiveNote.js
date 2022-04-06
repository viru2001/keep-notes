import { unarchiveNoteService } from "frontend/services";

const unarchiveNote = async (note, token, notesDispatch) => {
  await unarchiveNoteService(note._id, token);
  notesDispatch({ type: "UNARCHIVE", payload: note });
};
export { unarchiveNote };
