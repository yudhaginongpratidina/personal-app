"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const Navbar = ({ children }: { children: React.ReactNode }) => {
    return (
        <nav className="w-full fixed top-0 z-10">
            {children}
        </nav>
    )
}

export const NavbarContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col gap-0.5">
            {children}
        </div>
    )
}

export const NavbarDesktop = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full h-14 px-4 md:px-16 flex justify-between items-center shadow bg-white">
            {children}
        </div>
    )
}

export const NavbarMobile = ({ children, isActive }: { children: React.ReactNode, isActive: boolean }) => {
    return (
        <>
            {isActive && (
                <div className="w-full h-fit py-4 px-4 md:px-16 flex md:hidden flex-col gap-4 shadow bg-white">
                    {children}
                </div>
            )}
        </>
    )
}

export const NavItems = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {children}
        </div>
    )
}

export const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname()
    return (
        <Link href={href} className={`text-md font-medium capitalize ${pathname === href ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"}`}>
            {children}
        </Link>
    )
}