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

export const updateItemStatus = (id, status) => (
    instance.put("/updateItemStatus/" + id + "/" + status)
)

export const deleteInstrument = (id) => (
    instance.put("/deleteItem/" + id)
)

export const updateInstrument = (obj) => (
    instance.put("/updateItem", obj)
)
