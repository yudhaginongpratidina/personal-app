"use client";
import { usePathname } from "next/navigation";
import IconButton from "@/ui/IconButton";

import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { MdForum } from "react-icons/md";

export default function MobileNavigation() {

    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";

    return (
        <nav className={`${isAuthPage ? "hidden" : "w-full fixed bottom-4 px-4 z-10 md:hidden"}`}>
            <div className="w-full max-w-md h-14 mx-auto flex justify-center items-center rounded-sm shadow-sm drop-shadow-sm bg-white text-black">
                <div className="w-full flex justify-around items-center gap-6 md:hidden">
                    <IconButton
                        icon={<FaHome className="w-6 h-6" />}
                        onClick={() => { }}
                        className="border-gray-200 rounded-sm hover:bg-black hover:text-white"
                    />
                    <IconButton
                        icon={<MdForum className="w-6 h-6" />}
                        onClick={() => { }}
                        className="border-gray-200 rounded-sm hover:bg-black hover:text-white"
                    />
                    <IconButton
                        icon={<RxDashboard className="w-6 h-6" />}
                        onClick={() => { }}
                        className="border-gray-200 rounded-sm hover:bg-black hover:text-white"
                    />
                    <IconButton
                        icon={<FaToolbox className="w-6 h-6" />}
                        onClick={() => { }}
                        className="border-gray-200 rounded-sm hover:bg-black hover:text-white"
                    />
                    <IconButton
                        icon={<IoSettings className="w-6 h-6" />}
                        onClick={() => { }}
                        className="border-gray-200 rounded-sm hover:bg-black hover:text-white"
                    />
                </div>
            </div>
        </nav>
    )
}