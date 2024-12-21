import { IoSettingsSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";

export default function DashboardNavbar({ onClickSidebar, onClickSettings } : { onClickSidebar: () => void, onClickSettings: () => void }) {
    return (
        <nav className="w-full fixed top-0 z-10 border-b shadow-sm drop-shadow-sm bg-white">
            <div className="container w-full h-14 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1 className="text-lg font-semibold">DASHBOARD</h1>
                    <button onClick={onClickSidebar}>
                        <ImMenu className="text-2xl" />
                    </button>
                </div>
                <button onClick={onClickSettings}>
                    <IoSettingsSharp className="text-2xl" />
                </button>
            </div>
        </nav>
    )
}