"use client"


// --------------------------------------------------------------------------------------------
// DEPENDENCIES
// --------------------------------------------------------------------------------------------
import { useState, useEffect, useCallback } from "react";


// --------------------------------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------------------------------
import { Navbar, NavContainer, NavItems, NavLink } from "@/components/UI/Navbar";
import { Brand, BrandLogo, BrandName } from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";


// --------------------------------------------------------------------------------------------
// APP LAYOUT
// --------------------------------------------------------------------------------------------
export default function AppLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    // --------------------------------------------------------------------------------------------
    // STATE
    // --------------------------------------------------------------------------------------------
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);


    // --------------------------------------------------------------------------------------------
    // FUNCTION FOR SWITCH DARK MODE OR LIGHT MODE
    // --------------------------------------------------------------------------------------------
    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => {
            const theme = prev ? "light" : "dark";
            localStorage.setItem("theme", theme);
            document.documentElement.setAttribute("data-theme", theme);
            return !prev;
        });
    }, []);


    // --------------------------------------------------------------------------------------------
    // USE EFFECT FOR LOAD THEME
    // --------------------------------------------------------------------------------------------
    useEffect(() => {
        let isMounted = true;

        const initializeTheme = () => {
            const savedTheme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const theme = savedTheme || (prefersDark ? "dark" : "light");

            if (isMounted) {
                document.documentElement.setAttribute("data-theme", theme);
                setDarkMode(theme === "dark");
            }
        };

        initializeTheme();
        return () => { isMounted = false; };
    }, []);


    // --------------------------------------------------------------------------------------------
    // LIST LINK
    // --------------------------------------------------------------------------------------------
    const NAV_LINKS_FOR_ROOT = [
        { href: "/", name: "home" },
        { href: "/", name: "portfolio" },
        { href: "/", name: "article" },
    ];


    // --------------------------------------------------------------------------------------------
    // STYLE
    // --------------------------------------------------------------------------------------------
    const STYLE = {
        NAV_CONTAINER: {
            DESKTOP: "h-14 bg-white dark:bg-gray-800",
            MOBILE: "py-4 md:hidden bg-white dark:bg-gray-800"
        },
        NAV_BRAND: {
            LOGO: "bg-black dark:bg-white",
            NAME: "text-black dark:text-white"
        },
        NAV_LINK: "text-black dark:text-white",
        NAV_BUTTON: "text-black dark:text-white border-black dark:border-white"
    };

    return (
        <>
            <Navbar position="fixed-top">
                <NavContainer className={STYLE.NAV_CONTAINER.DESKTOP}>
                    <NavItems direction="row">
                        <Brand>
                            <BrandLogo href="/" className={STYLE.NAV_BRAND.LOGO} />
                            <BrandName href="/" className={STYLE.NAV_BRAND.NAME}>master</BrandName>
                        </Brand>
                    </NavItems>
                    <NavItems direction="row" className="hidden md:flex">
                        {NAV_LINKS_FOR_ROOT.map(({ href, name }) => (
                            <NavLink key={name} href={href} name={name} className={STYLE.NAV_LINK} />
                        ))}
                    </NavItems>
                    <NavItems direction="row">
                        <IconButton
                            icon={darkMode ? "io/IoMdSunny" : "io/IoMdMoon"}
                            onClick={toggleDarkMode}
                            className={STYLE.NAV_BUTTON}
                        />
                        <IconButton
                            icon="io5/IoMenu"
                            onClick={() => setNavIsOpen(!navIsOpen)}
                            className={`md:hidden ${STYLE.NAV_BUTTON}`}
                        />
                    </NavItems>
                </NavContainer>
                {navIsOpen && (
                    <NavContainer className={STYLE.NAV_CONTAINER.MOBILE}>
                        <NavItems direction="column">
                            {NAV_LINKS_FOR_ROOT.map(({ href, name }) => (
                                <NavLink key={name} href={href} name={name} className={STYLE.NAV_LINK} />
                            ))}
                        </NavItems>
                    </NavContainer>
                )}
            </Navbar>
            {children}
        </>
    )
}
