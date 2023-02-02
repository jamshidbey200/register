import { request } from "./axios";

// Get Branches
export const getAll = (slug) => request.get(`${slug}`);
export const getById = (slug, id) => request.get(`${slug + "/" + id}`);
export const deleteItem = (slug, id) => request.delete(`${slug}/${id}`);
export const createItem = (slug, data) => request.post(`${slug}`, { ...data });
export const updateItem = (slug, id, data) => request.put(`${slug}/${id}`, { ...data });

// Get Products
export const getAllProducts = (slug) => request.get(`${slug}`);
