import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://donewithit13.herokuapp.com/api",
});

export default apiClient;
// baseURL: "https://donewithit13.herokuapp.com/api",
// baseURL: "http://192.168.0.14:9000/api",
