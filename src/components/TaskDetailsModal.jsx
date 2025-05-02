// TaskDetailsModal.jsx
import { useState } from "react";
import { X, Upload, Trash2 } from "lucide-react";

const TaskDetailsModal = ({ project, onClose, onComplete }) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [workDescription, setWorkDescription] = useState("");

    const handleImageUpload = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            const newImages = filesArray.map((file) => ({
                file,
                id: Math.random().toString(36).substring(2, 11),
                name: file.name,
                preview: URL.createObjectURL(file),
            }));

            setUploadedImages((prev) => [...prev, ...newImages]);
        }
    };

    const handleDeleteImage = (imageId) => {
        setUploadedImages((prev) => prev.filter((img) => img.id !== imageId));
    };

    const handleDescriptionChange = (e) => {
        setWorkDescription(e.target.value);
    };

    const handleComplete = () => {
        // In a real app, you would upload images and submit the form data here
        onComplete(project.id, uploadedImages, workDescription);
    };

    const isCompleteButtonEnabled =
        uploadedImages.length > 0 && workDescription.trim().length > 0;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                {/* Modal Header */}
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold">Task Details</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 mt-1">
                        {project.description || "No description available."}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-sm text-gray-500">Job ID</p>
                            <p className="font-medium">{project.jobNo}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Snags</p>
                            <p className="font-medium">{project.totalSnags}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Start Date</p>
                            <p className="font-medium">{project.startDate}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">End Date</p>
                            <p className="font-medium">{project.endDate}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-6">
                            <p className="text-sm text-yellow-800">
                                You are about to accept this task. Complete it
                                by uploading work images and description.
                            </p>
                        </div>

                        {/* Multiple File Upload */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Work Images
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="work-images"
                                    multiple
                                    onChange={handleImageUpload}
                                />
                                <label
                                    htmlFor="work-images"
                                    className="cursor-pointer flex flex-col items-center"
                                >
                                    <Upload className="h-8 w-8 text-gray-400" />
                                    <span className="mt-2 text-sm text-gray-500">
                                        Click to upload images
                                    </span>
                                </label>
                            </div>

                            {/* Display Uploaded Images */}
                            {uploadedImages.length > 0 && (
                                <div className="mt-3">
                                    <p className="text-sm text-gray-700 mb-2">
                                        {uploadedImages.length}{" "}
                                        {uploadedImages.length === 1
                                            ? "image"
                                            : "images"}{" "}
                                        uploaded
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {uploadedImages.map((img) => (
                                            <div
                                                key={img.id}
                                                className="relative group"
                                            >
                                                <div className="h-16 w-16 border rounded overflow-hidden">
                                                    <img
                                                        src={img.preview}
                                                        alt="Preview"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteImage(
                                                            img.id
                                                        )
                                                    }
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Work Description */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Work Description
                            </label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                                placeholder="Describe the work completed..."
                                value={workDescription}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t flex justify-end space-x-3">
                    <button
                        onClick={handleComplete}
                        disabled={!isCompleteButtonEnabled}
                        className={`px-4 py-2 rounded text-white ${
                            isCompleteButtonEnabled
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-green-300 cursor-not-allowed"
                        } transition-colors`}
                    >
                        Mark as Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModal;
