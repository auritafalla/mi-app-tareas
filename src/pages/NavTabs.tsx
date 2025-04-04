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
    <div className="w-full flex justify-center mb-6">
      <div className="relative flex bg-white/10 backdrop-blur-md p-1 rounded-full shadow-lg">
        {tabs.map((tab, index) => (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`relative z-10 px-6 py-2 font-medium text-sm rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "text-white"
                : "text-blue-200 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}

        <span
          className="absolute top-1 bottom-1 left-1 w-[calc(100%/2)] bg-blue-500 rounded-full z-0 transition-transform duration-500"
          style={{
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
      </div>
    </div>
  );
}
