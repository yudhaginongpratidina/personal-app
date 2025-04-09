"use client";
import { usePathname } from "next/navigation";

export default function Footer(){

    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";

    return (
        <div className={`w-full ${isAuthPage ? "fixed bottom-0" : "hidden md:block md:fixed md:bottom-0"} z-10`}>
            <footer className="w-full h-12 px-4 flex items-center rounded-sm shadow-sm drop-shadow-sm bg-white text-black">

            </footer>
        </div>
    )
}