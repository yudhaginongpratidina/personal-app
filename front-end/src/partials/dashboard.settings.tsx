import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/credential.slice";

export default function DashboardSettings() {

    const dispatch = useAppDispatch();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(logout());
        window.location.href = "/";
    }

    return (
        <div className="w-full fixed top-16 z-10">
            <div className="container w-full flex justify-end">
                <div className="w-full max-w-sm p-4 border shadow-sm drop-shadow-sm bg-white">
                    <button onClick={handleLogout} className="w-full p-2.5 rounded-md bg-red-500 hover:bg-red-600 text-white duration-100">Log out</button>
                </div>
            </div>
        </div>
    )
}