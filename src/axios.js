import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  title: "cool",
});

console.log(axiosInstance.baseURL);

export default axiosInstance;
