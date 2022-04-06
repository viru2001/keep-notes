import { addNoteService } from "frontend/services";

const restoreFromTrash = async (note, token, notesDispatch) => {
  const notes = await addNoteService(
    {
      note: note,
    },
    token
  );
  notesDispatch({
    type: "ADD_NOTE",
    payload: notes[notes.length - 1],
  });
  notesDispatch({ type: "RESTORE_FROM_TRASH", payload: note });
};
export { restoreFromTrash };
