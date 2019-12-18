/*import { apiUrl } from "../config.json";*/
import http from "../services/httpService";

const apiEndpoint = "/users";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username,
        password: user.password,
        name: user.name
    });
}
