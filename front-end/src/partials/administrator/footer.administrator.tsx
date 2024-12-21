import { useLocation } from "react-router-dom"

export default function FooterAdministrator() {
    const location = useLocation();

    const notAllowedRoutes = [
        "/$2a$14$rVguT8OkWGWpUCh7YBizz.wQI7hazbul1kAn8DyQDw23G5Yp6Eytq",
        "/$2a$14$PhEQORJUtC1yPod3hcnWNOjBYobhufLqnqnJVKcUU43SbkL0d0Tm2"
    ]

    return (
        <>
            {!notAllowedRoutes.includes(location.pathname) && (
                <footer className="w-full h-14 flex items-center justify-center border-t shadow-sm drop-shadow-sm bg-white">
                    <span>System created with ❤️ by <span className="font-semibold">Yudha Ginong Pratidina</span></span>
                </footer>
            )}
        </>
    )
}