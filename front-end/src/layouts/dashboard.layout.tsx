import { useState } from "react";

import DashboardNavbar from "@/partials/dashboard.navbar";
import DashboardSettings from "@/partials/dashboard.settings";
import DashboardSidebar from "@/partials/dashboard.sidebar";
import DashboardFooter from "@/partials/dashboard.footer";

export default function DashboardLayout({ title, buttonBack, children }: { title?: string, buttonBack?: boolean, children: React.ReactNode }) {

    const [isSettings, setIsSettings] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState<boolean>(false);

    const handleBack = async (e: React.MouseEvent) => {
        e.preventDefault();
        window.history.back();
    }

    return (
        <>
            <DashboardNavbar onClickSidebar={() => setIsSidebar(!isSidebar)} onClickSettings={() => setIsSettings(!isSettings)} />
            {isSettings && ( <DashboardSettings />)}

            <main className="w-full flex bg-slate-100">
                {isSidebar && (<DashboardSidebar onClick={() => setIsSidebar(!isSidebar)} />)}
                <div className="w-full pt-20 min-h-screen flex flex-col gap-4 container">
                    <div className="w-full flex justify-between items-center">
                        {title && <h1 className="text-xl font-semibold uppercase">{title}</h1>}
                        {buttonBack && <button onClick={handleBack} className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>}
                    </div>
                    {children}
                </div>
            </main>
            
            <DashboardFooter />
        </>
    )
}