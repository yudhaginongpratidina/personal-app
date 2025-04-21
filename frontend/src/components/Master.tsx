import MasterNavbar from "@/components/Partials/MasterNavbar";
import MasterMain from "@/components/Partials/MasterMain";
import MasterHeader from "@/components/Partials/MasterHeader";
import MasterSidebar from "@/components/Partials/MasterSidebar";
import MasterFooter from "@/components/Partials/MasterFooter";

export default function Master({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <MasterNavbar />
            <MasterSidebar />
            <MasterMain>
                <MasterHeader />
                {children}
                <MasterFooter />
            </MasterMain>
        </>
    )
}