// REACT
import { useLocation } from "react-router-dom"

export default function Footer() {

    // INIT
    const location = useLocation()

    // PATH
    const pathName = [
        "/login",
        "/register"
    ];

    // RENDER
    if (pathName.includes(location.pathname)) {
        return null;
    }
    
    return (
        <footer className="fixed bottom-0 z-10 w-full drop-shadow-sm border-t bg-white">
            <div className="container w-full h-14 box-border flex justify-between items-center"></div>
        </footer>)
}