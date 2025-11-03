import axios from 'axios';

const API_URL = 'http://localhost:4000/tasks'; // adapte si ton backend est en ligne

export const getTasks = () => axios.get(API_URL);
export const createTask = (data) => axios.post(API_URL, data);
export const updateTask = (id, data) => axios.patch(`${API_URL}/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
