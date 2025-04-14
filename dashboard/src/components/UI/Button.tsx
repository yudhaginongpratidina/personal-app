import { AiOutlineLoading } from "react-icons/ai";
import { JSX, useMemo } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    type: "submit" | "reset" | "button";
    fullWidth?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon?: JSX.Element;
    isLoading?: boolean;
}

export default function Button({ name, type, fullWidth = false, onClick, icon, isLoading = false, className, ...props }: ButtonProps) {

    const buttonClasses = useMemo(() => clsx(
        "capitalize border rounded-sm flex justify-center items-center gap-4 duration-200",
        fullWidth ? "w-full" : "w-fit",
        {
            "cursor-not-allowed opacity-60": isLoading,
            "cursor-pointer": !isLoading,
        },
        className
    ), [fullWidth, isLoading, className]);

    return (
        <button type={type} className={buttonClasses} disabled={isLoading} onClick={onClick} {...props} >
            {isLoading
                ? (<AiOutlineLoading className="w-5 h-5 animate-spin" />)
                : (
                    <>
                        {icon && <span>{icon}</span>}
                        <span className="capitalize text-sm font-semibold text-nowrap">{name}</span>
                    </>
                )}
        </button>
    );
}