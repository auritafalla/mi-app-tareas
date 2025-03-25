import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { useTaskContext } from "./context/TaskContext"; // Importa el contexto

function App() {
  const { tasks } = useTaskContext(); //Obtiene las tareas
  const location = useLocation(); 

    return (
        <div>
          <header>
                <h1>Lista de Tareas</h1>
                <p>Total de tareas: {tasks.length}</p> {/* Muestra el contador */}
            </header>
            <nav>
                <Link to="/">Inicio</Link>
                <br></br>
                {location.pathname !== "/add" && <Link to="/add">Agregar Tarea</Link>}
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddTask />} />
            </Routes>
        </div>
    );
}

export default App;
