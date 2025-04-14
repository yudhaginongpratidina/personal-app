// client component
"use client"

// next or react
import { usePathname } from "next/navigation";

// icons
import { FaLaptopCode, FaMoon } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

// ui
import Brand from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";


// interfaces
interface NavbarProps {
    onToggleSidebar?: () => void;
}


export default function Navbar({ onToggleSidebar }: NavbarProps) {

    const pathname = usePathname();

    return (
        <>
            <nav className="w-full fixed top-0 z-10">
                <div className="w-full h-14 px-4 md:px-16 flex justify-between items-center shadow-sm drop-shadow-sm border-b border-gray-200 bg-white">

                    {/* LEFT - START */}
                    <div className="flex items-center gap-2.5">
                        {(pathname === "/auth") && (
                            <Brand
                                icon={<FaLaptopCode className="w-6 h-6" />}
                                name="dashboard"
                                onClick={() => { }}
                                className="text-black"
                            />
                        )}
                        {(!(pathname === "/auth")) && (
                            <IconButton
                                icon={<HiMenu className="w-5 h-5" />}
                                onClick={onToggleSidebar || (() => {})}
                                className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                            />
                        )}
                    </div>
                    {/* LEFT - END */}

                    {/* RIGHT - START */}
                    <div className="flex items-center gap-2">
                        <IconButton
                            icon={<FaMoon className="w-5 h-5" />}
                            onClick={() => { }}
                            className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                        />
                    </div>
                    {/* RIGHT - END */}

                </div>
            </nav>
        </>
    )
}