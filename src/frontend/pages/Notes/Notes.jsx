import "./Notes.css";
import { RichTextEditor, NotesList } from "frontend/components";
import { useAuth, useNotes } from "frontend/context";
import { useEffect } from "react";
import { fetchNotes } from "frontend/utils";
const Notes = () => {
  const {
    notesState: { notes },
    notesDispatch,
  } = useNotes();
  const {
    auth: { token },
  } = useAuth();
  useEffect(() => {
    (async () => {
      const notes = await fetchNotes(token);
      notesDispatch({ type: "FETCH_NOTES", payload: notes });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex align-center flex-col w-100">
      <RichTextEditor />
      <NotesList notes={notes} />
    </div>
  );
};
export { Notes };
