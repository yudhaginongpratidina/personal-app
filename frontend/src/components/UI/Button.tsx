"use client"
import LazyIcon from "@/components/UI/LazyIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean
    icon?: string
    className?: string
    name?: string
}

export default function Button({ fullWidth, icon, name, className, ...props }: ButtonProps) {
    return (
        <button
            className={`${fullWidth && "w-full"} flex justify-center items-center gap-2 border rounded-sm hover:cursor-pointer transition-all ${name ? "py-2.5 px-4" : "p-2"} ${className}`}
            {...props}
        >
            {icon && <LazyIcon iconPath={icon} size={19} />}
            {name && <span className="capitalize">{name}</span>}
        </button>
    )
}
