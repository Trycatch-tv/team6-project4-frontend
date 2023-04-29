import { useState } from "react";

 export default function ProjectForm({status}) {
    console.log(status)
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="flex justify-center items-center h-screen bg-gray-600">
            <form  className="p-8 bg-white rounded-lg shadow mx-4">
                <h2 className="text-2xl font-medium mb-4">Nuevo Proyecto</h2>
                <div className="mb-4">
                    <label htmlFor="projectName" className="block font-medium mb-2">
                    Project Name
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


