import Link from 'next/link';
import { useState } from 'react';


export default function Modal({ isVisible, close, data }) {


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
      <div className="w-[600px] flex flex-col border-2 border-gray-400 p-2 rounded-md bg-gray-800">
        <div className="flex justify-between items-center mx-2 mb-1 text-white">
          <h2>
            PROJECT NAME   *icon*
          </h2>
          <button onClick={() => close()} className="place-self-end text-3xl font-bold ">
            X
          </button>
        </div>

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
            <p className="font-semibold  "> Status: <span className='text-green-300'>{status == 1 && "Finalizado" || status  == 2 && "En Proceso" || status == 3 && "Iniciado" }</span> 
            </p> 
          </div>

          <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/proyectUpdate/${data[0]?.id}`}>EDIT</Link>
       
        </div>
      </div>
    </div>

  )
}



