import { useState } from "react";



function ProjectForm() {
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [participants, setParticipants] = useState([]);
    const [newParticipant, setNewParticipant] = useState("");

    const handleAddParticipant = () => {
        setParticipants([...participants, newParticipant]);
        setNewParticipant("");
    };

    const handleDeleteParticipant = (participantIndex) => {
        const updatedParticipants = participants.filter(
            (_, index) => index !== participantIndex
        );
        setParticipants(updatedParticipants);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with project data (e.g. send to server)
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-600">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow mx-4">
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
                </div>
                <div className="mb-4">
                    <label htmlFor="participants" className="block font-medium mb-2">
                    Participants
                    </label>
                    <div className="flex items-center">
                        <input
                            type="email"
                            id="participants"
                            className="w-full border-gray-300 rounded-l-sm px-3 py-2"
                            value={newParticipant}
                            onChange={(event) => setNewParticipant(event.target.value)}
                            placeholder="Add"
                        />
                        <button
                            type="button"
                            onClick={handleAddParticipant}
                            className="bg-blue-500 text-white py-2 rounded-lg w-full">
                            Add Participant
                        </button>
                    </div>
                    {participants.length > 0 && (
                        <ul className="mt-2">
                            {participants.map((participant, index) => (
                                <li
                                    key={index}
                                    className=" mb-1 flex items-center justify-between bg-gray-100 rounded-md p-2"
                                >
                                    <span>{participant}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteParticipant(index)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >

                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex items-center justify-center w-full">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Create Project</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectForm;