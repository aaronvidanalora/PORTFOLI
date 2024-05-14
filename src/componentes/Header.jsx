import { User } from "@nextui-org/react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-customGray p-5 flex items-center justify-between">
      {/* Avatar y Nombre */}
      <div className="text-white">
        <User
          name="Aarón Vidaña"
          description="Desarrollador Web"
          avatarProps={{
            src: "/fotoDni.png"
          }}
          className="space-y-2 text-xl" // Clases de Tailwind para espacio y tamaño de fuente
        />
      </div>

      {/* Menú Desplegable */}
      <div className="md:hidden relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={
                showMenu
                  ? "M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
                  : "M4 6h16v2H4V6zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } bg-gray-800 py-2 mt-2 rounded-md`}
        >
          <a
            href="#home"
            className="block px-4 py-2  text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#sobremi"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Sobre mí
          </a>
          <a
            href="#proyectos"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Menú */}
      <div className="hidden md:flex">
        <a href="#home" className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded">
          Home
        </a>
        <a href="#sobremi" className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded">
          Sobre mí
        </a>
        <a href="#proyectos" className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded">
          Proyectos
        </a>
        <a href="#contacto" className="text-white text-xl hover:bg-gray-700 px-3 py-2 rounded">
          Contacto
        </a>
      </div>
    </div>
  );
}
