import React, { Fragment, useState } from 'react'
import Modal from '../modal/modal';
import DeleteTarea from '../utils/delete-task';
import Link from 'next/link';
import BringStatus from '../../projects/utils/status';
import { useRouter } from 'next/router';


export default function Dashboard({ data }) {
  const router = useRouter()
  const [status, setStatus] = useState({});

  useData()


  async function useData() {
    const data = await BringStatus();
    setStatus(data)
  }

  const [show, setShow] = useState(false);
  const [dataList, setDataList] = useState(data.filter(task => task.fk_proyecto == parseInt(router.query.id)));
  const [taskId, setTaskId] = useState({});

  const handleTaskClick = async (id) => {
    const taskData = await dataList.filter((tsk) => tsk.id === id);
    setTaskId(taskData)
    setShow(true);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
  };

  const handleEditTarea = () => {
    // TODO: este es para el botón de editar
  }

  const handleDeleteTarea = async (id) => {
    await DeleteTarea(id);
    setDataList(dataList.filter((tsk) => tsk.id !== id));
  };

  return (
    <Fragment>
      <div className='w-[90%] bg-clip-border items-center mx-auto py-9 relative'>
        <div className="flex justify-between items-stretch">
          <div className='basis-1/2 '>
            <h2 className='text-6xl font-bold text-blue-500  self-center m-auto'>PlanMaster</h2>
          </div>
    
        </div>
        <hr className="border-t-3 border-blue-400 my-9 w-full" />

        <div className='flex justify-center items-stretch py-11 space-x-0 gap-16'>
          <div>
          <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/components/projects/dashboard`}>Projects</Link>
          </div>
          <div>
              <Link className='px-6 py-2 bg-lime-600 rounded-lg text-white text-xl' href={`/components/tasks/taskForm/${parseInt(router.query.id)}`}>Create New Task</Link>
           
          </div>
        </div>


        <div className="w-[80%] ml-auto mr-auto relative overflow-x-auto shadow-md sm:rounded-lg py-1">
          <table className=" border-separate border-spacing-2 border  w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className='py-3'>
                <th scope="col" className="px-6 py-6">
                  Task
                </th>
                <th scope="col" className="px-6 py-6">
                  Description
                </th>
                <th scope="col" className="px-6 py-6">
                  Status
                </th>
                <th scope="col" className="px-6 py-6">
                  Edit
                </th>
                <th scope="col" className="px-6 py-6">
                  Delete
                </th>
              </tr>
            </thead>
            {data.length > 0 ? (
              <tbody className='mb-4'>
                {dataList.map((card, index) => (
                  <tr onClick={() => { handleOptionsClick; handleTaskClick(card.id) }}
                    key={index}
                    className="bg-white border-2 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" className="rounded-lg px-7 py-9  font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {card.nombre}
                    </td>
                    <td className="rounded-lg px-6 py-4">
                      {card.descripcion}
                    </td>
                    <td onClick={handleOptionsClick} className="rounded-lg px-6 py-4">
                    <select className='p-1 rounded-lg ml-2'>
                        {Array.isArray(status) &&
                          status.map((option, index) => (
                            <option key={index} value={option.id} >
                              {option.nombre}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td onClick={handleOptionsClick} className="rounded-lg px-6 py-4 text-right">
                      <>
                      <Link  href={`/taskUpdate/${parseInt(router.query.id)}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        </Link>
                      </>
                    </td>
                    <td onClick={handleOptionsClick} className="rounded-lg px-6 py-4 text-right">
                      <a id='2' href="#" onClick={() => { handleDeleteTarea(card.id); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap ="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </a>
                    </td>
                  </tr>

                ))}
              </tbody>
            ) : (
              <p>No hay elementos en la lista</p>
            )}
            <Modal isVisible={show} close={() => setShow(false)} data={taskId} />
          </table>
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
  //console.log(params.id)
  const response = await fetch(`https://team6.onrender.com/api/Tarea/`);
  const data = await response.json();

  //const data = datas.filter(task=> task.fk_proyecto === params.id)


  return {
    props: {
      data,
    },
  };
}
