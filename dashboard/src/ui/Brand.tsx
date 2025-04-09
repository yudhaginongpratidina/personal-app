import { JSX } from "react";
import Link from "next/link";

interface BrandProps {
    href: string;
    name: string;
    icon: JSX.Element;
}

export default function Brand({ href, name, icon }: BrandProps) {
    return (
        <Link href={href} className="flex items-center gap-2">
            <span>{icon}</span> 
            <span className="uppercase font-semibold">{name}</span>
        </Link>
    )
}