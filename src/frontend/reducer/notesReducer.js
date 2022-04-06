const NotesInitialState = {
  isSidebarOpen: true,
  notes: [],
  archives: [],
};

const notesReducer = (notesState, { type, payload }) => {
  switch (type) {
    case "SIDEBAR_TOGGLE":
      return {
        ...notesState,
        isSidebarOpen: !notesState.isSidebarOpen,
      };
    case "FETCH_NOTES":
      return {
        ...notesState,
        notes: payload,
      };
    case "ADD_NOTE":
      return {
        ...notesState,
        notes: [...notesState.notes, payload],
      };
    case "FETCH_ARCHIVE_NOTES":
      return {
        ...notesState,
        archives: payload,
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...notesState,
        notes: notesState.notes.filter(note => note._id !== payload._id),
        archives: [...notesState.archives, payload],
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...notesState,
        archives: notesState.archives.filter(note => note._id !== payload),
      };
    case "UNARCHIVE":
      return {
        ...notesState,
        archives: notesState.archives.filter(note => note._id !== payload._id),
        notes: [...notesState.notes, payload],
      };
    default:
      throw new Error("Unhandled action type");
  }
};
export { NotesInitialState, notesReducer };
