// client component
"use client"

// libs
import Link from "next/link"
import { usePathname } from "next/navigation";

// icons
import { FaYoutubeSquare, FaGithubSquare, FaLinkedin, FaLaptopCode } from "react-icons/fa";

// ui
import Brand from "@/components/UI/Brand";;

export default function Footer() {

    const pathname = usePathname();

    return (
        <footer className={`${pathname === "/home" ? "w-full px-4 md:px-16 flex flex-col gap-4 bg-white" : "hidden"}`}>
            {pathname === "/home" && (
                <>
                    <div className="w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <Brand
                                icon={<FaLaptopCode className="w-6 h-6" />}
                                name="CA"
                                onClick={() => { }}
                                className="text-black"
                            />
                            <p className="w-full max-w-md pr-4 lg:text-justify text-sm font-normal text-gray-600">
                                Platform pembelajaran pemrograman interaktif berbasis gamifikasi yang
                                membuat belajar coding lebih seru, dan bertahap dari pemula hingga mahir
                            </p>
                        </div>
                        <div className="w-full py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-md font-medium">Main</h1>
                                <ul className="flex flex-col gap-1.5">
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            Learning Module
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            Frequently Asked Questions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-md font-medium">Developer</h1>
                                <ul className="flex flex-col gap-1.5">
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            API Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                            Download
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-gray-400" />
                    <div className="w-full h-14 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <h1 className="text-md font-medium">{new Date().getFullYear()}</h1>
                            <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                terms
                            </Link>
                            <Link href={"/"} className="text-md font-medium capitalize text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4">
                                privacy
                            </Link>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href={""}>
                                <FaYoutubeSquare className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                            </Link>
                            <Link href={""}>
                                <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                            </Link>
                            <Link href={""}>
                                <FaGithubSquare className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </footer>
    )
}