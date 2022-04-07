import axios from "axios";
const deleteNoteService = async (id, token) => {
  try {
    await axios.delete(`/api/notes/${id}`, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { deleteNoteService };
