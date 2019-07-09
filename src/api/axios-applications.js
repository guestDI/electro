import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8890/api/v1/applications"
});

export const saveApplication = (application) => (
    instance.put("/addApplication", application)
)

export const getAllApplications = () => (
    instance.get("/getAllApplications")
)

export const updateApplicationStatus = (id, status) => (
    instance.put("/updateApplicationStatus/" + id + "/" + status)
)