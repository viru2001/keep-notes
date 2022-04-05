import { QuillEditor } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
const RichTextEditor = () => {
  return (
    <div className="d-flex flex-col new-note-wrapper m-8">
      <input
        type="text"
        className="note-heading w-100 p-3 text-sm"
        placeholder="Title"
      />
      <QuillEditor />
     
    </div>
  );
};

export { RichTextEditor };
