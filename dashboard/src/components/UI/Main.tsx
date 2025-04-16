export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full pt-16 px-4 md:px-16 flex flex-col gap-4 bg-gray-200">
            <div className="w-full max-w-4xl mx-auto min-h-screen">
                { children }
            </div>
        </main>
    )
}