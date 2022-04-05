const NotesInitialState = {
  isSidebarOpen: true,
  notes: [],
};

const NotesReducer = (notesState, { type, payload }) => {
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
    default:
      throw new Error("Unhandled action type");
  }
};
export { NotesInitialState, NotesReducer };
