"use client"
import { useState, useEffect, useCallback } from "react";
import { Navbar, NavContainer, NavItems, NavLink } from "@/components/UI/Navbar";
import { Brand, BrandLogo, BrandName } from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";

export default function AppLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => {
            const theme = prev ? "light" : "dark";
            localStorage.setItem("theme", theme);
            document.documentElement.setAttribute("data-theme", theme);
            return !prev;
        });
    }, []);

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

        return () => {
            isMounted = false;
        };
    }, []);

    const NAV_LINKS = [
        { href: "/", name: "Home" },
        { href: "/", name: "Portfolio" },
        { href: "/", name: "Article" },
    ];

    const STYLE = {
        NAV_CONTAINER_DESKTOP: "h-14 bg-white dark:bg-gray-900",
        NAV_CONTAINER_MOBILE: "py-4 md:hidden bg-white dark:bg-gray-800",
        NAV_BRAND: {
            LOGO: "bg-gray-700 dark:bg-gray-200",
            NAME: "text-gray-700 dark:text-gray-200"
        },
        NAV_LINK: "text-gray-700 dark:text-gray-200",
        NAV_BUTTON: "border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-200"
    }

    return (
        <>
            <Navbar position="fixed-top">
                <NavContainer className={STYLE.NAV_CONTAINER_DESKTOP}>
                    <NavItems direction="row">
                        <Brand>
                            <BrandLogo href="/" className={STYLE.NAV_BRAND.LOGO} />
                            <BrandName href="/" className={STYLE.NAV_BRAND.NAME}>master</BrandName>
                        </Brand>
                    </NavItems>
                    <NavItems direction="row" className="hidden md:flex">
                        {NAV_LINKS.map(({ href, name }) => (
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
                    <NavContainer className={STYLE.NAV_CONTAINER_MOBILE}>
                        <NavItems direction="column">
                            {NAV_LINKS.map(({ href, name }) => (
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
