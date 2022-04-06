import React, { useState } from "react";
import ReactQuill from "react-quill";
import { QuillToolbar, modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "./QuillEditor.css";
const QuillEditor = () => {
  const [note, setNote] = useState("");
  
  const handleChange = value => {
    setNote(value);
  };
  return (
    <>
      <div className="text-editor">
        <QuillToolbar />
        <ReactQuill
          theme="snow"
          value={note}
          onChange={handleChange}
          placeholder={"Enter Note Here ..."}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="d-flex justify-between align-center p-4">
        <div>
          <button className="btn btn-icon text-md">
            <span class="material-icons-outlined">palette</span>
          </button>
        </div>
        <button
          className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4 add-note-btn"
          onClick={() => setNote("")}
        >
          Add
        </button>
      </div>
    </>
  );
};

export { QuillEditor };
