import { JSX, useMemo } from "react";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: JSX.Element;
    onClick: () => void;
    className?: string;
}

export default function IconButton({ icon, onClick, className = "", ...props }: IconButtonProps) {
    const buttonClassName = useMemo(() => {
        return `p-1.5 flex justify-center items-center border rounded-sm hover:cursor-pointer transition duration-200 ${className}`;
    }, [className]);

    return (
        <button onClick={onClick} className={buttonClassName} {...props}>{icon}</button>
    );
}