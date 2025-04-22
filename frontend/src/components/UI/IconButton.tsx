"use client"
import LazyIcon from "./LazyIcon"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string | React.ReactNode
    onClick: () => void
    className?: string
}

export default function IconButton({ icon, onClick, className }: IconButtonProps) {
    return (
        <button onClick={onClick} className={`p-1.5 flex justify-center items-center border rounded-md hover:cursor-pointer hover:shadow duration-200 ${className}`}>
            {!icon && <LazyIcon iconPath="md/MdOutlineCallToAction" />}
            {typeof icon === 'string' && <LazyIcon size={"1.5rem"} iconPath={icon} />}
            {icon && typeof icon !== 'string' && icon}
        </button>
    )
}