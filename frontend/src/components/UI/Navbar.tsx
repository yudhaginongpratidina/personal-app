import Link from "next/link"

type NavbarProps = {
    position: "fixed-top" | "fixed-bottom" | "sticky-top" | "sticky-bottom" | "normal",
    children: React.ReactNode
}
export const Navbar = ({ position, children }: Readonly<NavbarProps>) => {
    return (
        <nav className={`w-full flex flex-col gap-0.5 
            ${position === "fixed-top" && "fixed top-0 z-10"}
            ${position === "fixed-bottom" && "fixed bottom-0 z-10"}
            ${position === "sticky-top" && "sticky top-0 z-10"}
            ${position === "sticky-bottom" && "sticky bottom-0 z-10"}
            ${position === "normal" && "relative"}
        `}>{children}</nav>
    )
}

type NavContainerProps = {
    children: React.ReactNode
    className?: string
}

export const NavContainer = ({ children, className }: Readonly<NavContainerProps>) => {
    return (
        <div className={`box-border w-full px-4 md:px-16 flex justify-between items-center shadow-sm ${className}`}>
            {children}
        </div>
    )
}

type NavbarItemsProps = {
    direction: "row" | "column",
    children: React.ReactNode,
    className?: string
}

export const NavItems = ({ direction, className, children }: Readonly<NavbarItemsProps>) => {
    return (
        <div className={`flex gap-2.5 ${direction === "row" && "flex-row"} ${direction === "column" && "flex-col"} ${className}`}>
            {children}
        </div>
    )
}

type NavLinkProps = {
    href: string,
    name: string,
    className?: string
}

export const NavLink = ({ href, name, className }: Readonly<NavLinkProps>) => {
    return (
        <Link href={href || "/"} className={`font-semibold text-md md:hover:underline md:hover:underline-offset-8 ${className}`}>
            {name}
        </Link>
    )
}