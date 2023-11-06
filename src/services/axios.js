import axios from "axios";
import { BASE_URL } from "../utils/requests";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});