import axios from "axios";

export default axios.create({
  baseURL: "http://lyttagrt.cf/dns",
  responseType: "json"
});