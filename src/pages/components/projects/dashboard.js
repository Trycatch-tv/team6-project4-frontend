import React, { Fragment, useState } from 'react';
import Modal from './modal/modal';
import DeleteProyecto from './utils/delete-proyecto';
import Link from 'next/link';
export default function Dashboard({ data }) {
  const [show, setShow] = useState(false);
  const [dataList, setDataList] = useState(data);
  const [projectId, setProjectId] = useState({});
  

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
      <div className="w-[90%] flex flex-col items-center mx-auto py-9">
        <div className="w-full">
          <h2 className="text-6xl font-bold text-blue-500 justify-start m-auto">
            NAME-APP
          </h2>
        </div>
        <hr className="border-t-3 border-blue-400 my-9 w-full" />

        <button className="w-22 text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
        <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/components/projects/projectForm`}>Create New Project</Link>
        </button>

        <div className="container mx-auto px-4 py-8">
          {data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-2 border-gray-600 rounded-md p-16 bg-gray-200">
              {dataList.map((card, index) => (
                <div
                  onClick={() => handleProjectClick(card.id)}
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-600">{card.nombre}</h3>
                  <p className="text-gray-600">{card.descripcion}</p>
                  <div
                    id="options"
                    className="flex justify-end mt-4 border-t-4 border-blue-300 pt-2"
                    onClick={handleOptionsClick}
                  >
                    <div className="px-2 py-1 bg-gray-100 rounded-md mr-2">
                      Status: <span>iniciado</span>
                    </div>
                    <button
                     onClick={() => {
                      handleDeleteProyecto(card.id);
                    }}
                      className="px-2 py-1 bg-red-400 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay elementos en la lista</p>
          )}
          <Modal isVisible={show} close={() => setShow(false)} data={projectId}/>
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

  