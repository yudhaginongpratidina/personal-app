export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-5 rounded-md shadow-md drop-shadow-md bg-white">
                {children}
            </div>
        </main>
    )
}