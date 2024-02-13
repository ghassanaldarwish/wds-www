import axios from "axios";

export const commandsURL = () => {
  let url = `http://localhost/api/commands`;

  if (process.env.NODE_ENV === "production") {
    url = `https://webdrei.com/api/commands`;
  }

  return url;
};

const commandsApi = axios.create({
  baseURL: commandsURL(),
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default commandsApi;
