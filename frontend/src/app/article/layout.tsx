import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Article",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen flex flex-col pt-16 px-4 md:px-16 items-center">
            <div className="w-full max-w-6xl flex flex-col gap-2.5">
                {children}
            </div>
        </main>
    )
}