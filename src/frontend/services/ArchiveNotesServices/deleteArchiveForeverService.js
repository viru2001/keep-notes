import axios from "axios";
const deleteArchiveForeverService = async (id, token) => {
  try {
    await axios.delete(`/api/archives/delete/${id}`, {
      headers: { authorization: token },
    });
  } catch (e) {
    console.log(e);
  }
};
export { deleteArchiveForeverService };
