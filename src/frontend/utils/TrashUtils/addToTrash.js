import { deleteNoteService } from "frontend/services";

const addToTrash = async (note, token, notesDispatch) => {
  await deleteNoteService(note._id, token);
  notesDispatch({ type: "ADD_TO_TRASH", payload: note });
};
export { addToTrash };
