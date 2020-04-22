import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-universe-d2366.firebaseio.com/",
});

export default instance;
