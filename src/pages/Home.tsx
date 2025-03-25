import { useTaskContext } from "../context/TaskContext"; //  el contexto

function Home() {  
    const { tasks, deleteTask } = useTaskContext(); // tareas y la función para eliminarlas

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <ul>
                {tasks.length === 0 ? (
                    <p>No hay tareas disponibles</p>
                ) : (
                    tasks.map((task) => (
                        <li key={task.id}>
                            {task.title}
                            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default Home;
