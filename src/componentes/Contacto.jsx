/* eslint-disable react/no-unescaped-entities */
export function Contacto() {
    return (
        <div id="contacto" className="bg-customGray text-white pt-12 pb-6">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-8 mb-8">
                CONTACTO
            </h1>
            <div className="max-w-md mx-auto sm:max-w-lg">
                <form className="space-y-6 p-6 sm:p-8">
                    <div>
                        <label htmlFor="name" className="block text-xl sm:text-2xl font-semibold mb-1">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full sm:p-6 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Ingresa tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block sm:text-2xl text-xl font-semibold mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full sm:p-6 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Ingresa tu correo electrónico"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block sm:text-2xl text-xl font-semibold mb-1 ">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-4 sm:p-8 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Ingresa tu mensaje"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:p-4 rounded"
                        >
                            ENVIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
