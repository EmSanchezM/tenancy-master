import axios from "axios";

const BASEURL = "http://localhost:3000/";

export const api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiPrivate = (
  cookie?: string,
  contentType: string = "application/json"
) =>
  axios.create({
    baseURL: BASEURL,
    headers: {
      "Content-Type": contentType,
      Accept: "application/json",
      Authorization: `Bearer ${cookie}`,
    },
  });
