/* eslint-disable react/no-unescaped-entities */
export function Proyecto() {
    return (
        <div className="mt-2 mb-5 text-center">
            <div className="sm:columns-2 mt-12 sm:ml-12 p-6">
                <img className="" src="/tetris.png" alt="" />
                <div className="pt-6 sm:pl-12 sm:w-2/3 mx-auto sm:mx-0">
                    <h1 className="mt-16 font-bold text-3xl  sm:text-left">Tetris</h1>
                    <p className="text-white mt-6  sm:text-left">
                        Este es el juego del tetris recreado con puro JavaScript Vanilla, teniendo una funcionalidad completa como los giros de piezas, sistema de niveles, temporizador y clasificación de partidas.
                    </p>
                    <div className=" sm:text-left mt-6">
                        <a href="https://proyecto-tetris-4hse.onrender.com/" target="_blank ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-12 rounded">
                            VER PROYECTO
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sm:columns-2 mt-12 sm:ml-12 p-6">
                <img className=""  src="/incidencias.png" alt="" />
                <div className="pt-6 sm:pl-12 sm:w-2/3 mx-auto sm:mx-0">
                    <h1 className="mt-16 font-bold text-3xl  sm:text-left">Gestión de Incidencias</h1>
                    <p className="text-white mt-6  sm:text-left">
                       Es una web hecha con Vanilla Javascript que permite registrar en un sistema de tickets las incidencias o averias de los equipos de una escuela.
                    </p>
                    <div className=" sm:text-left mt-6">
                        <a href="https://proyecto-tickets-2yux.onrender.com/" target="_blank ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-12 rounded">
                                VER PROYECTO
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="sm:columns-2 mt-12 sm:ml-12 p-6">
                <img className="" src="/sred.png" alt="" />
                <div className="pt-6 sm:pl-12 sm:w-2/3 mx-auto sm:mx-0">
                    <h1 className="mt-16 font-bold text-3xl  sm:text-left">SRED</h1>
                    <p className="text-white mt-6  sm:text-left">
                        Este es un proyecto hecho con React donde los usuarios pueden reservar recintos deportivos en pocos pasos. Existen roles para registrados, propietarios y administradores. Además cuenta con la bd de Supabase
                    </p>
                    <div className=" sm:text-left mt-6">
                        <a href="https://sred-pi.vercel.app/" target="_blank ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-4 px-12 rounded">
                            VER PROYECTO
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
