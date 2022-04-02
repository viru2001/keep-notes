import { createContext, useContext, useReducer } from "react";
import { NotesInitialState, NotesReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(
    NotesReducer,
    NotesInitialState
  );
  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
