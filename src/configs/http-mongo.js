import axios from "axios";
export const http_mongo = axios.create({
  baseURL: `https://api.heartlinkdating.com/`,
  headers: {
    "Content-Type": "application/json",
    "Content-Transfer-Encoding": "bachaxPPsb9SCaz7TVJsda7cCD5sshsoft",
    Authorization: `Bearer ${localStorage.getItem("tokenIdV2")}`,
  },
  withCredentials: false,
});
