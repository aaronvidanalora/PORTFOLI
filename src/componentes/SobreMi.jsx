import { Card, CardBody, CardFooter } from "@nextui-org/react";

export function SobreMi() {
  const list = [
    {
      title: "React",
      price: "Framework JavaScript para construir interfaces de usuario    ",
    },
    {
      title: "HTML",
      price: "Lenguaje de marcado para la estructura de una página web      ",
    },
    {
      title: "CSS",
      price: "Lenguaje para diseñar la presentación de una página web        ",
    },
    {
      title: "JavaScript",
      price: "Lenguaje de programación para la web                          ",
    },
    {
      title: "MySQL",
      price: "Sistema de gestión de bases de datos relacional               ",
    },
    {
      title: "PHP",
      price: "Lenguaje de programación del lado del servidor               ",
    },
    {
      title: "Supabase",
      price: "Plataforma de bases de datos y backend                        ",
    },
    {
      title: "Vite",
      price: "Servidor de desarrollo para aplicaciones web modernas        ",
    },
  ];

  return (
    <div id="sobremi" className="bg-customGray text-white">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center font-bold pt-8 mb-8">
        SOBRE MI
      </h1>
      <div className="flex flex-wrap">
        {/* Columna de texto y botón */}
        <div className="w-full md:w-1/2 px-4">
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Conóceme</h2>
            <p className="mb-4">
  Como <strong>Desarrollador Web Front-End</strong>, me especializo en la creación de experiencias de usuario impactantes y funcionales para páginas web y aplicaciones. Mi enfoque se basa en la construcción de interfaces intuitivas que no solo sean atractivas visualmente, sino que también mejoren la usabilidad y la interacción del usuario.
  <br />
  Si quieres conocer un poco más sobre mi trabajo puedes ver algunos en la sección de <strong>Proyectos</strong> y si tienes una oportunidad que se alinee con mi experiencia y pasión por el desarrollo web, ¡estaré encantado de discutirla contigo!
</p>

 
            <a href="#contacto"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contacto
            </button></a>
          
        
          </div>
        </div>
        {/* Columna de elementos de programación */}
        <div className="w-full md:w-1/2 px-4">
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Mis Conocimientos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {list.map((item, index) => (
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() => console.log("item pressed")}
                >
                  <CardBody className="overflow-visible p-0" />

                  <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
