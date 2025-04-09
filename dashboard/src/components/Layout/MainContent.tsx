"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";

export default function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === "/register" || pathname === "/login";

    // Tentukan kelas berdasarkan kondisi
    const mainClasses = clsx(
        "w-full min-h-screen flex flex-col gap-4 bg-gray-100",
        {
            "p-4 justify-center items-center": isAuthPage,
            "pt-20 md:pt-16 px-4 md:px-14": !isAuthPage,
        }
    )

    return (
        <main className={mainClasses}>
            {children}
        </main>
    );
}
