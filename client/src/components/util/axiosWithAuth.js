import axios from 'axios';
const URL = process.env.api || 'http://localhost:8080'
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
};
