import Link from 'next/link';
export default function Modal({ isVisible, close, data }) {

  const datal = data[0]

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
            {datal.nombre}
          </div>
          <div className="mb-2 text-lg text-semi-bold ">
            <span className="font-semibold">Description:</span>
            {datal.descripcion}
          </div>
          <div className="mb-2 text-lg text-semi-bold ">
            <span className="font-semibold">Participants:</span> [..participants..]

            {/* traer de usuarios filtrando... los de mismo FK de proyecto -> listar //  si no hay  mostrar mensaje no asignados */}    
            {/* condicionar fk_estado -> texto   muetstra actual */}


          </div>
          <div className="mb-2 text-lg text-semi-bold text-green-600 mb-6">
            <span className="font-semibold  text-black">Status:</span> {datal.fk_estado}
          
          </div>

          <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/proyectUpdate/${datal.id}`}>EDIT</Link>
          {console.log(datal.id)}
        </div>
      </div>
    </div>

  )
}



