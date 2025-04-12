import Navbar from "@/components/Layout/Navbar"
import Header from "@/components/Layout/Header"
import MobileNavigation from "@/components/Layout/MobileNavigation"
import MainContent from "@/components/Layout/MainContent"
import Footer from "@/components/Layout/Footer"

export default function Master({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Navbar />
            <Header />
            <MobileNavigation />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </>
    )
}