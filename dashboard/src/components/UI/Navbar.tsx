// client component
"use client"

// react or next
import { useEffect, useRef, useState } from "react";

// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export const Navbar = ({ fixed, children }: { fixed: boolean, children: React.ReactNode }) => {
    return (
        <nav className={`w-full ${fixed ? "fixed top-0 z-10" : ""}`}>
            {children}
        </nav>
    )
}

export const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full shadow-sm drop-shadow-sm border-b border-gray-200 bg-white">
            <div className="w-full max-w-4xl mx-auto h-14 px-4 md:px-14 lg:px-0 flex justify-between items-center">
                {children}
            </div>
        </div>
    )
}

export const NavbarLeft = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-2.5">
            {children}
        </div>
    )
}

export const NavbarRight = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center gap-2">
            {children}
        </div>
    )
}

export const NavbarAvatar = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Detect outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={toggleDropdown}
                    aria-label="User menu"
                    className="flex items-center gap-1 hover:cursor-pointer"
                >
                    <div className="p-1.5 w-[34px] h-[34px] flex justify-center items-center border rounded-sm hover:cursor-pointer transition duration-200">
                        <FaUser className="w-5 h-5" />
                    </div>
                    <IoMdArrowDropdown className="text-xl" />
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-4 z-20 w-[250px] flex flex-col gap-2 rounded-sm bg-white shadow-md p-4">
                        {children}
                    </div>
                )}
            </div>
        </>
    );
};