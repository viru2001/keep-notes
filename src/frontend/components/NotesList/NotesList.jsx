import { NoteCard } from "frontend/components";

const NotesList = ({ notes }) => {
  return (
    <div className="d-flex flex-wrap m-6">
      {notes.map(note => (
        <NoteCard noteData={note} />
      ))}
    </div>
  );
};
export { NotesList };
