import axios from "axios";
const addNoteService = async (note, token) => {
  try {
    const {
      data: { notes },
    } = await axios.post("/api/notes", note, {
      headers: { authorization: token },
    });
    return notes;
  } catch (e) {
    console.log(e);
  }
};
export { addNoteService };
