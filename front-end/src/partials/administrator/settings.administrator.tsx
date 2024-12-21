import { useLocation, Link } from "react-router-dom"

import { MdAccountBox } from "react-icons/md";
import { TbLogout, TbPasswordUser } from "react-icons/tb";

export default function SettingsAdministrator() {
    const notAllowedRoutes = [
        "/$2a$14$rVguT8OkWGWpUCh7YBizz.wQI7hazbul1kAn8DyQDw23G5Yp6Eytq",
        "/$2a$14$PhEQORJUtC1yPod3hcnWNOjBYobhufLqnqnJVKcUU43SbkL0d0Tm2"
    ]

    return (
        <>
            {!notAllowedRoutes.includes(useLocation().pathname) && (
                <div className="w-full fixed top-14 z-10 bg-transparent">
                    <div className="w-full container flex justify-end">
                        <div className="w-full max-w-sm p-4 border rounded-md shadow-md flex flex-col gap-4 bg-white">
                            <div className="w-full h-[80px] border rounded-md">

                            </div>
                            <div className="w-full flex flex-col gap-2.5">
                                <Link to={""}>
                                    <button className="w-full h-12 p-2.5 border rounded-md flex items-center gap-2.5 hover:bg-gray-100 duration-100">
                                        <MdAccountBox className="w-8 h-8" />
                                        <span className="text-md font-semibold">Profile</span>
                                    </button>
                                </Link>
                                <Link to={""}>
                                    <button className="w-full h-12 p-2.5 border rounded-md flex items-center gap-2.5 hover:bg-gray-100 duration-100">
                                        <TbPasswordUser className="w-8 h-8" />
                                        <span className="text-md font-semibold">Change Password</span>
                                    </button>
                                </Link>
                                <Link to={""}>
                                    <button className="w-full h-12 p-2.5 border rounded-md flex items-center gap-2.5 text-white bg-red-500 hover:bg-red-600 duration-100">
                                        <TbLogout className="w-8 h-8" />
                                        <span className="text-md font-semibold">Logout</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}