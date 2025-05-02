// ProjectsDashboard.jsx
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import TaskDetailsModal from "../components/TaskDetailsModal";
import Header from "../components/Header";

const initialProjects = [
    {
        id: "Job_011",
        title: "Building Construction",
        jobNo: "Job_011",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 96,
        status: "Pending",
        description: "Commercial building construction project...",
    },
    {
        id: "Rail_Job_1",
        title: "Western Rail Track",
        jobNo: "Rail_Job_1",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 20,
        status: "Pending",
    },
    {
        id: "Job_04",
        title: "Wiring Upgrade",
        jobNo: "Job_04",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 39,
        status: "Pending",
    },
    {
        id: "ER_001",
        title: "Express Roadways",
        jobNo: "ER_001",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 53,
        status: "Pending",
    },
    {
        id: "Job_Shopping_020",
        title: "Sopping Site",
        jobNo: "Job_Shopping_020",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 21,
        status: "Pending",
    },
    {
        id: "PR_22",
        title: "Property Rental",
        jobNo: "PR_22",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 18,
        status: "Pending",
    },
];

const ProjectsDashboard = ({ onLogout, username }) => {
    const [projects] = useState(initialProjects);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeModal, setActiveModal] = useState(null);

    const handleAccept = (project) => setActiveModal(project);
    const handleCloseModal = () => setActiveModal(null);

    const handleCompleteTask = (projectId, images, description) => {
        console.log(
            `Completing task ${projectId} with ${images.length} images and description: ${description}`
        );
        setActiveModal(null);
    };

    const filteredProjects = projects.filter(
        (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.jobNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-70">
            <Header
                onLogout={onLogout}
                username={username}
                onSearch={setSearchTerm}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onAccept={handleAccept}
                    />
                ))}
            </div>

            {activeModal && (
                <TaskDetailsModal
                    project={activeModal}
                    onClose={handleCloseModal}
                    onComplete={handleCompleteTask}
                />
            )}
        </div>
    );
};

export default ProjectsDashboard;
