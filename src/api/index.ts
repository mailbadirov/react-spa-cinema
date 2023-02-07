import axios from "axios";

import { API_URL } from "app/constants";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
