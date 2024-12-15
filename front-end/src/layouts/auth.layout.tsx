export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen flex justify-center items-center p-4 bg-slate-100">
            <div className="w-full max-w-md p-4 flex flex-col gap-4 rounded-sm border shadow-sm drop-shadow-sm bg-white">
                { children }
            </div>
        </main>
    )
}