import { deleteArchiveForeverService } from "frontend/services/ArchiveNotesServices/deleteArchiveForeverService";

const deleteArchiveForever = async (id, token, notesDispatch) => {
  await deleteArchiveForeverService(id, token);
  notesDispatch({ type: "DELETE_FROM_ARCHIVE", payload: id });
};
export { deleteArchiveForever };
