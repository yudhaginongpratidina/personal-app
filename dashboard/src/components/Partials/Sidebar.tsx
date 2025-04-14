// client components
"use client";

import { usePathname } from "next/navigation";

// ui
import Brand from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";
import { JSX } from "react";

// icons
import { FaLaptopCode } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";

// interfaces
interface SidebarProps {
    isActive: boolean;
    onToggle: () => void;
}

export default function Sidebar({ isActive, onToggle }: SidebarProps) {
    return (
        <>
            {isActive && (
                <aside className="w-full max-w-xs h-screen fixed top-0 left-0 z-10 shadow-sm drop-shadow-sm flex flex-col gap-4 bg-white">
                    <div className="w-full h-14 p-2.5 flex justify-between items-center gap-2.5 bg-black">
                        <Brand
                            icon={<FaLaptopCode className="w-6 h-6" />}
                            name="dashboard"
                            onClick={() => { }}
                            className="text-white"
                        />
                        <IconButton
                            icon={<HiMenu className="w-5 h-5" />}
                            onClick={onToggle}
                            className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                        />
                    </div>
                    <div className="w-full p-2.5 flex flex-col gap-3">
                        <div className="w-full p-1.5 py-2">
                            <h1 className="text-md font-semibold uppercase text-gray-600">main menu</h1>
                        </div>
                        <SidebarItem
                            icon={<RxDashboard className="w-5 h-5" />}
                            name="dashboard"
                            onClick={() => { window.location.href = "/dashboard" }}
                            pathname="/dashboard"
                        />
                    </div>
                </aside>
            )}
        </>
    )
}

const SidebarItem = ({ icon, name, onClick, pathname }: { icon: JSX.Element; name: string, onClick: () => void, pathname: string }) => {

    const currentPath = usePathname();

    return (
        <button className={`w-full p-1.5 py-2 border border-transparent hover:border-gray-200 hover:bg-gray-200 rounded-sm hover:cursor-pointer flex items-center gap-2.5 duration-200 ${currentPath === pathname ? "bg-gray-200 border-gray-200" : ""}`} onClick={onClick}>
            {icon}
            <span className="text-md font-semibold capitalize">{name}</span>
        </button>
    )
}