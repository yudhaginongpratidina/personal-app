// ----------------------------------------------------------------------------------------
// import dependencies
// ----------------------------------------------------------------------------------------
"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";

// ----------------------------------------------------------------------------------------
// import ui components
// ----------------------------------------------------------------------------------------
import { Navbar, NavbarContainer, NavbarDesktop, NavbarMobile, NavItems, NavLink } from "@/components/UI/Navbar"
import Button from "@/components/UI/Button";

export default function AppLayout({ children }: { children: React.ReactNode }) {

    // ----------------------------------------------------------------------------------------
    // initialize path and state
    // ----------------------------------------------------------------------------------------
    const pathname = usePathname()
    const [mobile_navbar_active, set_mobile_navbar_active] = useState<boolean>(false);

    return (
        <>
            <Navbar>
                <NavbarContainer>
                    <NavbarDesktop>
                        {/* ---------------------------------------------------------------------------------------- */}
                        {/* brand                                                                                    */}
                        {/* ---------------------------------------------------------------------------------------- */}
                        <NavItems>
                            <h1 className="font-bold">LOGO</h1>
                        </NavItems>

                        {/* ---------------------------------------------------------------------------------------- */}
                        {/* show only on non dashboard pages                                                         */}
                        {/* ---------------------------------------------------------------------------------------- */}
                        {!pathname.startsWith("/dashboard") && (
                            <>
                                <NavItems className="hidden md:flex">
                                    <NavLink href="/home">home</NavLink>
                                    <NavLink href="/portfolio">portfolio</NavLink>
                                    <NavLink href="/article">article</NavLink>
                                    <NavLink href="/market">market</NavLink>
                                </NavItems>
                                <NavItems className="md:hidden">
                                    <Button
                                        icon={`${mobile_navbar_active ? "io5/IoClose" : "io5/IoMenuSharp"}`}
                                        onClick={() => set_mobile_navbar_active(!mobile_navbar_active)}
                                    />
                                </NavItems>
                            </>
                        )}
                    </NavbarDesktop>
                    {/* ---------------------------------------------------------------------------------------- */}
                    {/* show only on non dashboard pages                                                         */}
                    {/* ---------------------------------------------------------------------------------------- */}
                    {!pathname.startsWith("/dashboard") && (
                        <NavbarMobile isActive={mobile_navbar_active}>
                            <NavLink href="/home">home</NavLink>
                            <NavLink href="/portfolio">portfolio</NavLink>
                            <NavLink href="/article">article</NavLink>
                            <NavLink href="/market">market</NavLink>
                        </NavbarMobile>
                    )}
                </NavbarContainer>
            </Navbar>
            {children}
        </>
    )
}