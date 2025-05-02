// ProjectCard.jsx
const ProjectCard = ({ project, onAccept }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {project.title}
                    </h2>
                    <button className="text-gray-500 hover:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-gray-600">Job No: {project.jobNo}</p>
                <p className="text-sm text-gray-600">
                    Dates: {project.startDate} To {project.endDate}
                </p>
                <p className="text-sm text-gray-600">
                    Total Snags: {project.totalSnags}
                </p>

                <div className="mt-4 flex justify-between items-center">
                    <span
                        className={`px-3 py-1 text-xs rounded-full ${
                            project.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                        {project.status}
                    </span>
                    {project.status !== "Completed" && (
                        <button
                            onClick={() => onAccept(project)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Accept
                        </button>
                    )}
                    {project.status === "Completed" && (
                        <span className="px-4 py-2 bg-green-500 text-white rounded">
                            Completed
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
