import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { FaCoins } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";

export default function NavbarDashboardPartial() {
    const [isOpen, setIsOpen] = useState(false);
    const settingsRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="w-full fixed top-0 z-10 border-b shadow-sm drop-shadow-sm bg-white">
                <div className="container w-full h-14 flex justify-between items-center">
                    <h1 className="text-lg font-semibold uppercase">dashboard</h1>
                    <div className="flex items-center gap-2">
                        <div className="w-fit py-2 px-4 flex items-center gap-2 rounded-md bg-black text-white">
                            <FaCoins className="text-lg" />
                            <span>10000</span>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="w-fit p-2.5 rounded-md bg-black text-white">
                            <IoSettings className="text-xl" />
                        </button>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="w-full fixed top-16 z-10" ref={settingsRef}>
                    <div className="container w-full flex justify-end">
                        <div className="w-full max-w-xs box-border flex flex-col gap-1.5 rounded-md p-2.5 border shadow-sm drop-shadow-sm bg-white">
                            <div className="w-full p-2.5 box-border border rounded-md bg-black">
                                <h1 className="text-lg font-semibold text-white mb-2">USER 00001</h1>
                                <div className="w-full flex items-center gap-2">
                                    <span className="py-0.5 px-2.5 rounded-md text-sm font-semibold bg-gray-600 text-white">admin</span>
                                    <span className="py-0.5 px-2.5 rounded-md text-sm font-semibold bg-red-600 text-white">legendary</span>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-2 h-10">
                                <button className="w-full h-full flex items-center border rounded-md justify-center hover:bg-black hover:text-white">
                                    <FaMoon className="text-xl" />
                                </button>
                                <button className="w-full h-full flex items-center border rounded-md justify-center hover:bg-black hover:text-white">
                                    <CiSun className="text-xl" />
                                </button>
                            </div>
                            <div className="w-full border-y py-1.5 flex flex-col">
                                <Link to="/admin/profile" className="w-full p-1.5 rounded-md hover:bg-gray-100">
                                    <span className="text-xs font-semibold uppercase">Account</span>
                                </Link>
                                <Link to="/admin/profile" className="w-full p-1.5 rounded-md hover:bg-gray-100">
                                    <span className="text-xs font-semibold uppercase">Change Password</span>
                                </Link>
                                <Link to="/admin/profile" className="w-full p-1.5 flex justify-between rounded-md hover:bg-gray-100">
                                    <span className="text-xs font-semibold uppercase">My Class</span>
                                    <span className="text-xs font-semibold uppercase">[ 0 ]</span>
                                </Link>
                            </div>
                            <div className="w-full">
                                <button className="w-full py-1.5 rounded-md bg-red-500 hover:bg-red-600 text-white">Log out</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
