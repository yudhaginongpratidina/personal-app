import { JSX, useMemo } from "react";

interface BranProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: JSX.Element;
    name: string;
    onClick: () => void;
    className?: string;
}

export default function Brand({ icon, name, onClick, className = "", ...props }: BranProps) {

    const brandClassName = useMemo(() => {
        return `flex items-center gap-2 ${className}`;
    }, [className]);

    return (
        <button type="button" onClick={onClick} className={brandClassName} {...props}>
            {icon}
            <h1 className="text-lg font-bold uppercase">{name}</h1>
        </button>
    )
}