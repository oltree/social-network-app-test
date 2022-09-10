import { api } from "../../../api/config";

export const getUsers = () => api.get("/users");
