import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Article",
}


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            { children }
        </>
    )
}