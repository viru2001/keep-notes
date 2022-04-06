import axios from "axios";
const fetchArchiveNotesService = async token => {
  try {
    const { data: archives } = await axios.get("/api/archives", {
      headers: { authorization: token },
    });
    return archives;
  } catch (e) {
    console.log(e);
  }
};
export { fetchArchiveNotesService };
