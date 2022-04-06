import React from "react";
import "./NoteCard.css";
import parse from "html-react-parser";
import {
  addToArchives,
  deleteArchiveForever,
  unarchiveNote,
  addToTrash,
  restoreFromTrash,
} from "frontend/utils";
import { useNotes, useAuth } from "frontend/context";
import { useLocation } from "react-router-dom";
const NoteCard = ({ note }) => {
  const {
    auth: { token },
  } = useAuth();
  const { notesDispatch } = useNotes();
  const { title, content, createdAt, bgColor } = note;
  const { pathname } = useLocation();
  return (
    <div
      className="ql-editor note-card m-4 rounded-md"
      style={{ backgroundColor: bgColor }}
    >
      <h2>{title}</h2>
      {parse(`${content}`)}
      <div className="d-flex justify-between align-center pt-4">
        <div className="d-flex flex-col">
          <span>{new Date(createdAt).toLocaleDateString("in-IN")}</span>
          <span>
            {new Date(createdAt)
              .toLocaleTimeString()
              .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
          </span>
        </div>
        <div className="d-flex card-footer-icons">
          {pathname === "/notes" && (
            <>
              <button className="btn btn-icon text-md">
                <span className="material-icons-outlined">palette</span>
              </button>
              <button className="btn btn-icon text-md">
                <span className="material-icons-outlined">edit</span>
              </button>
              <button
                className="btn btn-icon text-md"
                onClick={() => addToArchives(token, note, notesDispatch)}
              >
                <span className="material-icons-outlined">archive</span>
              </button>
              <button
                className="btn btn-icon text-md"
                onClick={() => addToTrash(note, token, notesDispatch)}
              >
                <span className="material-icons-outlined">delete</span>
              </button>
            </>
          )}
          {pathname === "/archives" ||
            (pathname === "/trash" && (
              <>
                {pathname === "/archives" && (
                  <button
                    className="btn btn-icon text-md"
                    onClick={() => unarchiveNote(note, token, notesDispatch)}
                  >
                    <span className="material-icons-outlined">unarchive</span>
                  </button>
                )}
                {pathname === "/trash" && (
                  <button
                    className="btn btn-icon text-md"
                    onClick={() => restoreFromTrash(note, token, notesDispatch)}
                  >
                    <span className="material-icons-outlined">
                      restore_from_trash
                    </span>
                  </button>
                )}
                <button
                  className="btn btn-icon text-md"
                  onClick={() =>
                    deleteArchiveForever(note._id, token, notesDispatch)
                  }
                >
                  <span className="material-icons-outlined">
                    delete_forever
                  </span>
                </button>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
