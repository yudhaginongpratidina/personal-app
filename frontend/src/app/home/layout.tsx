import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Home",
}


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen pt-14">
            { children }
        </div>
    )
}