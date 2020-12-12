import * as CookieServices from "./CookieService.js";

export function isLoggedIn() {
    return CookieServices.getCookie("credToken") === "credToken";
}

export function login() {
    CookieServices.setCookie("credToken", "credToken", 1);
}

export function logout() {
    CookieServices.setCookie("credToken", "", 1);
}