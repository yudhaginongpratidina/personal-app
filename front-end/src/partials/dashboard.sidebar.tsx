import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";

export default function DashboardSidebar({onClick} : {onClick: () => void}) {
    return (
        <div className="fixed z-10 w-full max-w-xs min-h-screen flex flex-col gap-0.5 border-r shadow-sm drop-shadow-sm bg-gray-100">
            <div className="w-full h-14 flex items-center justify-between gap-4 px-4 border-b shadow-sm drop-shadow-sm bg-white">
                <h1 className="text-lg font-semibold">DASHBOARD</h1>
                <button onClick={onClick}>
                    <ImMenu className="text-2xl" />
                </button>
            </div>

            <div className="w-full flex flex-col gap-1.5">
                <button className="w-full h-12 flex items-center px-4 bg-black text-white">
                    <h1 className="text-md font-semibold">USER & ROLE MANAGEMENT</h1>
                </button>
                <ul className="w-full flex flex-col gap-0.5">
                    <li className="w-full h-12 flex items-center px-4 bg-gray-50 hover:bg-white">
                        <Link to="/dashboard/users" className="w-full h-full flex items-center gap-2 text-md font-semibold">List Role</Link>
                    </li>
                    <li className="w-full h-12 flex items-center px-4 bg-gray-50 hover:bg-white">
                        <Link to="/dashboard/users" className="w-full h-full flex items-center gap-2 text-md font-semibold">List User</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
