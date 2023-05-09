import { useState } from 'react';
import Link from 'next/link';
import BringUsers from '../components/projects/utils/bring-users';
import UpdateProject from '../components/projects/utils/update-project';
import AssignProject from '../components/projects/utils/assign-roject';



export default function ProjectUpdate({ projectData }) {

  const [isOpen, setIsOpen] = useState(true);
  const [project, setProject] = useState(projectData);
  const [selectedOption, setSelectedOption] = useState([]); //id user
  const [users, setUsers] = useState([]);

  async function useData() {
    const data = await BringUsers();
    setUsers(data)
  }


  useData();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //------------------------ update project
    const proj = {
      nombre: project.nombre,
      descripcion: project.descripcion
    }
    //UpdateProject(proj)

    //------------------------ add partners

    const asign = {

      "fk_proyecto": 1,
      "fk_usuario": 2
    }


    const listaRenderizada = selectedOption.map((objeto) => {
      const objetoActualizado = {
        fk_proyecto: 1,
        fk_usuario: objeto.id,
      };
      return objetoActualizado;
    });
    // AssignProject(listaRenderizada)
  };

  const handleOptionClick = (option) => {
    setSelectedOption(prevState => [...prevState, option]);
    setIsOpen(true);
  };

  const handleDelete = (option) => {
    const index = selectedOption.findIndex(user => user.id === option.id);
    if (index !== -1) {
      const newSelectedOption = [...selectedOption];
      newSelectedOption.splice(index, 1);
      setSelectedOption(newSelectedOption);
    }
  }



  return (
    <div className="flex justify-center items-center h-screen bg-gray-600 pb-9 ">

      <Link className="px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl mb-9" href={`/components/projects/dashboard`}>
        Regresar al dashboard
      </Link>
      <form className="p-8 pt-4 bg-white rounded-lg shadow mx-4 w-[50%] h-[100%] " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-medium mb-4">Actualizar Proyecto</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Nombre del proyecto
          </label>
          <input
            type="text"
            id="name"
            name="nombre"
            value={project?.nombre}
            onChange={handleChange}
            className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium mb-2">
            Descripción
          </label>
          <textarea
            id="description"
            name="descripcion"
            value={project?.descripcion}
            onChange={handleChange}
            className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
          />
        </div>
        <div>Partners:</div>
        {/*  ---------------------- Partners ------------- */}
        <div className=' px-5 overflow-y-auto w-full h-[18%] border-2 border-gray-300 bg-gray-100 '>

          <ul className="dropdown__list">
            {selectedOption.length < 1 && <p className='text-2xl'> no partners </p>}
            {selectedOption?.map((option, index) => (

              <li
                className="dropdown__list-item ml-1 mt-1 py-1 border-b-2 border-gray-400 hover:bg-gray-200"
                key={index}
              >
                <div className='flex justify-between'>
                  <p >
                    {option?.username}</p>


                  <span onClick={() => handleDelete(option)} className='text-red-500 text-xl bg-black'>Del</span>

                </div>
              </li>
            ))}
          </ul>
        </div>
        {/*  ---------------------- Partners ------------- */}

        {/* //dropbox ini */}
        <div className='flex justify-center'>
          <button type="submit" className="block  mb-2 ml-2 bg-blue-500 text-white  py-2 rounded-lg mt-6 w-[50%]">
            ADD PARTNERS
          </button>
        </div>

        <div className=' bg-gray-200   shadow mx-auto  overflow-y-auto w-[90%] h-[16%] '>
          <div className="dropdown ">
            {isOpen && (
              <div className="dropdown__options">

                <ul className="dropdown__list   ">
                  {users?.map((option, index) => (

                    <li
                      className="dropdown__list-item ml-1 mt-1 py-1 border-b-2 border-gray-400 hover:bg-gray-300"
                      key={index}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.username}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* //dropbox fin */}
        <div className='flex justify-center'>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 mb-9 w-[50%]">
            ACTUALIZAR
          </button>
        </div >
      </form >


    </div >
  )
}

export async function getServerSideProps({ params }) {

  const { id } = params;
  const res = await fetch(`https://team6.onrender.com/api/Proyectos/${id}`);
  const projectData = await res.json();
  return {
    props: {
      projectData,
    },
  };
}