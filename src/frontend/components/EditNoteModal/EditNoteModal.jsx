import { useNotes } from "frontend/context";
import { RichTextEditorModal } from "frontend/components";
import "./EditNoteModal.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "../RichTextEditor/RichTextEditor.css";

const EditNoteModal = () => {
  const { notesDispatch } = useNotes();
  return (
    <div
      className="modal-wrapper w-100 h-100 justify-center align-center container-center p-fixed"
      id="simple-modal-wrapper"
    >
      <div className="modal-container rounded-md">
        <div className="p-8">
          <RichTextEditorModal />
          <div
            className="action-btns-wrapper mt-4 d-flex justify-end"
            id="simple-modal-buttons"
          >
            <button
              className="btn btn-outline btn-action btn-primary-outline rounded-sm text-sm p-3 ml-4"
              onClick={() => notesDispatch({ type: "MODAL_TOGGLE" })}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary btn-action rounded-sm text-sm p-3"
              onClick={() => notesDispatch({ type: "MODAL_TOGGLE" })}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { EditNoteModal };
