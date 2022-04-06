import Masonry from "react-masonry-css";
import { NoteCard } from "frontend/components";
import { useNotes } from "frontend/context";
import "./NotesList.css";

const NotesList = ({ notes }) => {
  const {
    notesState: { isSidebarOpen },
  } = useNotes();
  const items = notes.map(note => {
    return <NoteCard note={note} key={note._id} />;
  });
  const breakpointColumnsObj = {
    default: isSidebarOpen ? 3 : 4,
    1100: isSidebarOpen ? 2 : 3,
    720: isSidebarOpen ? 1 : 2,
    500: 1,
  };
  return notes.length > 0 ? (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  ) : (
    <div>
      <h1>No Notes Added Here</h1>
    </div>
  );
};
export { NotesList };
