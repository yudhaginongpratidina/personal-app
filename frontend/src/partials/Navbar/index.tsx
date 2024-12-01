// REACT
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";

// REDUX
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/Slice/AuthSlice";

// UI COMPONENT
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";

// ICONS
import { FaUser } from "react-icons/fa";

export default function Navbar() {

    // INIT
    const navigate = useNavigate();
    const location = useLocation();

    // STATE
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);

    // PATH
    const pathName = [
        "/login",
        "/register"
    ];

    // REDUX
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useAppSelector(state => state.auth);

    // HANDLERS
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    // RENDER
    if (pathName.includes(location.pathname)) {
        return null;
    }

    return (
        <>
            <nav className="fixed top-0 z-10 w-full border-b shadow-sm bg-white">
                <div className="container w-full h-14 box-border flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-1.5">
                        <h1 className="text-lg font-bold">YUDHA DEV</h1>
                    </Link>
                    <div className="flex items-center gap-1.5">
                        {!isAuthenticated && (
                            <>
                                <ButtonLink to="/login" variant="outline">Login</ButtonLink>
                                <ButtonLink to="/register" variant="default">Register</ButtonLink>
                            </>
                        )}
                        {isAuthenticated && (
                            <>
                                <Button onClick={() => setIsAvatarOpen(!isAvatarOpen)} variant="outline" className="p-1.5">
                                    <FaUser className="w-5 h-5" />
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
            {isAvatarOpen &&
                <div className="w-full fixed top-16">
                    <div className="w-full container flex justify-end">
                        <div className="w-full max-w-sm border shadow-md flex flex-col bg-white">
                            <div className="w-full p-4 flex items-center justify-between border-b border-black">
                                <span className="text-md font-semibold">USER@GMAIL.COM</span>
                                <span className="text-sm py-1.5 px-4 font-semibold rounded-lg text-white bg-black">ADMIN</span>
                            </div>
                            <div className="w-full p-4 flex flex-col gap-2.5">
                                <Link to={"/dashboard"} className="w-full py-1.5 px-3 hover:bg-gray-100">Dashboard</Link>
                                <Link to={"/account"} className="w-full py-1.5 px-3 hover:bg-gray-100">Profile</Link>
                                <Link to={"/account"} className="w-full py-1.5 px-3 hover:bg-gray-100">Settings</Link>
                            </div>
                            <div className="w-full p-4 border-t border-black">
                                <Button onClick={handleLogout} variant="default" className="w-full">Logout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
