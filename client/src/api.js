import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/employees',
});

export const getEmployees = () => api.get('/');
export const getEmployee = (id) => api.get(`/${id}`);
export const createEmployee = (employee) => api.post('/', employee);
export const updateEmployee = (id, employee) => api.patch(`/${id}`, employee);
export const deleteEmployee = (id) => api.delete(`/${id}`);

export default api;
