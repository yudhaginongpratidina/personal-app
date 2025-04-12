import { FaEdit, FaTrash } from "react-icons/fa";
import { TbAlertSquareFilled } from "react-icons/tb";
import { BsInfoSquareFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import Button from "@/ui/Button";
import IconButton from "./IconButton";

interface ModalProps {
    isActive: boolean;
    type: "create" | "edit" | "delete" | "info" | "alert";
    title: string;
    children: React.ReactNode;
    onPrssClose?: () => void;
    onPressYes?: () => void;
    onPressNo?: () => void;
    className?: string;
}

export default function Modal({ isActive, type, title, children, onPrssClose, onPressYes, onPressNo, className }: ModalProps) {
    return (
        <div className={`overflow-auto p-4 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className={`w-full relative p-4 flex flex-col gap-4 rounded-sm shadow-lg bg-white ${className}`}>

                {/* Modal - Header - Start */}
                <div className="w-full flex justify-between items-center">
                    <div className="w-full flex items-center gap-2">

                        {type === "create" && <FaEdit className="w-7 h-7" />}
                        {type === "edit" && <FaEdit className="w-7 h-7" />}
                        {type === "delete" && <FaTrash className="w-7 h-7" />}
                        {type === "info" && <BsInfoSquareFill className="w-7 h-7" />}
                        {type === "alert" && <TbAlertSquareFilled className="w-7 h-7" />}

                        <h1 className="text-lg font-semibold uppercase">{title}</h1>
                    </div>
                    {onPrssClose && (
                        <IconButton 
                            icon={<IoMdClose className="w-5 h-5" />}
                            onClick={onPrssClose || (() => {})}
                            className="text-gray-500 hover:text-gray-700 transition duration-200"
                            aria-label="Close Modal"
                            type="button"
                        />
                    )}
                </div>
                {/* Modal - Header - End */}

                <hr className="w-full border-gray-400" />

                {/* Modal - Body - Start */}
                <div className="w-ful max-h-[60vh] overflow-auto">
                    {children}
                </div>
                {/* Modal - Body - End */}

                {(onPressYes || onPressNo) && <hr className="w-full border-gray-400" />}


                {/* Modal - Footer - Start */}
                {(onPressYes || onPressNo) && (
                    <div className="w-full flex items-center gap-2">
                        {onPressYes && (
                            <Button onClick={onPressYes} name={"yes"} type={"button"} fullWidth={false} color={"primary"} />
                        )}
                        {onPressNo && (
                            <Button onClick={onPressNo} name={"no"} type={"button"} fullWidth={false} color={"danger"} />
                        )}
                    </div>
                )}
                {/* Modal - Footer - End */}

            </div>
        </div>
    )
}