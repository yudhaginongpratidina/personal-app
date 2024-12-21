import { useLocation } from "react-router-dom"

import { ImMenu } from "react-icons/im";

export default function SidebarAdministrator({onClick} : {onClick: () => void}) {
    const location = useLocation();

    const notAllowedRoutes = [
        "/$2a$14$rVguT8OkWGWpUCh7YBizz.wQI7hazbul1kAn8DyQDw23G5Yp6Eytq",
        "/$2a$14$PhEQORJUtC1yPod3hcnWNOjBYobhufLqnqnJVKcUU43SbkL0d0Tm2"
    ]

    return (
        <>
            {!notAllowedRoutes.includes(location.pathname) && (
                <aside className="w-full fixed left-0 top-0 bottom-0 z-10 max-w-sm min-h-screen flex flex-col border-r shadow-sm bg-gray-100">
                    <div className="w-full h-14 flex items-center justify-end border-b px-4 bg-white">
                        <button onClick={onClick} className="border p-1.5 rounded-md border-black bg-white hover:bg-black hover:text-white duration-100">
                            <ImMenu className="text-2xl" />
                        </button>
                    </div>
                </aside>
            )}
        </>
    )
}