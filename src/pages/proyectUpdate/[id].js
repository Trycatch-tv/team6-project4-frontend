import { useEffect, useState } from 'react';
import Link from 'next/link';
import BringUsers from '../components/projects/utils/bring-users';
import UpdateProject from '../components/projects/utils/update-project';
import AssignProject from '../components/projects/utils/assign-roject';
import { useRouter } from 'next/router';


export default function ProjectUpdate({ projectData }) {
  const router = useRouter()

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
      descripcion: project.descripcion,
      fk_usuario: 2,
      fk_estado: 3

    }


    UpdateProject(parseInt(router.query.id), proj)
    router.push('/components/projects/dashboard')
    alert("Proyecto Actualizado !!")
    //------------------------ add partners  no esta implementado en backend

    /*   const asign = {
        "fk_proyecto": 1,
        "fk_usuario": 2
      } */


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
    <div className="flex justify-center items-center h-screen p-9  bg-gray-600 ">


      <form className=" p-8 pt-4 bg-white rounded-lg shadow mx-4 w-[50%] " onSubmit={handleSubmit}>
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
        <div className=' px-5 overflow-y-auto w-full h-[16%] border-2 border-gray-300 bg-gray-100 '>

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


                  <span onClick={() => handleDelete(option)} className='text-red-500 text-xl bg-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </span>

                </div>
              </li>
            ))}
          </ul>
        </div>
        {/*  ---------------------- Partners ------------- */}

        {/* //dropbox ini */}
        <div className='flex justify-center'>
          <div className='py-1'>
            ADD PARTNERS
          </div>
        </div>

        <div className=' bg-gray-200   shadow mx-auto  overflow-y-auto w-[90%] h-[18%] '>
          <div className="dropdown ">
            {isOpen && (
              <div className="dropdown__options">

                <ul className="dropdown__list  max-h-20 overflow-y-auto ">
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