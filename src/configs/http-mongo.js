import axios from "axios";
export const http_mongo = axios.create({
  baseURL: `https://api.heartlinkdating.com`,
  headers: {
    "Content-Type": "application/json",
    "Content-Transfer-Encoding": "bachaxPPsb9SCaz7TVJsda7cCD5sshsoft",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false,
});

// https://api.heartlinkdating.com
// http://118.70.126.72:3002
