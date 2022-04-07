import React from "react";
import ReactQuill from "react-quill";
import { modules, formats } from "./ToolbarSetup";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "./QuillEditor.css";
import { useNotes } from "frontend/context";
const QuillEditor = ({ content, noteDataDispatch }) => {
  const {
    notesState: { isModalOpen },
    notesDispatch,
  } = useNotes();
  const handleChange = value => {
    isModalOpen
      ? notesDispatch({
          type: "SET_EDITED_NOTE",
          payload: { toEdit: "content", value: value },
        })
      : noteDataDispatch({ type: "SET_CONTENT", payload: value });
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
