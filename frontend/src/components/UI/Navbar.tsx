"use client";

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
import { forwardRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------------------
// Utils
// -----------------------------------------------------------------------------
import LazyIcon from "@/utils/get-dynamic-icon";

// -----------------------------------------------------------------------------
// UI - Navbar
// -----------------------------------------------------------------------------
export const Navbar = forwardRef<HTMLElement, { position: "fixed" | "static"; children: ReactNode; }>(({ position, children }, ref) => {

    return (
        <nav ref={ref} className={`w-full ${position === "fixed" ? "fixed top-0 left-0 right-0 z-10" : "w-full"} flex flex-col gap-2`}>
            {children}
        </nav>
    );
});
Navbar.displayName = "Navbar";

// -----------------------------------------------------------------------------
// UI - NavbarContainer
// -----------------------------------------------------------------------------
export const NavbarContainer = ({ direction, className, children, }: { direction: "row" | "col"; className?: string; children: ReactNode; }) => {
    return (
        <div className={`w-full px-4 py-2 md:px-16 md:py-0 flex shadow-sm bg-white dark:bg-gray-800
        ${direction === "row" ? "flex-row justify-between items-center" : "flex-col py-2 gap-4 md:hidden"}
        ${className}
      `}>{children}</div>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarBrand
// -----------------------------------------------------------------------------
export const NavbarBrand = ({ href, logo, name, }: { href: string; logo?: string; name?: string; }) => {
    const logo_is_empty = !logo;
    const name_is_empty = !name;

    return (
        <Link href={href || "/"} className="flex items-center gap-2">
            {logo_is_empty
                ? <div className="w-8 h-8 rounded-md bg-black" />
                : <Image src={logo} alt="Brand Logo" width={32} height={32} />
            }
            {name_is_empty
                ? <h1 className="hidden md:block text-md font-semibold uppercase italic dark:text-white">No Name</h1>
                : <h1 className="hidden md:block text-md font-semibold uppercase dark:text-white">{name}</h1>
            }
        </Link>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarItems
// -----------------------------------------------------------------------------
export const NavbarItems = ({ direction, children, }: { direction: "row" | "col"; children: ReactNode; }) => {
    return (
        <div
            className={`
                ${direction === "row"
                    ? "hidden md:flex flex-row justify-center items-center gap-4"
                    : "w-full flex flex-col gap-4 md:hidden"
                }`}
        >{children}</div>
    )
};

// -----------------------------------------------------------------------------
// UI - NavLink
// -----------------------------------------------------------------------------
export const NavLink = ({ href, children, }: { href: string; children: ReactNode; }) => {
    const pathname = usePathname();
    return (
        <Link
            href={href || "/"}
            className={`text-md font-semibold capitalize ${pathname === href
                ? "text-rose-500 dark:text-white underline underline-offset-4"
                : "text-black hover:text-rose-500 hover:underline hover:underline-offset-4 dark:text-gray-400 dark:hover:text-white"
                }`}
        >{children}</Link>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarActions
// -----------------------------------------------------------------------------
export const NavbarActions = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-center gap-1">
            {children}
        </div>
    );
};

// -----------------------------------------------------------------------------
// UI - NavCallToActionButton
// -----------------------------------------------------------------------------
export const NavCallToActionButton = ({ onClick, children }: { onClick?: () => void; children: ReactNode; }) => {
    return (
        <button
            onClick={onClick}
            className="
                py-2 px-3 rounded-md border text-sm font-semibold hover:cursor-pointer 
                border-gray-800 text-black hover:border-rose-500 hover:text-rose-500 
                dark:bg-black dark:border-black dark:text-white dark:hover:border-black dark:hover:text-white"
        >{children}</button>
    );
};

// -----------------------------------------------------------------------------
// UI - NavActionButton
// -----------------------------------------------------------------------------
export const NavActionButton = ({ icon, onClick, className }: { icon?: string | ReactNode; onClick?: () => void; className?: string; }) => {
    return (
        <button
            onClick={onClick}
            className={`
                p-1.5 flex justify-center items-center border rounded-md hover:cursor-pointer 
                border-gray-800 bg-gray-800 text-white
                dark:bg-gray-black dark:bg-black dark:text-white
            ${className}`}
        >
            {!icon && <LazyIcon iconPath="md/MdOutlineCallToAction" />}
            {typeof icon === 'string' && <LazyIcon iconPath={icon} />}
            {icon && typeof icon !== 'string' && icon}
        </button>
    );
};