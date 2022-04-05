const noteDataReducer = (noteData, { type, payload }) => {
  switch (type) {
    case "SET_TITLE":
      return { ...noteData, title: payload };
    case "SET_CONTENT":
      return { ...noteData, content: payload };
    case "RESET":
      return {
        title: "",
        content: "",
        createdOn: "",
      };
    default:
      return noteData;
  }
};
export { noteDataReducer };
