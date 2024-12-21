import { useState } from "react";

import { IoSettingsSharp } from "react-icons/io5";

import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/credential.slice";

export default function DashboardLayout({ title, buttonBack, children }: { title?: string, buttonBack?: boolean, children: React.ReactNode }) {

    const dispatch = useAppDispatch();

    const [isSettings, setIsSettings] = useState<boolean>(false);

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(logout());
        window.location.href = "/";
    }

    const handleBack = async (e: React.MouseEvent) => {
        e.preventDefault();
        window.history.back();
    }

    return (
        <>
            <nav className="w-full fixed top-0 z-10 border-b shadow-sm drop-shadow-sm bg-white">
                <div className="container w-full h-14 flex items-center justify-between">
                    <h1 className="text-lg font-semibold">DASHBOARD</h1>
                    <button onClick={() => setIsSettings(!isSettings)}>
                        <IoSettingsSharp className="text-2xl" />
                    </button>
                </div>
            </nav>
            {isSettings && (
                <div className="w-full fixed top-16 z-10">
                    <div className="container w-full flex justify-end">
                        <div className="w-full max-w-sm p-4 border shadow-sm drop-shadow-sm bg-white">
                            <button onClick={handleLogout} className="w-full p-2.5 rounded-md bg-red-500 hover:bg-red-600 text-white duration-100">Log out</button>
                        </div>
                    </div>
                </div>
            )}
            <main className="w-full pt-20 bg-slate-100">
                <div className="w-full min-h-screen flex flex-col gap-4 container">
                    <div className="w-full flex justify-between items-center">
                        {title && <h1 className="text-xl font-semibold uppercase">{title}</h1>}
                        {buttonBack && <button onClick={handleBack} className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>}
                    </div>
                    {children}
                </div>
            </main>
            <footer className="w-full fixed bottom-0 z-10 h-14 flex items-center justify-center border-t shadow-sm drop-shadow-sm bg-white">
                <span>System created with ❤️ by <span className="font-semibold">Yudha Ginong Pratidina</span></span>
            </footer>
        </>
    )
}