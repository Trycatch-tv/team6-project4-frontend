import { useState } from "react";
import CreateProject from './utils/create-project'
import BringUsers from "./utils/bring-users";

export default function ProjectForm() {

    useData()
   
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [person, setPerson] = useState(null);
    const [users, setUsers] = useState(null);

    async function useData() {
        const data = await BringUsers();
        setUsers(data)
    }

    function handlesubmit(e) {
        e.preventDefault()
        const project = {
            nombre: projectName,
            descripcion: description,
            fk_usuario: 2,
            fk_estado: 2
        }
        CreateProject(project)
    }


    return (

        <div className="flex justify-center items-center h-screen bg-gray-600">
            <form onSubmit={handlesubmit} className="p-8 bg-white rounded-lg shadow mx-4">
                <h2 className="text-2xl font-medium mb-4">Nuevo Proyecto</h2>
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
                    <label htmlFor="projectName" className="block font-medium mb-2">
                        Project Name:
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        className="w-full border-gray-300 border-2 rounded-sm px-3 py-2"
                        value={projectName}
                        onChange={(event) => setProjectName(event.target.value)}
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
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Create Project</button>
                </div>
            </form>
        </div>
    );


}
