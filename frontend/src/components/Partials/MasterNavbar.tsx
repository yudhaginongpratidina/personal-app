"use client"
import { useState, useEffect, useRef } from "react"
import { Navbar, NavbarContainer, NavbarBrand, NavbarItems, NavbarActions, NavCallToActionButton, NavLink, NavbarHamburger } from "@/components/UI/Navbar"

export default function MasterNavbar() {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setNavIsOpen(false);
            }
        }

        if (navIsOpen) { document.addEventListener("mousedown", handleClickOutside); }
        return () => { document.removeEventListener("mousedown", handleClickOutside); }
    }, [navIsOpen]);

    return (
        <>
            <Navbar position="fixed" ref={navRef}>
                <NavbarContainer direction="row" className="h-14 bg-gray-50">
                    <NavbarBrand href="/" logo="" name="yudha" />
                    <NavbarItems direction="row">
                        <NavLink href="/">home</NavLink>
                        <NavLink href="/portfolio">portfolio</NavLink>
                        <NavLink href="/article">article</NavLink>
                    </NavbarItems>
                    <NavbarActions>
                        <NavCallToActionButton onClick={() => { }}>Let's Talk</NavCallToActionButton>
                        <NavbarHamburger onClick={() => { setNavIsOpen(!navIsOpen) }} className="md:hidden" />
                    </NavbarActions>
                </NavbarContainer>
                {navIsOpen && (
                    <NavbarContainer direction="col" className="h-fit">
                        <NavbarItems direction="col">
                            <NavLink href="/">home</NavLink>
                            <NavLink href="/portfolio">portfolio</NavLink>
                            <NavLink href="/article">article</NavLink>
                        </NavbarItems>
                    </NavbarContainer>
                )}
            </Navbar>
        </>
    )
}
