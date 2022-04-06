import { createContext, useContext, useReducer } from "react";
import { NotesInitialState, notesReducer } from "../reducer";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(
    notesReducer,
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
