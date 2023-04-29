import Link from 'next/link';
export default function ProjectUpdate( { projectData } ) {
console.log(projectData)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      <form className="p-8 bg-white rounded-lg shadow mx-4">
        <h2 className="text-2xl font-medium mb-4">Actualizar Proyecto</h2>
        <div className="mb-4">
          <label htmlFor="projectName" className="block font-medium mb-2">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"   
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"         
          />
        </div>
        {/* vista crear usuario-participante */}
        {/* LISTAR PARTICIPANTES y boton a;adir participantes -> vacio solo boton
              Esto me lleva a otra vista formulario para crearlo
              2 botones tiene participante,, agregar y eliminar
              >>>  ELIMINARLO -> DESVINCULAR DE FK-PROJECT ???
        !!!!!! */}

        {/* fetch  actualiza estado  */}

        <h2>
         {/*  TRAER LISTA US Y A:ADIR - FK PROYECT DEFAULT, - FK USUARIO{" "} */}
        </h2>

        <div className="flex items-center justify-center w-full mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
           ACTUALIZAR
          </button>
        </div>
      <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl ' href={`/components/projects/dashboard`}>Back to Dashboard</Link>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params }) {
    console.log(params);
  const { id } = params;
  const res = await fetch(`https://team6.onrender.com/api/Proyectos/${id}`);
  const projectData = await res.json();
  return {
    props: {
      projectData,
    },
  };
}