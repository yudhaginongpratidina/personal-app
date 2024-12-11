interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-2.5 bg-white">
            <div className="w-full max-w-md border-y-2 border-x-2 shadow-md border-x-gray-100 border-blue-500">
                { children }
            </div>
        </div>
    )
}