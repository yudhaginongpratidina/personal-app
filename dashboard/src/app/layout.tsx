"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../utils/disable-console.ts";

import Master from "@/components/Master";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased select-none`}>
                <Master>
                    {children}
                </Master>
            </body>
        </html>
    );
}