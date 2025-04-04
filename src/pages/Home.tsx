import { useTaskContext } from "../context/TaskContext"; //  el contexto

function Home() {  
    const { tasks, deleteTask } = useTaskContext(); // tareas y la función para eliminarlas

    return (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-emerald-300 shadow-xl rounded-xl overflow-hidden">
            <thead className="bg-emerald-800 text-white">
              <tr>
                <th className="border border-emerald-300 px-4 py-3 text-left">Tarea</th>
                <th className="border border-emerald-300 px-4 py-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white/10 backdrop-blur text-transparent-100">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-emerald-900/30 transition">
                  <td className="border border-transparent-100 px-4 py-2">{task.title}</td>
                  <td className="border border-transparent-100 px-4 py-2">
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-sky-700 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded-xl transition"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default Home;




/*
    return (
        <div  className="overflow-x-auto">
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

export default Home;*/
