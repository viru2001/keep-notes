import { RichTextEditor, NotesList } from "frontend/components";
import { useAuth, useNotes } from "frontend/context";
import { useEffect } from "react";
import { fetchNotes, sortNotes } from "frontend/utils";
const Notes = () => {
  const {
    notesState: { notes, sortByTime },
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

  const sortedNotes = sortNotes(notes, sortByTime);
  return (
    <div className="d-flex align-center flex-col w-100">
      <RichTextEditor />
      <NotesList notes={sortedNotes} />
    </div>
  );
};
export { Notes };
