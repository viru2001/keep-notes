const deleteFromTrash = (id, notesDispatch) => {
  notesDispatch({ type: "DELETE_FROM_TRASH", payload: id });
};
export { deleteFromTrash };
