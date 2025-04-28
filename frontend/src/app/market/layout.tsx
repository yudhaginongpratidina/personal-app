import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Market",
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}