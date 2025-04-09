"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Modal from "@/ui/Modal";
import Brand from "@/ui/Brand";
import IconButton from "@/ui/IconButton";

import { SiDungeonsanddragons } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { MdForum } from "react-icons/md";

export default function Navbar() {

    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

    const handleLogout = async () => {
        console.log("Logout");
    }

    return (
        <>
            <div className={`w-full fixed ${isAuthPage ? "top-0" : "bottom-4 px-4 md:px-0 md:top-0"} z-10`}>
                <nav className="w-fit mx-auto md:w-full h-14 md:h-12 px-4 md:px-14 flex justify-between items-center rounded-sm shadow-sm drop-shadow-sm bg-white text-black">

                    {/* only show on desktop - start */}
                    <div className={`${isAuthPage ? "block" : "hidden md:block"}`}>
                        <Brand href="/dashboard" name="Brand" icon={<SiDungeonsanddragons className="w-6 h-6" />} />
                    </div>
                    <div className={`${isAuthPage ? "block" : "hidden md:flex items-center gap-2"}`}>
                        <IconButton
                            icon={<FaMoon className="w-5 h-5" />}
                            onClick={() => { }}
                            className="border-gray-400 rounded-sm hover:bg-black hover:text-white"
                        />
                        <IconButton
                            icon={<IoIosLogOut className="w-5 h-5" />}
                            onClick={() => { setIsLogoutModalOpen(true); }}
                            className="border-gray-400 rounded-sm hover:bg-black hover:text-white"
                        />
                    </div>
                    {/* only show on desktop - end */}

                    {/* only show on mobile - start */}
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
                    {/* only show on mobile - end */}

                </nav>
            </div>

            <Modal
                isActive={isLogoutModalOpen}
                type="alert"
                title="Logout"
                onPressYes={() => { handleLogout(); }}
                onPressNo={() => { setIsLogoutModalOpen(false); }}
                className="max-w-md"
            >
                <p className="text-justify text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae perspiciatis, veritatis nulla quam et voluptate maiores
                    officiis! Nihil, optio incidunt.
                </p>
            </Modal>
        </>
    )
}