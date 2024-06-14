import axios from "axios";

// if multiple thauma fetches are needed in the same component or page, consider creating a custom hook or simply a function

const fetchVans = async () => {
  try {
    const response = await axios.get("/api/api/vans/overview");
    if (response.data.status === "success") {
      return response.data.data.vans;
    }
  } catch (err) {
    throw new Error(err);
  }
};
export default fetchVans;
