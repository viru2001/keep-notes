import React from "react";
import ReactQuill from "react-quill";
import { QuillToolbar1, modalModules, formats } from "./EditorToolbarModal";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "./QuillEditorModal.css";
const QuillEditorModal = ({ content, noteDataDispatch }) => {
  const handleChange = value => {
    noteDataDispatch({
      type: "SET_EDITED_NOTE",
      payload: { toEdit: "content", value: value },
    });
  };

  return (
    <>
      <div className="text-editor">
        <QuillToolbar1 />
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          placeholder={"Enter Note Here ..."}
          modules={modalModules}
          formats={formats}
        />
      </div>
    </>
  );
};

export { QuillEditorModal };
