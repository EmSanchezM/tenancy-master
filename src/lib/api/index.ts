import axios from "axios";

const BASEURL = "http://localhost:3000/";

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiPrivate = (cookie: string | undefined) => axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${cookie}`
  },
});

