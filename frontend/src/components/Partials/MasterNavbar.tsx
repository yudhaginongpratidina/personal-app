"use client"

import { useState, useEffect, useRef, useCallback } from "react";
import {
    Navbar,
    NavbarContainer,
    NavbarBrand,
    NavbarItems,
    NavbarActions,
    NavCallToActionButton,
    NavLink,
    NavActionButton,
} from "@/components/UI/Navbar";

export default function MasterNavbar() {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    const toggleDarkMode = () => {
        const theme = darkMode ? "light" : "dark";
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
        setDarkMode(!darkMode);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setNavIsOpen(false);
        }
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const theme = savedTheme || (prefersDark ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
        setDarkMode(theme === "dark");
    }, []);

    useEffect(() => {
        if (navIsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navIsOpen, handleClickOutside]);

    return (
        <Navbar position="fixed" ref={navRef}>
            <NavbarContainer direction="row" className="h-14">
                <NavbarBrand href="/" logo="" name="yudha" />
                <NavbarItems direction="row">
                    <NavLink href="/">home</NavLink>
                    <NavLink href="/portfolio">portfolio</NavLink>
                    <NavLink href="/article">article</NavLink>
                </NavbarItems>
                <NavbarActions>
                    <NavCallToActionButton onClick={() => { }}>Let's Talk</NavCallToActionButton>
                    <NavActionButton
                        icon={darkMode ? "io/IoMdSunny" : "io/IoMdMoon"}
                        onClick={toggleDarkMode}
                    />
                    <NavActionButton
                        icon={navIsOpen ? "io/IoMdClose" : "io/IoMdMenu"}
                        onClick={() => setNavIsOpen(!navIsOpen)}
                        className="md:hidden"
                    />
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
    );
}
