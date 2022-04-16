// Modules object for setting up the Quill editor
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    ["bold", "italic", "underline", "strike"], // toggled buttons
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    // [({ header: 1 }, { header: 2 })], // custom button values
    ["blockquote", "code-block"],
    [{ direction: "rtl" }], // text direction
    [{ align: [] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    ["link", "image", "video"],
    ["formula"],
    ["clean"],
  ],
  syntax: true,
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

export { formats, modules };
