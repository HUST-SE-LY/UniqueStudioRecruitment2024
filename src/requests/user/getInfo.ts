import { http } from "../http";

export const getInfo = () => http.get("/user/me");