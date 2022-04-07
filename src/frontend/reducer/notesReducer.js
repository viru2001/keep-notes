const NotesInitialState = {
  isSidebarOpen: true,
  notes: [],
  archives: [],
  trash: [],
  isModalOpen: false,
  noteBeingEdited: {},
  sortByTime: "",
  isMobileSidebarOpen: false,
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
    case "ADD_TO_TRASH":
      return {
        ...notesState,
        trash: [...notesState.trash, payload],
        notes: notesState.notes.filter(note => note._id !== payload._id),
      };
    case "RESTORE_FROM_TRASH":
      return {
        ...notesState,
        trash: notesState.trash.filter(note => note._id !== payload._id),
      };
    case "DELETE_FROM_TRASH":
      return {
        ...notesState,
        trash: notesState.trash.filter(note => note._id !== payload),
      };
    case "MODAL_TOGGLE":
      return {
        ...notesState,
        isModalOpen: !notesState.isModalOpen,
      };
    case "SET_NOTE_TO_EDIT":
      return {
        ...notesState,
        noteBeingEdited: notesState.notes.find(note => note._id === payload),
      };
    case "SET_EDITED_NOTE":
      return {
        ...notesState,
        noteBeingEdited: {
          ...notesState.noteBeingEdited,
          [payload.toEdit]: payload.value,
        },
      };
    case "UPDATE_NOTE":
      return {
        ...notesState,
        noteBeingEdited: {},
        notes: notesState.notes.map(note =>
          note._id === payload._id ? payload : note
        ),
      };
    case "SORT_BY_TIME":
      return {
        ...notesState,
        sortByTime:
          payload === "oldest-first"
            ? "OLDEST_FIRST"
            : payload === "newest-first"
            ? "NEWEST_FIRST"
            : "",
      };
    case "MOBILE_SIDEBAR_TOGGLE":
      return {
        ...notesState,
        isMobileSidebarOpen: !notesState.isMobileSidebarOpen,
      };
    default:
      throw new Error("Unhandled action type");
  }
};
export { NotesInitialState, notesReducer };
