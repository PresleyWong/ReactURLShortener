import axios from "axios";
const KEY = "123456";

export default axios.create({
  baseURL: "https://api.rebrandly.com/v1/",
  headers: { apikey: KEY }
});
