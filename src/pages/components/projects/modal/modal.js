import React from 'react'

function Modal({ isVisible, close }) {
    if (!isVisible) return null

    function handleClose(e) {
        if (e.target.id === 'modal') close()
    }


    return (
        <div id='modal' onClick={handleClose} className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center" >
            <div className='w-[600px] flex flex-col border-2 border-gray-400 p-2 rounded-md bg-gray-800'>
                <div className='flex justify-between items-center mx-2 mb-1 text-white'>
                    <h2>PROJECT NAME   *icon*</h2>
                    <button onClick={() => close()} className=' place-self-end text-3xl font-bold '>
                        X
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-2 text-lg text-semi-bold ">
                        <span className="font-semibold">Project Name:</span> name
                    </div>
                    <div className="mb-2 text-lg text-semi-bold ">
                        <span className="font-semibold">Description:</span> description
                    </div>
                    <div className="mb-2 text-lg text-semi-bold ">
                        <span className="font-semibold">Participants:</span> [..participants..]
                    </div>
                    <div className="mb-2 text-lg text-semi-bold text-green-600">
                        <span className="font-semibold  text-black">Status:</span> status
                    </div>
                    <button className='text-xl bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 w-[30%]' >Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Modal