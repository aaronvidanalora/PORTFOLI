import { Proyecto } from "./Proyecto";

export function Proyectos() {
    return (
      <div id="proyectos" className="bg-customGray text-white pt-12 pb-5">
        <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-8 mb-8">
         PROYECTOS
        </h1>
        <div className="text-xl text-center mx-auto">
          <h3>Estos son algunos de mis proyectos hechos con los lenguajes y frameworks que anteriormente he mencionado</h3>
        </div>
        <Proyecto />
      </div>
    );
  }
  