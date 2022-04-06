import { QuillEditorModal, ColorPalette } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./RichTextEditorModal.css";
import { useAuth, useNotes } from "frontend/context";
import { updateNote } from "frontend/utils";

const RichTextEditorModal = () => {
  const {
    auth: { token },
  } = useAuth();
  const {
    notesState: { noteBeingEdited },
    notesDispatch,
  } = useNotes();
  const { title, content, bgColor } = noteBeingEdited;
  const [showColorPalette, setShowColorPalette] = useState(false);
  return (
    <div
      className="d-flex flex-col new-note-wrapper m-8 rounded-sm"
      style={{ backgroundColor: bgColor }}
    >
      <div className="d-flex justify-between align-center">
        <input
          type="text"
          className="note-heading w-100 p-3 text-md font-wt-bold mt-2"
          style={{ backgroundColor: bgColor }}
          placeholder="Title"
          value={title}
          onChange={e =>
            notesDispatch({
              type: "SET_EDITED_NOTE",
              payload: { toEdit: "title", value: e.target.value },
            })
          }
        />
      </div>
      <QuillEditorModal content={content} noteDataDispatch={notesDispatch} />
      <div className="d-flex justify-between align-center p-4 p-relative">
        <div>
          <button
            className="btn btn-icon text-md"
            onClick={() => setShowColorPalette(prev => !prev)}
          >
            <span className="material-icons-outlined">palette</span>
          </button>
          {showColorPalette && <ColorPalette color={bgColor} />}
        </div>
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
      </div>
    </div>
  );
};

export { RichTextEditorModal };
