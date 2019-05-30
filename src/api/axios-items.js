import axios from 'axios';

const instance = axios.create({
   baseURL: "http://localhost:8890/api/v1/items"
});

export const getAllItems = () => (
    instance.get("/getAllItems")
)

export const getItemsByCategory = (id) => (
    instance.get("/getItemsByCategory/" + id)
)
