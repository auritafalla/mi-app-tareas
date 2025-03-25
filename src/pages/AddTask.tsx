import { useState } from "react";
import { useTaskContext } from "../context/TaskContext"; //  Importa el contexto
import { Link } from "react-router-dom";

function AddTask() {
    //`title` almacena el valor del input
    const [title, setTitle] = useState("");
    const { addTask } = useTaskContext(); //  Obtiene la función para agregar tarea

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Verificamos si el campo de texto no esta vacio
        if (title.trim()) {
            //añadir
            addTask(title);
            //limpiar
            setTitle("");
        }else{
            //alertita
            window.alert("El campo esta vacio")
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nueva tarea"
                    value={title} // El valor del campo es el estado `title
                    onChange={(e) => setTitle(e.target.value)} // Actualiza el estado `title` cuando el usuario escribe en el input
                />
                <button type="submit">Agregar</button>
            </form>
            <Link to="/">Volver</Link>
        </div>
    );
}

export default AddTask;
