// REACT
import { useNavigate, useLocation, Link } from "react-router-dom";

// REDUX
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/Slice/AuthSlice";

// UI COMPONENT
import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";

export default function Navbar() {

    // INIT
    const navigate = useNavigate();
    const location = useLocation();

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
        <nav className="fixed top-0 z-10 w-full drop-shadow-sm border-b bg-white">
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
                        <Button onClick={handleLogout} variant="default" className="px-3 py-1.5">Logout</Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
