import axios from "axios";
//URL base de la API que esta consumiendo.
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//funcion para obtener
export const getTasks = async () => {
    const response = await axios.get(`${API_URL}?_limit=10`);
    return response.data;
};
//funcion para agregar la tarea
export const addTask = async (title: string) => {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
};
//funcion de eliminar la tarea
export const deleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
