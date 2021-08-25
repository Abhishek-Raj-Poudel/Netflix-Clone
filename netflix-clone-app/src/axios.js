import axios from "axios";

// base url to make requests to the movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
}); // eg instance.get('/foobar') = 'https://api.themoviedb.org/3/foobar'

export default instance;
