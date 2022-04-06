import axios from "axios";
const updateNoteService = async (token, note) => {
  try {
    await axios.post(
      `/api/notes/${note._id}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
export { updateNoteService };
