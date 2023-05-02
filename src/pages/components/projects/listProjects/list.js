import React, { useState } from 'react';
import Modal from '../modal/modal';
import DeleteProyecto from '../utils/delete-proyecto';

export default function List({ data }) {
  const [show, setShow] = useState(false);
  const [dataList, setDataList] = useState(data);

  if (!dataList || !dataList.length) {
    return <h2 className="text-red-500">No projects created</h2>;
  }

  const handleProjectClick = async (id) => {
    const projectData = dataList.filter((pry) => pry.id === id);
    setShow(true);
  };

  const handleOptionsClick = (e) => {
    e.stopPropagation();
  };

  const handleDeleteProject = async (id) => {
    try {
      await DeleteProyecto(id);
      const response = await fetch(`https://team6.onrender.com/api/Proyectos/`);
      const newData = await response.json();
      setDataList(newData);
    } catch (error) {
      console.error('Error eliminando el recurso:', error);
    }
  };

  return (
     
    <div className="container mx-auto px-4 py-8">
      {dataList.length > 0 ? (
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
                  onClick={() => handleDeleteProject(card.id)}
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
      <Modal isVisible={show} close={() => setShow(false)} data={dataList} />
    </div>
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