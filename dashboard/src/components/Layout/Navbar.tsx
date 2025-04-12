"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Modal from "@/ui/Modal";
import Brand from "@/ui/Brand";
import IconButton from "@/ui/IconButton";

import { SiDungeonsanddragons } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

export default function Navbar() {

    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

    const handleLogout = async () => {
        console.log("Logout");
    }

    return (
        <>
            <nav className="w-full fixed top-0 px-4 md:px-0 z-10">
                <div className={`w-full h-12 px-14 flex justify-between items-center rounded-sm shadow-sm drop-shadow-sm bg-white text-black ${isAuthPage ? "" : "hidden md:flex"}`}>
                    <div className={`${isAuthPage ? "block" : "hidden md:block"}`}>
                        <Brand href="/dashboard" name="Brand" icon={<SiDungeonsanddragons className="w-6 h-6" />} />
                    </div>
                    <div className="flex items-center gap-2">
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
                </div>
            </nav>
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