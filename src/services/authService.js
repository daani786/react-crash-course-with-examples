import { apiUrl } from "../config.json";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password) {
    const { data: jwt } = await http.post(apiEndpoint, {
        email: email,
        password: password
    });
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt
};
