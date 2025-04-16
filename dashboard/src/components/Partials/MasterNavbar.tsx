// client component
"use client"

// next or react
import { usePathname } from "next/navigation";
import { useState } from "react";

// ui
import { Navbar, NavbarContainer, NavbarLeft, NavbarRight, NavbarAvatar } from "@/components/UI/Navbar";
import Brand from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";
import Button from "@/components/UI/Button";
import Modal from "@/components/UI/Modal";

// icons
import { FaLaptopCode, FaMoon, FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

// interfaces
interface NavbarProps {
    onToggleSidebar?: () => void;
}

export default function MasterNavbar({ onToggleSidebar }: NavbarProps) {

    const pathname = usePathname();
    const [confirmLogout, setConfirmLogout] = useState<boolean>(false)

    return (
        <>
            <Navbar fixed={true}>
                <NavbarContainer>
                    <NavbarLeft>
                        {(pathname === "/auth") && (
                            <Brand
                                name="dashboard"
                                href="/"
                                icon={<FaLaptopCode className="w-6 h-6" />}
                                className="text-black"
                            />
                        )}
                        {(!(pathname === "/auth")) && (
                            <IconButton
                                icon={<HiMenu className="w-5 h-5" />}
                                onClick={onToggleSidebar || (() => { })}
                                className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                            />
                        )}
                    </NavbarLeft>
                    <NavbarRight>
                        {pathname === "/auth" && (
                            <IconButton
                                icon={<FaMoon className="w-5 h-5" />}
                                onClick={() => { }}
                                className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                            />
                        )}
                        {pathname !== "/auth" && (
                            <>
                                <IconButton
                                    icon={<IoNotifications className="w-5 h-5" />}
                                    onClick={() => { }}
                                    className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                                />
                                <NavbarAvatar>
                                    <Button
                                        fullWidth
                                        name="profile"
                                        type="button"
                                        icon={<FaUser className="w-4 h-4" />}
                                        onClick={() => { window.location.href = "/profile" }}
                                        className="justify-start py-2 px-1.5 border-transparent hover:border-gray-100 hover:bg-gray-100"
                                    />
                                    <Button
                                        fullWidth
                                        name="activity log"
                                        type="button"
                                        icon={<FiActivity className="w-4 h-4" />}
                                        className="justify-start py-2 px-1.5 border-transparent hover:border-gray-100 hover:bg-gray-100"
                                    />
                                    <hr className="w-full text-gray-300" />
                                    <Button
                                        fullWidth
                                        name="log out"
                                        type="button"
                                        onClick={() => setConfirmLogout(true)}
                                        className="py-2 px-4 border-red-500 bg-red-500 hover:bg-red-600 text-white"
                                    />
                                </NavbarAvatar>
                            </>
                        )}
                    </NavbarRight>
                </NavbarContainer>
            </Navbar>
            <Modal
                title="Log out"
                isActive={confirmLogout}
                closeModal={() => setConfirmLogout(false)}
                className="max-w-md"
            >
                <p className="text-sm text-gray-600">
                    Time to disconnect?
                    Hit logout and we’ll keep things safe for your return.
                </p>
                <Button
                    fullWidth
                    name="log out"
                    type="button"
                    className="py-2 px-4 border-red-500 bg-red-500 hover:bg-red-600 text-white"
                />
            </Modal>
        </>
    )
}