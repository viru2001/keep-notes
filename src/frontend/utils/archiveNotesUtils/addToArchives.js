import { addToArchiveService } from "frontend/services";

const addToArchives = async (token, note, notesDispatch) => {
  await addToArchiveService(token, note);
  notesDispatch({ type: "ADD_TO_ARCHIVE", payload: note });
};
export { addToArchives };
