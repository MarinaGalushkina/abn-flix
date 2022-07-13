import axios from "axios";
axios.defaults.baseURL = "https://api.tvmaze.com";

async function getTVShows() {
  try {
    const { data } = await axios.get(`/shows`);
    return { tvShows: data };
  } catch(error) {
    return { error }
  }
}

async function getTVShowByID(id) {
  try{
    const { data } = await axios.get(`/shows/${id}`);
    return { tvShow: data };
  } catch(error) {
    return { error }
  }
}

export default {
  getTVShows,
  getTVShowByID
}