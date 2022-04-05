import { QuillEditor } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./RichTextEditor.css";

const RichTextEditor = () => {
  const [toPin, setToPin] = useState(false);
  return (
    <div className="d-flex flex-col new-note-wrapper m-8 rounded-sm">
      <div className="d-flex justify-between align-center">
        <input
          type="text"
          className="note-heading w-100 p-3 text-md font-wt-bold mt-2"
          placeholder="Title"
        />
        <button
          className="btn btn-icon text-md m-4"
          onClick={() => setToPin(prev => !prev)}
        >
          <span
            class={toPin ? "material-icons" : "material-icons-outlined"}
          >
            push_pin
          </span>
        </button>
      </div>
      <QuillEditor />
    </div>
  );
};

export { RichTextEditor };
