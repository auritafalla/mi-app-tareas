import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

function AddTask() {
    const [title, setTitle] = useState("");
    const { addTask } = useTaskContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title);
            setTitle(""); // Limpiar input después de agregar
        } else {
            window.alert("El campo está vacío");
        }
    };

    return (
        <div className="flex flex-col items-center py-10">
            <form 
                onSubmit={handleSubmit} 
                className="bg-transparent/10 backdrop-blur-lg p-10 rounded-2xl shadow-x2 max-w-md w-full">
                <h2 className="text-xl font-bold text-white-300 mb-5 text-center">
                    Agregar Nueva Tarea
                </h2>
                <input
                    type="text"
                    placeholder="Escribe tu tarea..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-black-400 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-black-500"
                />
                <button
                    type="submit"
                    className="mt-4 w-full bg-emerald-700 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
                >
                    Agregar
                </button>
            </form>
            <Link
                to="/"
                className="mt-4 bg-sky-700 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg  transform transition-transform duration-300 hover:scale-105"
            >
                Volver
            </Link>
        </div>
    );
}

export default AddTask;
