import "./Notes.css";
import { RichTextEditor, NotesList } from "frontend/components";
import { notes } from "./dummyNotes.js";

const Notes = () => {
  return (
    <div className="d-flex align-center flex-col w-100">
      <RichTextEditor />
      <NotesList notes={notes} />
    </div>
  );
};
export { Notes };
