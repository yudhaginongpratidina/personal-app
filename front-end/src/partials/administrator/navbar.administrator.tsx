import { useLocation } from "react-router-dom"
import { useState } from "react";

import { ImMenu } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

export default function NavbarAdministrator({ onClickSidebar, onClickSettings }: { onClickSidebar: () => void, onClickSettings: () => void }) {
    const location = useLocation();

    const [darkMode, setDarkMode] = useState<boolean>(false);

    const notAllowedRoutes = [
        "/$2a$14$rVguT8OkWGWpUCh7YBizz.wQI7hazbul1kAn8DyQDw23G5Yp6Eytq",
        "/$2a$14$PhEQORJUtC1yPod3hcnWNOjBYobhufLqnqnJVKcUU43SbkL0d0Tm2"
    ]

    return (
        <>
            {!notAllowedRoutes.includes(location.pathname) && (
                <nav className="w-full fixed top-0 z-10 border-b bg-white">
                    <div className="w-full container h-14 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <button onClick={onClickSidebar} className="border p-1.5 rounded-md border-black bg-white hover:bg-black hover:text-white duration-100">
                                <ImMenu className="text-2xl" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <button onClick={() => setDarkMode(!darkMode)} className={`border p-1.5 rounded-md duration-100 border-black hover:bg-black hover:text-white ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                                <FiMoon className="text-2xl" />
                            </button>
                            <button onClick={onClickSettings} className="border p-1.5 rounded-md border-black hover:bg-black hover:text-white duration-100">
                                <IoSettingsSharp className="text-2xl" />
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </>
    )
}