import React from "react";
import { Quill } from "react-quill";

// undo button
const UndoButtonIcon = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// redo button
const RedoButtonIcon = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? true : false;
}

class Video extends Quill.imports["formats/video"] {
  static create(value) {
    if (youtube_parser(value)) {
      let node = super.create(value);
      node.setAttribute("frameborder", "0");
      node.setAttribute("allowfullscreen", true);
      node.setAttribute("src", this.sanitize(value));
      return node;
    } else {
      let node = document.createElement("span");
      return node;
    }
  }
}

Quill.register({
  "formats/video": Video,
});
// Modules object for setting up the Quill editor
const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
      link: function (value) {
        if (value) {
          let range = this.quill.getSelection();
          if (range == null || range.length === 0) {
            return;
          }
          let preview = this.quill.getText(range);
          if (
            /^\S+@\S+\.\S+$/.test(preview) &&
            preview.indexOf("mailto:") !== 0
          ) {
            preview = "mailto:" + preview;
          }
          let tooltip = this.quill.theme.tooltip;
          tooltip.edit("link", "http://");
        } else {
          this.quill.format("link", false);
        }
      },
    },
  },
  syntax: true,
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};

// Formats objects for setting up the Quill editor
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "direction",
  "formula",
  "image",
  "video",
  "color",
  "code-block",
  "code",
];

// Quill Toolbar component
const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="sans-serif">
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="monospace">Monospace</option>
      </select>
      <select className="ql-size" defaultValue="normal">
        <option value="small">Small</option>
        <option value="normal">Normal</option>
        <option value="large">Large</option>
        <option value="huge">Huge</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal Text</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" value="rtl" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      {/* <button className="ql-code" /> */}
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <UndoButtonIcon />
      </button>
      <button className="ql-redo">
        <RedoButtonIcon />
      </button>
    </span>
  </div>
);

export { QuillToolbar, formats, modules };
