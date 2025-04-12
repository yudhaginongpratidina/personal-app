"use client";
import React, { useRef, useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface UploadFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    name: string;
    onChange: (files: File[]) => void; // Change to accept an array of files
    required?: boolean;
    hideLabel?: boolean;
    optional?: boolean;
    multiple?: boolean;
}

export default function UploadField({
    hideLabel,
    name,
    required,
    onChange,
    optional,
    multiple,
    ...props
}: UploadFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [filesInfo, setFilesInfo] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = e.target.files;
        if (newFiles && newFiles.length > 0) {
            const newFileArray = Array.from(newFiles);
            const combinedFiles = multiple ? [...filesInfo, ...newFileArray] : newFileArray;

            setFilesInfo(combinedFiles);
            onChange(combinedFiles); // Pass the updated file list to the parent
            simulateUpload();
        }

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    const simulateUpload = () => {
        setIsUploading(true);
        setUploadProgress(0);
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);
            if (progress >= 100) {
                clearInterval(interval);
                setIsUploading(false);
            }
        }, 150);
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = filesInfo.filter((_, i) => i !== index);
        setFilesInfo(updatedFiles);
        onChange(updatedFiles); // Pass the updated file list to the parent
    };

    const formatBytes = (bytes: number) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="w-full select-none">
            {!hideLabel && (
                <label htmlFor={name} className="text-sm capitalize flex items-center gap-1 text-gray-600 mb-1">
                    {name.replace(/_/g, " ").toLowerCase()}
                    {required && <span className="text-red-500">*</span>}
                    {optional && <span className="lowercase text-gray-400">(optional)</span>}
                </label>
            )}

            <div className="border border-dashed border-gray-400 rounded-md p-4">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition"
                    >
                        <FaPlus className="w-3 h-3" />
                        Add File
                    </button>

                    <span className="text-sm text-gray-500 truncate">
                        {filesInfo.length > 0 ? `${filesInfo.length} file(s) selected` : "No file chosen"}
                    </span>
                </div>

                {filesInfo.length > 0 && (
                    <div className="space-y-2 mb-4">
                        {filesInfo.map((file, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded border border-gray-200 text-sm flex justify-between items-center gap-4">
                                <div className="flex flex-col gap-1.5 items-start">
                                    <div className="w-fit">
                                        <p className="font-semibold text-gray-800">Name:</p>
                                    </div>
                                    <div className="w-fit">
                                        <p className="text-gray-700">{file.name}</p>
                                    </div>
                                    <div className="w-fit">
                                        <p className="font-semibold text-gray-800">Type:</p>
                                    </div>
                                    <div className="w-fit">
                                        <p className="text-gray-700">{file.type || "Unknown"}</p>
                                    </div>
                                    <div className="w-fit">
                                        <p className="font-semibold text-gray-800">Size:</p>
                                    </div>
                                    <div className="w-fit">
                                        <p className="text-gray-700">{formatBytes(file.size)}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFile(idx)}
                                    className="text-red-500 hover:text-red-600 p-1 hover:cursor-pointer"
                                    title="Remove File"
                                >
                                    <FaTrash className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {isUploading && (
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-blue-500 h-full transition-all duration-200"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                    </div>
                )}
            </div>

            <input
                type="file"
                id={name}
                name={name}
                onChange={handleFileChange}
                multiple={multiple}
                required={required}
                ref={inputRef}
                className="hidden"
                {...props}
            />
        </div>
    );
}
