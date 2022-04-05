import { QuillEditor } from "frontend/components";
import "react-quill/dist/quill.snow.css";
import { useReducer } from "react";
import "./RichTextEditor.css";
import { noteDataReducer } from "frontend/reducer";

const RichTextEditor = () => {
  const [noteData, noteDataDispatch] = useReducer(noteDataReducer, {
    title: "",
    content: "",
    createdOn: "",
  });

  const { title, content } = noteData;
  console.log(title, content);
  return (
    <div className="d-flex flex-col new-note-wrapper m-8 rounded-sm">
      <div className="d-flex justify-between align-center">
        <input
          type="text"
          className="note-heading w-100 p-3 text-md font-wt-bold mt-2"
          placeholder="Title"
          value={title}
          onChange={e =>
            noteDataDispatch({ type: "SET_TITLE", payload: e.target.value })
          }
        />
      </div>
      <QuillEditor content={content} noteDataDispatch={noteDataDispatch} />
      <div className="d-flex justify-between align-center p-4">
        <div>
          <button className="btn btn-icon text-md">
            <span className="material-icons-outlined">palette</span>
          </button>
        </div>
        <button
          className="btn text-dec-none btn-primary rounded-sm text-sm p-4 mr-4 add-note-btn"
          onClick={() => {   
            noteDataDispatch({ type: "RESET" });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export { RichTextEditor };
