import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8890/api/v1/applications"
});

export const saveApplication = (application) => (
    instance.put("/addApplication", application)
)