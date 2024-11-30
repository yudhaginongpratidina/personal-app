// PARTIALS
import Navbar from "../../partials/Navbar"
import Footer from "../../partials/Footer"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="w-full min-h-screen flex justify-center items-center p-4 bg-gray-200">
                <div className="w-full max-w-lg p-4 shadow-sm drop-shadow-sm bg-white">
                    { children }
                </div>
            </main>
            <Footer />
        </>
    )
}