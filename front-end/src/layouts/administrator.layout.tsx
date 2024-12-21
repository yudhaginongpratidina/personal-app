import { useState } from "react"

import NavbarAdministrator from "@/partials/administrator/navbar.administrator"
import SidebarAdministrator from "@/partials/administrator/sidebar.administrator"
import SettingsAdministrator from "@/partials/administrator/settings.administrator"
import FooterAdministrator from "@/partials/administrator/footer.administrator"

type AdministratorLayoutProps = {
    children: React.ReactNode
    className?: string

    full_screen?: boolean
    item_center?: boolean
}

export default function AdministratorLayout(props: AdministratorLayoutProps) {
    const { children, full_screen, item_center, className } = props

    const [isSidebar, setIsSidebar] = useState<boolean>(false);
    const [isSettings, setIsSettings] = useState<boolean>(false);

    return (
        <>
            <NavbarAdministrator onClickSidebar={() => setIsSidebar(!isSidebar)} onClickSettings={() => setIsSettings(!isSettings)} />

            {isSettings && (<SettingsAdministrator />)}

            <div className={`w-full bg-gray-50 ${full_screen ? "min-h-screen" : ""} ${item_center ? "flex items-center justify-center p-4" : "flex"} ${className}`}>
                {isSidebar && (<SidebarAdministrator onClick={() => setIsSidebar(!isSidebar)} />)}
                {children}
            </div>

            <FooterAdministrator />
        </>
    )
}