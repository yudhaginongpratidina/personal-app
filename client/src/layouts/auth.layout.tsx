export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-md flex flex-col gap-4 px-3 py-4 rounded-md border shadow-md bg-white">
                {children}
            </div>
        </div>
    )
}