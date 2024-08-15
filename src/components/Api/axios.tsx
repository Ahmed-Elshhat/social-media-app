import axios from "axios";
import { BASE_URL } from "./Endpointes";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const token = cookie.get("e-commerce");

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});



