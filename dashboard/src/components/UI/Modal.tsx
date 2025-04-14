// react
import { JSX } from "react";

// icons
import { IoMdClose } from "react-icons/io";

// ui
import IconButton from "@/components/UI/IconButton";

// interfaces
interface ModalProps {
    icon?: JSX.Element;
    isActive: boolean;
    title: string;
    children: React.ReactNode;
    closeModal: () => void;
    className?: string;
}

export default function Modal({ icon, isActive, title, children, closeModal, className }: ModalProps) {
    return (
        <div className={`overflow-auto p-4 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className={`w-full relative p-4 flex flex-col gap-4 rounded-sm shadow-lg bg-white ${className}`}>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">
                        {icon && <span className="text-gray-500">{icon}</span>}
                        <h1 className="text-lg font-semibold uppercase">{title}</h1>
                    </div>
                    <IconButton 
                        icon={<IoMdClose className="w-5 h-5" />}
                        onClick={closeModal || (() => {})}
                        className="text-gray-500 hover:text-gray-700 transition duration-200"
                        aria-label="Close Modal"
                        type="button"
                    />
                </div>
                <hr className="w-full border-gray-400" />
                <div className="w-ful max-h-[60vh] flex flex-col gap-4 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}