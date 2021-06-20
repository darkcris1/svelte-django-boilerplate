import axios from "axios";
import { getToken } from "./auth.service";

axios.interceptors.request.use(config=>{
    config.headers["Authorization"] = `Token ${getToken()}`
    return config;
})

const http = axios;

export default http;
