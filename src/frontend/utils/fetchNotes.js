import axios from "axios";
const fetchNotes = async token => {
  try {
    const {
      data: { notes },
    } = await axios.get("/api/notes", {
      headers: { authorization: token },
    });
    return notes;
  } catch (e) {
    console.log(e);
  }
};

export { fetchNotes };
