import { JSX } from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: JSX.Element;
    onClick: () => void;
    className?: string;
}

export default function IconButton({ icon, onClick, className, ...props }: IconButtonProps) {
    return (
        <button onClick={onClick} className={`p-1.5 flex items-center border rounded-sm hover:cursor-pointer transition duration-200 ${className}`} {...props}>
            {icon}
        </button>
    )
}