import { apiUrl } from "../config.json";
import http from "../services/httpService";

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
    return http.post(apiEndpoint, {
        email: email,
        password: password
    });
}
