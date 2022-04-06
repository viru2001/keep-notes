import axios from "axios";
const addToArchiveService = async (token, note) => {
  try {
    await axios.post(`/api/notes/archives/${note._id}`, note, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { addToArchiveService };
