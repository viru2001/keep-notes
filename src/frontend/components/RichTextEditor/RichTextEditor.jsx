import { QuillEditor, ColorPalette } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import { useReducer, useState } from "react";
import "./RichTextEditor.css";
import { noteDataReducer } from "frontend/reducer";
import { useNotes, useAuth } from "frontend/context";
import { addNoteHandler } from "frontend/utils/";
import { updateNote } from "frontend/utils";

const RichTextEditor = () => {
  const {
    auth: { token },
  } = useAuth();
  const [noteData, noteDataDispatch] = useReducer(noteDataReducer, {
    title: "",
    content: "",
    createdAt: "",
    bgColor: "",
  });
  const {
    notesState: { isModalOpen, noteBeingEdited },
    notesDispatch,
  } = useNotes();
  const { title, content, bgColor } = isModalOpen ? noteBeingEdited : noteData;
  const [showColorPalette, setShowColorPalette] = useState(false);
  return (
    <div
      className="d-flex flex-col new-note-wrapper m-8 rounded-sm"
      style={{ backgroundColor: bgColor}}
    >
      <div className="d-flex justify-between align-center">
        <input
          type="text"
          className="note-heading w-100 p-3 text-md font-wt-bold mt-2"
          style={{ backgroundColor: bgColor}}
          placeholder="Title"
          value={title}
          onChange={e =>
            isModalOpen
              ? notesDispatch({
                  type: "SET_EDITED_NOTE",
                  payload: { toEdit: "title", value: e.target.value },
                })
              : noteDataDispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
      </div>
      <QuillEditor content={content} noteDataDispatch={noteDataDispatch} />
      <div className="d-flex justify-between align-center p-4 p-relative">
        <div>
          <button
            className="btn btn-icon text-md"
            onClick={() => setShowColorPalette(prev => !prev)}
          >
            <span className="material-icons-outlined">palette</span>
          </button>
          {showColorPalette && (
            <ColorPalette color={bgColor} noteDataDispatch={noteDataDispatch} />
          )}
        </div>

        {isModalOpen ? (
          <div className="d-flex edit-modal-btns-wrapper">
            <button
              className="btn btn-outline btn-action btn-primary-outline rounded-sm text-sm p-3 ml-4"
              onClick={() => notesDispatch({ type: "MODAL_TOGGLE" })}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-action rounded-sm text-sm p-3"
              onClick={() => {
                notesDispatch({ type: "MODAL_TOGGLE" });
                updateNote(token, noteBeingEdited, notesDispatch);
              }}
            >
              Update
            </button>
          </div>
        ) : (
          <button
            className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4 add-note-btn"
            onClick={() => {
              addNoteHandler(token, noteData, notesDispatch, noteDataDispatch);
            }}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export { RichTextEditor };
