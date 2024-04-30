import axios from "axios"

// test api from RapidApi
const apiEndpoint =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes"
const apiKey = "d74bdb069dmsh4d65a78ff863047p1ae540jsneaff7768445b"
const apiHost = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"

export const chuckNorrisApi = axios.create({
  baseURL: apiEndpoint,
  headers: {
    accept: "application/json",
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": apiHost,
  },
})
