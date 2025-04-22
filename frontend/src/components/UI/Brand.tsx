import Link from "next/link"

type BrandProps = {
    children: React.ReactNode
}

export const Brand = ({ children }: Readonly<BrandProps>) => {
    return (
        <div className="flex items-center gap-2.5">
            {children}
        </div>
    )
}

type BrandLogoProps = {
    href: string
    className?: string
}

export const BrandLogo = ({ href, className }: Readonly<BrandLogoProps>) => {
    return (
        <Link href={href || "/"}>
            <div className={`h-9 w-9 rounded-md ${className}`}>

            </div>
        </Link>
    )
}

type BrandNameProps = {
    href: string
    children: React.ReactNode
    className?: string
}

export const BrandName = ({ href, className, children }: Readonly<BrandNameProps>) => {
    return (
        <Link href={href || "/"} className={`${className}`}>
            <h1 className="text-lg font-bold uppercase">{children}</h1>
        </Link>
    )
}