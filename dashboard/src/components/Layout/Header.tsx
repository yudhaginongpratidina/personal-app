"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Modal from "@/ui/Modal";
import Brand from "@/ui/Brand";
import IconButton from "@/ui/IconButton";

import { IoIosLogOut, IoMdArrowRoundBack } from "react-icons/io";
import { SiDungeonsanddragons } from "react-icons/si";
import { FaMoon } from "react-icons/fa";


export default function Header() {

    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";
    const isMainPage = pathname === "/dashboard";

    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

    const handleBackPage = async () => {
        window.history.back();
    }

    const handleDarkMode = async () => {
        console.log("Dark Mode");
    }

    const handleLogout = async () => {
        console.log("Logout");
    }

    return (
        <>
            <div className={`${isAuthPage ? "hidden" : "w-full px-4 fixed top-4 z-10 md:hidden"}`}>
                <header className="w-full h-12 px-4 md:px-14 flex justify-between items-center rounded-sm shadow-sm drop-shadow-sm bg-white text-black">
                    
                    {isMainPage 
                        ? <Brand href="/dashboard" name="Brand" icon={<SiDungeonsanddragons className="w-6 h-6" />} /> 
                        : <IconButton icon={<IoMdArrowRoundBack className="w-5 h-5" />} onClick={() => { handleBackPage(); }} className="border-gray-400 rounded-sm hover:bg-black hover:text-white" />
                    }

                    <div className="flex items-center gap-2">
                        <IconButton 
                            icon={<FaMoon className="w-5 h-5" />} 
                            onClick={() => {handleDarkMode(); }} 
                            className="border-gray-400 rounded-sm hover:bg-black hover:text-white"
                        />
                        <IconButton 
                            icon={<IoIosLogOut className="w-5 h-5" />} 
                            onClick={() => { setIsLogoutModalOpen(true); }} 
                            className="border-gray-400 rounded-sm hover:bg-black hover:text-white"
                        />
                    </div>
                </header>
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