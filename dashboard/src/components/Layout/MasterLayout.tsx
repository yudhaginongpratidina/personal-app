"use client";
import { useState } from "react";

import Navbar from "@/components/Partials/Navbar";
import Sidebar from "@/components/Partials/Sidebar";
import Main from "@/components/Partials/Main";
import Footer from "@/components/Partials/Footer";

export default function MasterLayout({ children }: { children: React.ReactNode }) {

    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);

    return (
        <>
            <Navbar onToggleSidebar={() => setIsSidebarActive(!isSidebarActive)} />
            <Sidebar isActive={isSidebarActive} onToggle={() => setIsSidebarActive(!isSidebarActive)} />
            <Main>
                { children }
            </Main>
            <Footer />
        </>
    )
}