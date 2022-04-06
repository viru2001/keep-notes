const noteDataReducer = (noteData, { type, payload }) => {
  switch (type) {
    case "SET_TITLE":
      return { ...noteData, title: payload };
    case "SET_CONTENT":
      return { ...noteData, content: payload };
    case "SET_COLOR":
      return { ...noteData, bgColor: payload };
    case "RESET":
      return {
        title: "",
        content: "",
        createdAt: "",
        bgColor: "",
      };
    default:
      throw new Error("Unhandled action type");
  }
};
export { noteDataReducer };
