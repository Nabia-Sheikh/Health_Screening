import axios from "axios"
import { BASE_URL } from "./constants"

export default function createRequest() {
  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
  if (localStorage.getItem("token")) {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  }
  return axios.create({
    baseURL: BASE_URL,
    headers,
  })
}

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
})
