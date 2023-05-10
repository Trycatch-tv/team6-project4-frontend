import { useState } from "react";
import BringUsers from "../utils/bring-users";
import CreateTask from "../utils/create-task";
import { useRouter } from "next/router";
export default function TaskForm() {
    const router = useRouter()

    useData()
   
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [taskprioridad, setPrioridad] = useState("");
    const [taskStatus, setStatus] = useState("");
    const [taskLength, setLength] = useState("");
    const [person, setPerson] = useState(null);
    const [users, setUsers] = useState(null);

    async function useData() {
        const data = await BringUsers();
        setUsers(data)
    }

    function handlesubmit(e) {
        e.preventDefault()
        const task = {
            fk_proyecto: parseInt(router.query.id),   
            nombre: taskName,
            descripcion: description,
            fk_prioridad: 2,  
            fk_estado: 3,   //  default
            fk_usuario: 2,  // iniciando con el mismo del Leader ,  backen aun no puede ser elejidos
            fk_tamanio: 2   // default
        }
        CreateTask(task)
        router.push(`/components/tasks/dashboard/${parseInt(router.query.id)}`)
    }


    return (

        <div className="flex justify-center items-center h-screen bg-gray-600">
            <form onSubmit={handlesubmit} className="p-8 bg-white rounded-lg shadow mx-4">
                <h2 className="text-2xl font-medium mb-4">Nueva Tarea</h2>
                <div className="mb-4">
                    <label htmlFor="projectLeader" className="block font-medium mb-2">
                        Leader:
                    </label>


                    <select
                        className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"

                        onChange={(event) => setPerson(event.target.value)}
                    >
                        {users?.map((option, index) => (
                            <option key={index} value={option.username}>
                                {option.username}
                            </option>
                        ))}
                    </select>



                </div>
                <div className="mb-4">
                    <label htmlFor="taskName" className="block font-medium mb-2">
                        Task Name:
                    </label>
                    <input
                        type="text"
                        id="taskName"
                        className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
                        value={taskName}
                        onChange={(event) => setTaskName(event.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                    />
                </div>          {/* LISTAR PARTICIPANTES  PERO ANTES AGREGARLOS !!!!!! */}
        
          

                <div className="flex items-center justify-center w-full">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Create Task</button>
                </div>
            </form>
        </div>
    );


}
