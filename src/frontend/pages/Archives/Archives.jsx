import { NotesList } from "frontend/components";
import { useAuth, useNotes } from "frontend/context";
import { useEffect } from "react";
import { fetchArchiveNotes } from "frontend/utils";
const Archives = () => {
  const {
    notesState: { archives },
    notesDispatch,
  } = useNotes();
  const {
    auth: { token },
  } = useAuth();
  useEffect(() => {
    (async () => {
      const archiveNotes = await fetchArchiveNotes(token);
      notesDispatch({ type: "FETCH_ARCHIVE_NOTES", payload: archiveNotes });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="d-flex align-center flex-col w-100">
      <NotesList notes={archives} />
    </div>
  );
};
export { Archives };
