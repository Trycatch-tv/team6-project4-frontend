import React, { Fragment, useEffect, useState } from 'react';
import Modal from './modal/modal';
import DeleteProyecto from './utils/delete-proyecto';

import Link from 'next/link';
import BringStatus from './utils/status';

export default function Dashboard({ data }) {
  const [show, setShow] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [projectId, setProjectId] = useState({});
  const [status, setStatus] = useState({});




  useEffect(() => {
  if(data.length > 0){
    setDataList(data)
  }
  

  }, [])
  

  useData()


  async function useData() {
    const datal = await BringStatus();
    setStatus(datal)
  }
  
  const handleProjectClick = async (id) => {
    const projectData = await dataList.filter((pry) => pry.id === id);
    setProjectId(projectData)

    setShow(true);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
  };

  const handleDeleteProyecto = async (id) => {
    await DeleteProyecto(id);
    setDataList(dataList.filter((pry) => pry.id !== id));
  };

  return (
    <Fragment>
      <div className="w-[90%] flex flex-col items-center mx-auto py-2">
        <div className="w-full">
          <h2 className="text-6xl font-bold text-blue-500 justify-start m-auto">
          PlanMaster
          </h2>
        </div>
        <hr className="border-t-3 border-blue-400 mb-4 mt-2 w-full" />

          <Link className='px-6 py-1 bg-indigo-500 rounded-lg text-white text-xl' href={`/components/projects/projectForm`}>Create New Project</Link>
        

        <div className="container mx-auto px-4 py-2">
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-2 border-gray-600 rounded-md p-16 bg-gray-200">
              {dataList.map((card, index) => (
                <div
                  onClick={() => handleProjectClick(card.id)}
                  key={index}
                  className="bg-white shadow-md rounded-lg p-2 w-[90%] hover:rotate-3 transition duration-300 "
                ><div className='flex justify-between '>
                    <h3 className="text-lg font-bold mb-2 text-gray-600 ">{card.nombre}</h3>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteProyecto(card.id);
                      }}
                      className="px-2 py-1 bg-red-400 rounded-md h-12 "
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    </button>
                  </div>
                  <p className="text-gray-600">{card.descripcion}</p>
                  <div
                    id="options"
                    className="flex justify-start mt-4 border-t-4 border-blue-300 pt-2"
                    onClick={handleOptionsClick}
                  >
                    <div className="px-1 py-1 bg-gray-100 rounded-md mr-2">
                      Status
                      <select className='p-1 rounded-lg ml-2'>
                        {Array.isArray(status) &&
                          status.map((option, index) => (
                            <option key={index} value={option.id} >
                              {option.nombre}
                            </option>
                          ))}
                      </select>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay elementos en la lista</p>
          )}
          <Modal isVisible={show} close={() => setShow(false)} data={projectId} id = {projectId.id} />
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`https://team6.onrender.com/api/Proyectos/`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

