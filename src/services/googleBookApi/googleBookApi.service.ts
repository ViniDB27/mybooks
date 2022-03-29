import axios from "axios";

export const googleBookApi = axios.create({
    baseURL: "https://www.googleapis.com"
});
