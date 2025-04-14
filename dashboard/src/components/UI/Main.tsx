export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen pt-16 px-4 md:px-16 flex flex-col gap-4 bg-gray-200">
            { children }
        </main>
    )
}