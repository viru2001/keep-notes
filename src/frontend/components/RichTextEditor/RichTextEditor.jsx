import { QuillEditor } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
const RichTextEditor = () => {
  return (
    <div className="d-flex flex-col new-note-wrapper m-8 rounded-sm">
      <input
        type="text"
        className="note-heading w-100 p-3 text-md font-wt-bold mt-2"
        placeholder="Title"
      />
      <QuillEditor />
     
    </div>
  );
};

export { RichTextEditor };
