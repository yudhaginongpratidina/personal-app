import { Link } from "react-router-dom"

export const Form = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col">
            {children}
        </div>
    )
}

export const FormHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col gap-1.5 p-4">
            {children}
        </div>
    )
}

export const FormTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-2xl font-semibold">{children}</h1>
    )
}

export const FormDescription = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-medium text-gray-400">{children}</span>
    )
}

export const FormBody = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col gap-4 p-4">
            {children}
        </div>
    )
}


export const FormFooter = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex justify-center items-center gap-1.5 p-4">
            {children}
        </div>
    )
}

export const FormLinkAlternative = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link to={href}>
            <span className="text-md font-medium hover:font-semibold text-gray-500 hover:text-blue-500">{children}</span>
        </Link>
    )
}