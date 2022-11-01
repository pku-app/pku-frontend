import axios from "axios";
import { REACT_APP_BASE_URL } from '@env'

// You need to create .env file with the variable REACT_APP_BASE_URL. ex:"REACT_APP_BASE_URL=http://localhost:3000"
const api = axios.create({
  baseURL: REACT_APP_BASE_URL
});

export default api;