import axios from "axios";
const unarchiveNoteService = async (id, token) => {
  try {
    await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export { unarchiveNoteService };
