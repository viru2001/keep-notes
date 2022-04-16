import { updateNoteService } from "frontend/services";

const updateNote = async (token, note, notesDispatch) => {
  console.log(note);
  await updateNoteService(token, note);
  notesDispatch({ type: "UPDATE_NOTE", payload: note });
};
export { updateNote };
