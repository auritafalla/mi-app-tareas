import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getTasks, addTask as addTaskApi, deleteTask as deleteTaskApi } from "../services/api"; // Importa las funciones de la API

// Definir el tipo de contexto
interface TaskContextType {
    tasks: { id: number; title: string; isLocal?: boolean }[];  // Tareas de la API y locales
    addTask: (title: string) => void;
    deleteTask: (id: number) => void;
}

// Crear el contexto
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Proveedor del contexto
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<{ id: number; title: string; isLocal?: boolean }[]>([]);

    // obtener las tareas de la API al inicio
    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks();
            setTasks(data); // Establecer las tareas de la API
        };
        fetchTasks();
    }, []);

    // Funcion para agregar tarea
    const addTask = async (title: string) => {
        // Crear tarea localmente y agregarla al estado
        const newTask = { id: Date.now(), title, isLocal: true }; //ID único (usando Date.now) para tareas locales
        setTasks((prevTasks) => [...prevTasks, newTask]);  // Añadir tarea local

        // API
        await addTaskApi(title);
    };

    // Funcion para eliminar tarea
    const deleteTask = async (id: number) => {
        // Buscar la tarea en el estado
        const taskToDelete = tasks.find((task) => task.id === id);
        
        if (taskToDelete) {
            // Si es tarea de la API (tiene un id que fue proporcionado por la API), eliminacion desde la API
            if (!taskToDelete.isLocal) {
                await deleteTaskApi(id);  // Llamar a la API para eliminar la tarea
            }

            // Eliminar la tarea del estado (tanto local como de la API)
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

// Hook para usar el contexto
export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTaskContext debe usarse dentro de un TaskProvider");
    }
    return context;
};
