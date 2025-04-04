import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import { useTaskContext } from "./context/TaskContext";
import NavTabs from "./components/NavTabs"; // Corrección de import

function App() {
  const { tasks } = useTaskContext();
  const location = useLocation();
  const isAddPage = location.pathname === "/add";

  return (
    <div className="relative min-h-screen bg-[url('./img/3.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed text-white">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center flex-1 w-full">
        {/* Header */}
        <header className="text-center p-4 rounded-2xl max-w-3xl">
          <h1 className="text-3xl font-bold text-white mb-2 py-4">Lista de Tareas</h1>
          <p className="text-lg text-white">Total de tareas: {tasks.length}</p>
        </header>

        
        <NavTabs />
        {/* Página principal */}
        {!isAddPage && (
          <main className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        )}

        {/* Página de Agregar Tarea */}
        {isAddPage && (
          <div className="flex justify-center w-full">
            <Routes>
              <Route path="/add" element={<AddTask />} />
            </Routes>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
