const NotesInitialState = {
  isSidebarOpen: true,
};

const NotesReducer = (notesState, { type, payload }) => {
  switch (type) {
    case "SIDEBAR_TOGGLE":
      return {
        ...notesState,
        isSidebarOpen: !notesState.isSidebarOpen,
      };
    default:
      throw new Error("Unhandled action type");
  }
};
export { NotesInitialState, NotesReducer };
