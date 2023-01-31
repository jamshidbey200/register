import { request } from "./axios";

export const getAll = (slug) => request.get(`${slug}`);
export const getById = (slug, id) => request.get(`${slug + "/" + id}`);
export const deleteItem = (id) => request.get(`/${id}`);
