import DashboardLayout from "@/layouts/dashboard.layout";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

export default function AdminView() {
    return (
        <DashboardLayout>
            <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Users</span>
                    </button>
                </Link>
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Portfolio</span>
                    </button>
                </Link>
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Skill</span>
                    </button>
                </Link>
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Category Learning Path</span>
                    </button>
                </Link>
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Level Learning Path</span>
                    </button>
                </Link>
                <Link to={"/admin/user"}>
                    <button className="w-full h-[100px] flex flex-col gap-2.5 justify-center items-center border shadow-sm drop-shadow-sm bg-white">
                        <FaUserFriends className="text-4xl" />
                        <span className="text-sm font-semibold">Learning Path</span>
                    </button>
                </Link>
            </div>
        </DashboardLayout>
    )
}