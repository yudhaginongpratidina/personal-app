import NavbarDashboardPartial from "@/partials/navbar_dashboard.partial"
import FooterDashboardPartial from "@/partials/footer_dashboard.patial"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavbarDashboardPartial />
            <main className="w-full min-h-screen pt-20 bg-gray-100">
                <div className="w-full container p-4 rounded-md bg-white">
                    {children}
                </div>
            </main>
            <FooterDashboardPartial />
        </>
    )
}