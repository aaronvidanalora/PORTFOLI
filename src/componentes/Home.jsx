
export function Home() {
  return (
    <div id="home" className="relative">
      <img
        src="https://cdn-blog.superprof.com/blog_es/wp-content/uploads/2023/08/estudiar-programacion-en-espana.jpg"
        alt=""
        className="w-full h-svh object-cover opacity-40"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white  mx-auto">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl  font-bold mb-8">BIENVENIDO AL PORTFOLIO DE AARÓN VIDAÑA</h1>
          <p className="text-lg lg:text-xl mb-6">Aquí encontrarás los proyectos realizados con diferentes lenguajes y frameworks</p>
          <a href="#proyectos"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-lg lg:text-3xl">
            Proyectos
          </button></a>
        </div>
      </div>
    </div>
  );
}
