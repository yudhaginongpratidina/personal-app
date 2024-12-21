import { useState } from "react"

import NavbarClient from "@/partials/client/navbar.client"
import SidebarClient from "@/partials/client/sidebar.client"
import SettingsClient from "@/partials/client/settings.client"
import FooterClient from "@/partials/client/footer.client"

type ClientLayoutProps = {
    children: React.ReactNode
    className?: string

    full_screen?: boolean
    item_center?: boolean
}

export default function ClientLayout(props: ClientLayoutProps) {

    const { children, className, full_screen, item_center } = props

    const [isSidebar, setIsSidebar] = useState<boolean>(false);
    const [isSettings, setIsSettings] = useState<boolean>(false);

    return (
        <>
            <NavbarClient onClickSidebar={() => setIsSidebar(!isSidebar)} onClickSettings={() => setIsSettings(!isSettings)} />
            {isSettings && (<SettingsClient />)}
            <div className={`w-full bg-gray-50 ${full_screen ? "min-h-screen" : ""} ${item_center ? "flex items-center justify-center p-4" : "flex"} ${className}`}>
                {isSidebar && (<SidebarClient onClick={() => setIsSidebar(!isSidebar)} />)}
                {children}
            </div>
            <FooterClient/>
        </>
    )
}