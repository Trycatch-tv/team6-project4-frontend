import { useState } from 'react';
import Link from 'next/link';
import BringUsers from '../components/projects/utils/bring-users';



export default function ProjectUpdate({ projectData }) {
  useData()
  const [users, setUsers] = useState(null);

  async function useData() {
    const data = await BringUsers();
    setUsers(data)
  }

  const [project, setProject] = useState({
    name: projectData.name,
    description: projectData.description,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar la información actualizada del proyecto a la API
  };


  //------------------------------------------- dropbox

  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
  };


  //------------------------------------------- Partners
  const data = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' },
    { id: 4, name: 'Element 4' },
    { id: 5, name: 'Element 5' },
    { id: 6, name: 'Element 6' },
    { id: 7, name: 'Element 7' },
    { id: 8, name: 'Element 8' },
    { id: 9, name: 'Element 9' },
    { id: 10, name: 'Element 10' },
  ];
  const Item = ({ item, onDelete }) => {
    return (
      <div className="flex items-center justify-between mb-2 border-b-2 border-gray-200">
        <span>{item.name}</span>
        <button className='px-1 py-.5 bg-red-400' onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    );
  };
  const List = ({ data, onDelete }) => {
    return (
      <div className="w-90vw max-w-screen-lg mx-auto ">
        {data.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} />
        ))}
      </div>)
  }
  const handleDelete = (id) => {
    console.log(`Delete item with id ${id}`);
  }
  //------------------------------------------- Partners
  //------------------------------------------- dropbox

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600 pb-9 ">
      <Link className="px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl mb-9" href={`/components/projects/dashboard`}>
        Regresar al dashboard
      </Link>
      <form className="p-8 pt-4 bg-white rounded-lg shadow mx-4 w-[30] h-[100%] " onSubmit={handleSubmit}>
        <h2 className="text-2xl font-medium mb-4">Actualizar Proyecto</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-2">
            Nombre del proyecto
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={project.name}
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
            name="description"
            value={project.description}
            onChange={handleChange}
            className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
          />
        </div>
        <div>Partners:</div>
        {/*  ---------------------- Partners ------------- */}
        <div className=' px-5 overflow-y-auto w-full h-[18%] border-2 border-gray-300 bg-gray-100 '>

          <List data={data} onDelete={handleDelete} />
        </div>
        {/*  ---------------------- Partners ------------- */}

        {/* //dropbox ini */}

        <button type="submit" className=" mb-2 ml-2 bg-blue-500 text-white  py-2 rounded-lg mt-6 w-[90%]">
          ADD PARTNERS
        </button>

        <div className=' bg-gray-200   shadow mx-auto  overflow-y-auto w-[90%] h-[16%] '>
          <div className="dropdown ">
            {isOpen && (
              <div className="dropdown__options">

                <ul className="dropdown__list   ">
                  {users?.map((option) => (
                    <li
                      className="dropdown__list-item ml-1 mt-1"
                      key={option}
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

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg mt-6 mb-9 w-full">
          ACTUALIZAR
        </button>
      </form >


    </div >
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