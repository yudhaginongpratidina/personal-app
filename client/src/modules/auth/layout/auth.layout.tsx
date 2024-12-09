import { Link } from "react-router-dom"

interface AuthLayoutProps {
    title: string
    description: string
    children: React.ReactNode
    link_url: string
    link_text: string
}

export default function AuthLayout({title, description, children, link_url, link_text}: AuthLayoutProps) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-2.5 bg-white">
            <div className="w-full max-w-md border-y-4 border-x-2 shadow-md border-x-gray-100 border-blue-500">
                <div className="w-full p-2.5 border-b-2">
                    <h1 className="text-2xl font-semibold"> { title } </h1>
                    <span>{description}</span>
                </div>
                { children }
                <div className="w-full p-2.5 border-t-2 flex justify-center">
                    <Link to={link_url}>
                        <span className="text-sm font-semibold text-gray-500 hover:text-blue-500">
                            { link_text }
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}