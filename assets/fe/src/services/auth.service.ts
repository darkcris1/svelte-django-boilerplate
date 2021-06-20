import { API_AUTHUSER, API_AUTH_LOGIN } from "../commons/constants/api.constant";
import { AUTH_KEY } from "../commons/constants/conf.constant";
import http from "./http.service";
import { writable } from "svelte/store"
import type { FetchUser } from "../commons/models/user.model";


export const user = writable({});

export function getToken(){
    return  window.localStorage[AUTH_KEY]
}

export function isAuthenticated(){
    return !!getToken()
}

export function rmtoken() {
    window.localStorage.removeItem(AUTH_KEY)
}

export function setToken(token: string){
     window.localStorage[AUTH_KEY] = token; 
}
export async function login(data = {}){
    return http.post<FetchUser>(API_AUTH_LOGIN, data).then(resp => {
        const { token, user: u } = resp.data;
        user.set(u);
        setToken(token)
        return resp;
    })
}

export function register(data = {}) {
    return http.post(API_AUTHUSER, data)
}