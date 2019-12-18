/*import { apiUrl } from "../config.json";*/
import http from "../services/httpService";

const apiEndpoint = "/genres";

export function getGenres() {
    //return http.get(apiUrl + "/genres");
    return http.get(apiEndpoint);
}
