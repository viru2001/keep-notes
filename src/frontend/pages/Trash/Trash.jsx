import { NotesList } from "frontend/components";
import { useNotes } from "frontend/context";
const Trash = () => {
  const {
    notesState: { trash },
  } = useNotes();
  return (
    <div className="d-flex align-center flex-col w-100">
      <NotesList notes={trash} />
    </div>
  );
};
export { Trash };
