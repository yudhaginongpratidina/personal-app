"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full max-w-md flex justify-center items-center gap-4">
                <TabLink href={"/login"}>login</TabLink>
                <TabLink href={"/register"}>register</TabLink>
            </div>
            <div className="w-full max-w-md h-fit p-4 flex flex-col gap-4 rounded-sm bg-white">
                {children}
            </div>
        </>
    )
}

const TabLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            className={`
                w-full py-2 px-4 text-center capitalize border 
                ${pathname === href
                    ? "border-black bg-black hover:bg-gray-800 text-white"
                    : "border-gray-300 bg-white hover:bg-black hover:text-white"
                } rounded-sm hover:cursor-pointer duration-200`
            }>{children}
        </Link>
    )
}