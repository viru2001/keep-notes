import { addNoteService } from "frontend/services";
import { getDateTime } from "./getDateTime";

const addNoteHandler = async (
  token,
  noteData,
  notesDispatch,
  noteDataDispatch
) => {
  const notes = await addNoteService(
    {
      note: {
        ...noteData,
        createdAt: getDateTime(),
      },
    },
    token
  );
  notesDispatch({
    type: "ADD_NOTE",
    payload: notes[notes.length - 1],
  });
  noteDataDispatch({ type: "RESET" });
};
export { addNoteHandler };
