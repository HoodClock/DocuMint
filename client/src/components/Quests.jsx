import React from 'react'
import useQusests from '../context/fetchQuestsContext';

function Quests() {

    const { quests, loading, error } = useQusests();

    if (loading) return <p>Loading Quests...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">Available Quests</h2>
            {quests.length === 0 ? (
                <p className="text-center text-gray-600">No quests available at the moment.</p>
            ) : (
                <ul className="space-y-4">
                    {quests.map((quest) => (
                        <li key={quest._id} className="p-4 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{quest.title}</h3>
                            <p className="text-gray-700 mb-2">{quest.description}</p>
                            <p className="text-gray-600"><strong>Points:</strong> {quest.points}</p>
                            <p className="text-gray-600"><strong>Type:</strong> {quest.type}</p>
                            <p className="text-gray-600"><strong>Status:</strong> {quest.status}</p>
                            <p className="text-gray-600"><strong>Assigned At:</strong> {new Date(quest.assignedAt).toLocaleString()}</p>
                            <p className="text-gray-600"><strong>Deadline:</strong> {new Date(quest.deadline).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Quests
