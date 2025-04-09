import { JSX } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    type: "submit" | "reset" | "button";
    fullWidth: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon?: JSX.Element;
    color: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    isLoading?: boolean;
}

const colorClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black hover:bg-gray-100",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    info: "bg-blue-600 text-white hover:bg-blue-700",
};

export default function Button({ name, type, fullWidth, onClick, icon, color, isLoading, ...props }: ButtonProps) {
    const buttonClasses = clsx(
        fullWidth ? "w-full" : "w-fit",
        colorClasses[color],
        {
            "cursor-not-allowed": isLoading,
            "cursor-pointer": !isLoading,
        },
        "flex justify-center items-center py-2.5 px-6 rounded-sm gap-4 duration-200"
    );

    const iconClasses = clsx({
        "text-white": color !== "secondary",
        "text-black": color === "secondary",
    });

    return (
        <button type={type} className={buttonClasses} disabled={isLoading} onClick={onClick} {...props}>
            {isLoading
                ? (<AiOutlineLoading className="w-5 h-5 animate-spin" />)
                : (<>{icon && <span className={iconClasses}>{icon}</span>} <span className="capitalize text-sm font-semibold">{name}</span></>)
            }
        </button>
    );
}