import React from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./ToolbarSetup";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "./QuillEditor.css";

const QuillEditor = ({ content, noteDataDispatch }) => {
  const handleChange = value => {
    noteDataDispatch({ type: "SET_CONTENT", payload: value });
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        placeholder={"Enter Note Here ..."}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export { QuillEditor };
