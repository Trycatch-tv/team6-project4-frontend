import React, { Fragment, useState } from 'react';
import Modal from './modal/modal';

export default function Dashboard({ data }) {

  const [show, setShow] = useState(false);
  const [dataId, setDataId] = useState({});

  const handleProjectClick = async (id) => {
    const projectData = data.filter((pry) => pry.id === id);
    setDataId(projectData);
    setShow(true);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
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
          New Project
        </button>
        <div className="container mx-auto px-4 py-8">
          {data.length === 0 && (
            <h2 className="text-red-500">no projects created</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-2 border-gray-600 rounded-md p-16 bg-gray-200">
            {data.length > 0 &&
              data.map((card, index) => (
                  <div
                  onClick={() => handleProjectClick(card.id)}
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4  "
                  >
             
                  {/* add hover effect */}
                  <h3 className="text-lg font-bold mb-2 text-gray-600">
                    {card.nombre}
                  </h3>
                  <p className="text-gray-600">{card.descripcion}</p>
                  <div
                    id="options"
                    className="flex justify-end mt-4 border-t-4 border-blue-300 pt-2"
                    onClick={handleOptionsClick}
                  >
                    <div className="px-2 py-1 bg-gray-100 rounded-md mr-2">
                      Status: <span>iniciado</span>{' '}
                    </div>
                    <button
                      onClick={() => handleDelete(card.id)}
                      className="px-2 py-1 bg-red-400 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
               
              ))}
          </div>
          <Modal isVisible={show} close={() => setShow(false)} data={dataId} />
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

async function handleDelete(id) {
  try {
    const response = await fetch(
      `https://team6.onrender.com/api/Proyectos/${id}`,
      {
        method: 'DELETE',
      }
    );
    // manejar la respuesta del servidor aquí
  } catch (error) {
    console.error('Error eliminando el recurso:', error);
  }
}