// --------------------------------------------------------------------------------------------
// DEPENDENCIES
// --------------------------------------------------------------------------------------------
import Link from "next/link"
import cn from "@/utils/cn"


// --------------------------------------------------------------------------------------------
// TYPE DECLARATION
// --------------------------------------------------------------------------------------------
type NavbarProps = {
    position: "fixed-top" | "fixed-bottom" | "sticky-top" | "sticky-bottom" | "normal",
    children: React.ReactNode
}

type NavContainerProps = {
    children: React.ReactNode
    className?: string
}

type NavbarItemsProps = {
    direction: "row" | "column",
    children: React.ReactNode,
    className?: string
}

type NavLinkProps = {
    href: string,
    name: string,
    className?: string
}

// --------------------------------------------------------------------------------------------
// UI NAVBAR
// --------------------------------------------------------------------------------------------
export const Navbar = ({ position, children }: Readonly<NavbarProps>) => {
    return (
        <nav className={cn(
            "w-full flex flex-col gap-0.5",
            {
                "fixed top-0 z-10": position === "fixed-top",
                "fixed bottom-0 z-10": position === "fixed-bottom",
                "sticky top-0 z-10": position === "sticky-top",
                "sticky bottom-0 z-10": position === "sticky-bottom",
                "relative": position === "normal",
            }
        )}>{children}</nav>
    )
}


// --------------------------------------------------------------------------------------------
// UI NAVBAR - CONTAINER
// --------------------------------------------------------------------------------------------
export const NavContainer = ({ children, className }: Readonly<NavContainerProps>) => {
    return (
        <div className={cn("box-border w-full px-4 md:px-16 flex justify-between items-center shadow-sm drop-shadow-sm duration-200", className)}>
            {children}
        </div>
    )
}


// --------------------------------------------------------------------------------------------
// UI NAVBAR - ITEMS
// --------------------------------------------------------------------------------------------
export const NavItems = ({ direction, className, children }: Readonly<NavbarItemsProps>) => {
    return (
        <div className={cn(
            "flex gap-2.5",
            {
                "flex-row": direction === "row",
                "flex-col": direction === "column"
            },
            className
        )}>{children}</div>
    )
}


// --------------------------------------------------------------------------------------------
// UI NAVBAR - LINK
// --------------------------------------------------------------------------------------------
export const NavLink = ({ href, name, className }: Readonly<NavLinkProps>) => {
    return (
        <Link href={href || "/"} className={cn("font-semibold text-md capitalize md:hover:underline md:hover:underline-offset-8", className)}>
            {name}
        </Link>
    )
}