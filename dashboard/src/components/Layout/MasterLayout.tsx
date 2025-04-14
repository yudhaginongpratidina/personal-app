"use client";
import { useEffect, useRef, useState } from "react";

import MasterNavbar from "../Partials/MasterNavbar";
import MasterSidebar from "../Partials/MasterSidebar";
import MasterMain from "@/components/Partials/MasterMain";
import MasterFooter from "../Partials/MasterFooter";

export default function MasterLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarActive, setIsSidebarActive] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isSidebarActive &&
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setIsSidebarActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarActive]);

    return (
        <>
            <MasterNavbar onToggleSidebar={() => setIsSidebarActive(!isSidebarActive)} />
            <MasterSidebar
                ref={sidebarRef}
                isActive={isSidebarActive}
                onToggle={() => setIsSidebarActive(!isSidebarActive)}
            />
            <MasterMain>
                {children}
            </MasterMain>
            <MasterFooter />
        </>
    );
}
