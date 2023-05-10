import Link from 'next/link';
import { useEffect, useState } from 'react';
import BringTasks from '../utils/tasks';

export default function Modal({ isVisible, close, data }) {


  const [tasks, setTasks] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data.length > 0) {

          let dataTasks = await BringTasks();
          let filteredTasks = dataTasks.filter(task => task.fk_proyecto == data[0].id);
          setTasks(filteredTasks);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);








  const status = data[0]?.fk_estado
  if (!isVisible) return null

  function handleClose(e) {
    if (e.target.id === 'modal') close()
  }

  return (
    <div
      id="modal"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-[600px]  border-2 border-gray-400 p-2 rounded-md bg-gray-800">
        <div className="flex justify-between items-center mx-2 mb-1 text-white">
          <h2>
            PROJECT 
          </h2>
          <button onClick={() => { setTasks({}); close() }} className="place-self-end text-3xl font-bold ">
            X
          </button>
        </div>



        <div className='flex'>

          <div className=''>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-2 text-lg text-semi-bold ">
                <span className="font-semibold color-red-500">Project Name:</span>

                {data[0]?.nombre}
              </div>
              <div className="mb-2 text-lg text-semi-bold ">
                <span className="font-semibold">Description:</span>
                {data[0]?.descripcion}
              </div>
              <div className="mb-2 text-lg text-semi-bold ">
                <span className="font-semibold">Participants:</span> [..participants..]

                {/* traer de usuarios filtrando... los de mismo FK de proyecto -> listar //  si no hay  mostrar mensaje no asignados */}
                {/* condicionar fk_estado -> texto   muetstra actual */}


              </div>
              <div className="mb-2 text-lg text-semi-bold mb-6">
                <p className="font-semibold  "> Status: <span className='text-green-300'>{status == 1 && "Finalizado" || status == 2 && "En Proceso" || status == 3 && "Iniciado"}</span>
                </p>
              </div>
              <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/proyectUpdate/${data[0]?.id}`}>EDIT</Link>
            </div>
          </div>

          <div className='flex flex-col ml-4'>
            <div className="mb-2 text-lg text-semi-bold p-2 text-white">

              <h3 className='ml-3'> Project tasks</h3>
              <select className='p-1 rounded-lg ml-2 text-black'>


                {Array.isArray(tasks) &&
                  tasks?.map((option, index) => (
                    <option key={index} value={option.id} >
                      {option.nombre}
                    </option>
                  ))}
              </select>
            </div>
            <Link className='mt-4 px-6 py-2 bg-pink-500 rounded-lg text-white text-xl text-center' href={`/components/tasks/dashboard/${data[0]?.id}`}>Add Task</Link>
          </div>

        </div>



      </div>
    </div>

  )
}



