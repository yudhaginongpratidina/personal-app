import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    className?: string
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode
    className?: string
    href: string
}


const ButtonAuth = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-full p-2.5 rounded-md font-medium text-white bg-blue-500 hover:bg-blue-600 duration-200 ${className}`} {...props}>
            { children }
        </button>
    )
})

const ButtonSave = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-full md:w-fit py-2 px-4 rounded-md font-medium text-white bg-blue-500 hover:bg-blue-600 duration-200 ${className}`} {...props}>
            { children }
        </button>
    )
})

const ButtonUpdate = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-full md:w-fit py-2 px-4 rounded-md font-medium text-white bg-orange-500 hover:bg-orange-600 duration-200 ${className}`} {...props}>
            { children }
        </button>
    )
})

const ButtonActionCreate = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ href, className, ...props }, ref) => {
    return (
        <Link to={href} ref={ref} className={`py-1.5 px-4 rounded-md flex items-center gap-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white duration-200 font-semibold ${className}`} {...props}>
            <span className="text-lg font-semibold">+</span>
            <span className="font-semibold">Create</span>
        </Link>
    )
})

const ButtonActionEdit = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ href, className, ...props }, ref) => {
    return (
        <Link to={href} ref={ref} className={`w-fit p-2 rounded-md font-medium text-white bg-orange-500 hover:bg-orange-600 duration-200 ${className}`} {...props}>
            <FaRegEdit/>
        </Link>
    )
})

const ButtonActionView = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ href, className, ...props }, ref) => {
    return (
        <Link to={href} ref={ref} className={`w-fit p-2 rounded-md font-medium text-white bg-blue-500 hover:bg-blue-600 duration-200 ${className}`} {...props}>
            <FaEye/>
        </Link>
    )
})

const ButtonActionDelete = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ href, className, ...props }, ref) => {
    return (
        <Link to={href} ref={ref} className={`w-fit p-2 rounded-md font-medium text-white bg-red-500 hover:bg-red-600 duration-200 ${className}`} {...props}>
            <FaTrash/>
        </Link>
    )
})

const ButtonPaginationPrev = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-fit py-1.5 px-3 text-sm rounded-md font-medium border shadow-sm hover:bg-black hover:text-white duration-200 ${className}`} {...props}>
            Previous
        </button>
    )
})

const ButtonPagination = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-fit py-1.5 px-3 text-sm rounded-md font-medium border shadow-sm hover:bg-black hover:text-white duration-200 ${className}`} {...props}>
            { children }
        </button>
    )
})

const ButtonPaginationNext = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-fit py-1.5 px-3 text-sm rounded-md font-medium border shadow-sm hover:bg-black hover:text-white duration-200 ${className}`} {...props}>
            Next
        </button>
    )
})

const ButtonDeleteSelected = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <div className="w-full">
            <button ref={ref} className={`w-fit py-2.5 px-4 rounded-md flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white duration-200 text-sm font-semibold ${className}`} {...props}>
                Delete Selected
            </button>
        </div>
    )
})

ButtonAuth.displayName = "ButtonAuth"
ButtonSave.displayName = "ButtonSave"
ButtonUpdate.displayName = "ButtonUpdate"
ButtonActionCreate.displayName = "ButtonActionCreate"
ButtonActionEdit.displayName = "ButtonActionEdit"
ButtonActionView.displayName = "ButtonActionView"
ButtonActionDelete.displayName = "ButtonActionDelete"
ButtonPaginationPrev.displayName = "ButtonPaginationPrev"
ButtonPagination.displayName = "ButtonPagination"
ButtonPaginationNext.displayName = "ButtonPaginationNext"
ButtonDeleteSelected.displayName = "ButtonDeleteSelected"

export { 
    ButtonAuth,
    ButtonSave,
    ButtonUpdate,
    ButtonActionCreate,
    ButtonActionEdit,
    ButtonActionView,
    ButtonActionDelete,
    ButtonPaginationPrev,
    ButtonPagination,
    ButtonPaginationNext,
    ButtonDeleteSelected
}