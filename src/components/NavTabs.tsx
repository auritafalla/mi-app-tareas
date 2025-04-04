import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const tabs = [
  { label: "Inicio", path: "/" },
  { label: "Agregar Tarea", path: "/add" },
];

export default function NavTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const current = tabs.findIndex((tab) => tab.path === location.pathname);
    setActiveIndex(current !== -1 ? current : 0);
  }, [location.pathname]);

  return (
    <div className="w-full flex justify-center mb-8">
      <div className="relative flex bg-white/10 backdrop-blur-md p-1 rounded-full shadow-lg w-fit overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`relative z-8 flex-1.5 px-10 py-2 font-medium text-sm rounded-full transition-colors duration-300 ${
              activeIndex === index ? "text-white" : "text-blue-200 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* Indicador de selección con ancho dinámico */}
        <span
          className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full z-0 transition-transform duration-500"
          style={{
            width: `${100 / tabs.length}%`, // Divide el ancho entre el número de tabs
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
