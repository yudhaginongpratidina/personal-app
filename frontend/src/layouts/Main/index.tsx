// PARTIALS
import Navbar from "../../partials/Navbar"
import Footer from "../../partials/Footer"

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}