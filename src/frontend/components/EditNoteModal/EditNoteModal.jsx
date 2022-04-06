
import { RichTextEditorModal } from "frontend/components";
import "./EditNoteModal.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "../RichTextEditor/RichTextEditor.css";

const EditNoteModal = () => {
  
  return (
    <div
      className="modal-wrapper w-100 h-100 justify-center align-center container-center p-fixed"
      id="simple-modal-wrapper"
    >
      <div className="modal-container rounded-md">
        <div className="p-8">
          <RichTextEditorModal />
        </div>
      </div>
    </div>
  );
};
export { EditNoteModal };
