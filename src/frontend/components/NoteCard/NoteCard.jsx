import React from "react";
import "./NoteCard.css";
import parse from "html-react-parser";
const NoteCard = ({ note }) => {
  const { title, content, createdAt,bgColor } = note;
  return (
    <div className="ql-editor note-card m-4 rounded-md" style={{backgroundColor:bgColor}}>
      <h2>{title}</h2>
      {parse(`${content}`)}
      <div className="d-flex justify-between align-center pt-4">
        <div className="d-flex flex-col">
          <span>{ new Date(createdAt).toLocaleDateString("in-IN")}</span>
          <span>
            {new Date(createdAt)
              .toLocaleTimeString()
              .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
          </span>
        </div>
        <div className="d-flex card-footer-icons">
          <button className="btn btn-icon text-md">
            <span className="material-icons-outlined">palette</span>
          </button>
          <button className="btn btn-icon text-md">
            <span className="material-icons-outlined">edit</span>
          </button>
          <button className="btn btn-icon text-md">
            <span className="material-icons-outlined">archive</span>
          </button>
          <button className="btn btn-icon text-md">
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
