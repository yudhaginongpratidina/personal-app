import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Login",
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="w-full min-h-screen px-4 md:px-16 flex justify-center items-center">
            {children}
        </main>
    )
}