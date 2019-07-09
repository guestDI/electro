import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8890/api/v1/users"
});

export const login = (obj) => (
    instance.post("/login", obj)
)