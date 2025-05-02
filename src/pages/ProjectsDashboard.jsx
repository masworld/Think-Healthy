// ProjectsDashboard.jsx
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import TaskDetailsModal from "../components/TaskDetailsModal";
import Header from "../components/Header";

// Sample project data
const initialProjects = [
    {
        id: "Job_011",
        title: "Building Construction",
        jobNo: "Job_011",
        startDate: "2025-04-30",
        endDate: "2025-05-1",
        totalSnags: 96,
        status: "Pending",
        description:
            "Commercial building construction project with multiple phases including foundation work, structural framing, and interior finishing.",
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
    const [projects, setProjects] = useState(initialProjects);
    const [activeModal, setActiveModal] = useState(null);

    const handleAccept = (project) => {
        setActiveModal(project);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    const handleCompleteTask = (projectId, images, description) => {
        // In a real application, you would upload the images and submit the data to your backend
        console.log(
            `Completing task ${projectId} with ${images.length} images and description: ${description}`
        );

        // Update the project status locally
        const updatedProjects = projects.map((project) => {
            if (project.id === projectId) {
                return { ...project, status: "Completed" };
            }
            return project;
        });

        setProjects(updatedProjects);
        setActiveModal(null);
    };

    return (
        <div className="min-h-screen bg-gray-70">
            {/* Header */}
            <Header onLogout={onLogout} username={username} />

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onAccept={handleAccept}
                    />
                ))}
            </div>

            {/* Task Details Modal */}
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
