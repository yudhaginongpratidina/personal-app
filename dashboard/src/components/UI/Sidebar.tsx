import Link from "next/link"
import { usePathname } from "next/navigation"
import { JSX } from "react"

export const Sidebar = ({children} : {children: React.ReactNode}) => {
    return (
        <aside className="w-full max-w-xs h-screen fixed top-0 left-0 z-10 shadow-sm drop-shadow-sm flex flex-col bg-white">
            {children}
        </aside>
    )
}

export const SidebarHeader = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="w-full h-14 p-2.5 px-4 flex justify-between items-center gap-2.5 shadow-sm  border-b border-gray-200">
            {children}
        </div>
    )
}

export const SidebarContent = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="w-full h-[80vh] overflow-auto">
            {children}
        </div>
    )
}

export const SidebarItems = ({title, children} : {title:string, children: React.ReactNode}) => {
    return (
        <div className="w-full p-2.5 flex flex-col gap-2">
            <div className="px-1.5">
                <h1 className="text-sm font-semibold capitalize text-gray-600">{title}</h1>
            </div>
            {children}
        </div>
    )
}

export const SidebarItemLink = ({name, pathname, icon } : {name: string, pathname: string, icon: JSX.Element;}) => {

    const currentPath = usePathname();
    
    return (
        <Link href={pathname || "/"} className={`w-full p-1.5 py-2 border border-transparent hover:border-gray-200 hover:bg-gray-200 rounded-sm hover:cursor-pointer flex items-center gap-2.5 duration-200 ${currentPath === pathname ? "bg-gray-200 border-gray-200" : ""}`}>
            {icon}
            <span className="text-md font-semibold capitalize">{name}</span>
        </Link>
    )
}

export const SidebarFooter = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="box-border w-full h-[134px] fixed bottom-0 border-t flex justify-center items-center gap-4 border-gray-200">
            {children}
        </div>
    )
}