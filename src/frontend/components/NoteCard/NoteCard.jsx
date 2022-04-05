import React from "react";
import "./NoteCard.css";
import parse from "html-react-parser";
const NoteCard = ({ noteData }) => {
  return <div className="ql-editor note-card m-4">{parse(`${noteData}`)}</div>;
};

export { NoteCard };
