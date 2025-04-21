"use client";

// -----------------------------------------------------------------------------
// Dependencies
// -----------------------------------------------------------------------------
import { usePathname } from "next/navigation";
import { forwardRef, ReactNode, ButtonHTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

// -----------------------------------------------------------------------------
// UI - Navbar
// -----------------------------------------------------------------------------
export const Navbar = forwardRef<HTMLElement, { position: "fixed" | "static"; children?: ReactNode; }>(({ position, children }, ref) => {
    const isEmpty = !children;

    return (
        <nav
            ref={ref}
            className={`w-full ${position === "fixed" ? "fixed top-0 left-0 right-0 z-10" : "w-full"} flex flex-col gap-2`}
        >
            {isEmpty ? (
                <div className="w-full h-14 px-4 md:px-16 flex justify-between items-center animate-pulse gap-4">
                    <div className="h-6 w-24 bg-gray-300 rounded-md bg-opacity-50" />
                    <div className="h-6 w-16 bg-gray-300 rounded-md bg-opacity-50" />
                    <div className="h-6 w-10 bg-gray-300 rounded-md bg-opacity-50" />
                </div>
            ) : (
                <div className="w-full">{children}</div>
            )}
        </nav>
    );
});
Navbar.displayName = "Navbar";

// -----------------------------------------------------------------------------
// UI - NavbarContainer
// -----------------------------------------------------------------------------
export const NavbarContainer = ({ direction, className, children, }: { direction: "row" | "col"; className?: string; children?: ReactNode; }) => {
    const isEmpty = !children;

    return (
        <div
            className={`
        w-full px-4 py-2 md:px-16 md:py-0 shadow-sm border-b border-gray-200 bg-gray-50 text-black flex
        ${direction === "row" ? "flex-row justify-between items-center" : "flex-col py-2 gap-4 md:hidden"}
        ${className}
      `}
        >
            {isEmpty ? (
                <div className="w-full h-full flex justify-center items-center">
                    <span className="text-gray-400 italic text-center text-sm">
                        ℹ️  Looks empty. Fill me up!
                    </span>
                </div>
            ) : (
                children
            )}
        </div>
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
            {logo_is_empty ? (
                <div className="w-8 h-8 rounded-md bg-gray-300" />
            ) : (
                <Image src={logo} alt="Brand Logo" width={32} height={32} />
            )}
            {name_is_empty ? (
                <h1 className="hidden md:block text-md font-semibold uppercase italic">
                    No Name
                </h1>
            ) : (
                <h1 className="hidden md:block text-md font-semibold uppercase">
                    {name}
                </h1>
            )}
        </Link>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarItems
// -----------------------------------------------------------------------------
export const NavbarItems = ({ direction, children, }: { direction: "row" | "col"; children?: ReactNode; }) => {
    const isEmpty = !children;

    return isEmpty ? (
        <div className="w-full h-full flex justify-center items-center">
            <span className="text-gray-400 italic text-center text-sm">
                ℹ️  Looks empty. Fill me up!
            </span>
        </div>
    ) : (
        <div
            className={`${direction === "row"
                ? "hidden md:flex flex-row justify-center items-center gap-4"
                : "w-full flex flex-col gap-4 md:hidden"
                }`}
        >
            {children}
        </div>
    );
};

// -----------------------------------------------------------------------------
// UI - NavLink
// -----------------------------------------------------------------------------
export const NavLink = ({ href, children, }: { href: string; children?: ReactNode; }) => {
    const pathname = usePathname();
    const isEmpty = !children;

    return (
        <Link
            href={href || "/"}
            className={`text-md font-semibold capitalize ${pathname === href
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
        >
            {isEmpty ? (
                <span className="text-gray-400 italic text-center text-sm">
                    ℹ️  Looks empty. Fill me up!
                </span>
            ) : (
                children
            )}
        </Link>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarActions
// -----------------------------------------------------------------------------
export const NavbarActions = ({ children }: { children?: ReactNode }) => {
    const isEmpty = !children;

    return (
        <div className="flex items-center gap-2">
            {isEmpty ? (
                <div className="w-full h-full flex justify-center items-center">
                    <span className="text-gray-400 italic text-center text-sm">
                        ℹ️  Looks empty. Fill me up!
                    </span>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

// -----------------------------------------------------------------------------
// UI - NavCallToActionButton
// -----------------------------------------------------------------------------
export const NavCallToActionButton = ({ onClick, children }: { onClick?: () => void; children?: ReactNode; }) => {
    const isEmpty = !children;

    return (
        <button
            onClick={onClick}
            className="py-2 px-3 rounded-md border text-sm border-gray-100 bg-black text-white hover:cursor-pointer"
        >
            {isEmpty ? (
                <span className="text-gray-400 italic text-center text-sm">
                    ℹ️  Looks empty. Fill me up!
                </span>
            ) : (
                children
            )}
        </button>
    );
};

// -----------------------------------------------------------------------------
// UI - NavbarHamburger
// -----------------------------------------------------------------------------
export const NavbarHamburger = ({ onClick, className }: ButtonHTMLAttributes<HTMLButtonElement> & { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className={`hover:cursor-pointer p-1.5 border rounded-md bg-black text-white ${className}`}
        >
            <IoMdMenu className="w-6 h-6" />
        </button>
    );
};
