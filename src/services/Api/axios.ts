import axios from "axios";

const getAPIClient = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: `Bearer ${JSON.parse(
        localStorage.getItem("token") as string,
      )}`,
    },
  });

  api.defaults.validateStatus = () => {
    return true;
  };

  return api;
};

export default getAPIClient;
