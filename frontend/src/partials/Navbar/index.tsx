// REACT
import { useNavigate } from "react-router-dom";

// REDUX
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/Slice/AuthSlice";

export default function Navbar() {

    // INIT
    const navigate = useNavigate()

    // REDUX
    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAppSelector(state => state.auth)

    // HANDLERS
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <nav className="fixed top-0 z-10 w-full drop-shadow-sm border-b bg-white">
            <div className="container w-full h-14 box-border flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                    <h1 className="text-lg font-bold">AUTH</h1>
                </div>
                <div className="flex items-center gap-1.5">
                    { !isAuthenticated && (
                        <>
                            <button className="border border-black py-1.5 px-3">Login</button>
                            <button className="border border-black bg-black text-white py-1.5 px-3">Register</button>
                        </>
                    )}

                    { isAuthenticated && (
                        <button onClick={handleLogout} className="border border-black bg-black text-white py-1.5 px-3">Logout</button>
                    )}
                </div>
            </div>
        </nav>
    )
}