import Link from "next/link";
import { JSX, useMemo } from "react";

interface BranProps {
    name: string;
    href: string;
    icon: JSX.Element;
    className?: string;
}

export default function Brand({ name, href, icon, className = "", ...props }: BranProps) {

    const brandClassName = useMemo(() => {
        return `flex items-center gap-2 ${className}`;
    }, [className]);

    return (
        <Link href={href || "/"} className={brandClassName} {...props}>
            {icon}
            <h1 className="text-lg font-bold uppercase">{name}</h1>
        </Link>
    )
}