import React, { Fragment, useState } from 'react'
import Modal from './modal/modal';



function Dashboard() {
    const [show, setShow] = useState(false)
    const data = [
        { title: 'Card 1', description: 'Description 1' },
        { title: 'Card 2', description: 'Description 2' },
        { title: 'Card 3', description: 'Description 3' },
        { title: 'Card 4', description: 'Description 4' },
        { title: 'Card 5', description: 'Description 5' },
        { title: 'Card 6', description: 'Description 6' },
    ];
    return (
        <Fragment>
            <div onClick={()=>setShow(true)} className='w-[90%] flex flex-col items-center mx-auto py-9'>
                <div className='w-full'>
                    <h2 className=" text-6xl font-bold text-blue-500 justify-start m-auto">NAME-APP</h2>

                </div>
                <hr className="border-t-3 border-blue-400 my-9 w-full" />

                <button className="w-22 text-2xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl">
                    New Project
                </button>
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-2 border-gray-600 rounded-md p-16 bg-gray-200">
                        {data.map((card) => (
                            <div key={card.title} className="bg-white shadow-md rounded-lg p-4  "> {/* add hover effect */}
                                <h3 className="text-lg font-bold mb-2 text-gray-600">{card.title}</h3>
                                <p className="text-gray-600">{card.description}</p>
                            </div>   /* add done delete detailss */
                        ))}
                    </div>
                </div>
            </div>
            <Modal isVisible = {show} close = {()=>setShow(false)}></Modal>
        </Fragment>
    )
}

export default Dashboard