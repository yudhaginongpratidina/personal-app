import { forwardRef } from "react";

// ui
import { Sidebar, SidebarHeader, SidebarContent, SidebarItems, SidebarItemLink, SidebarFooter } from "@/components/UI/Sidebar";
import Brand from "@/components/UI/Brand";
import IconButton from "@/components/UI/IconButton";

// icons
import { HiMenu } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";
import { IoLanguage } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { FaTags, FaGears  } from "react-icons/fa6";
import { FaMoon, FaUsers, FaUserTie, FaBlogger } from "react-icons/fa";
import { MdOutlineBrowserUpdated, MdWork, MdControlCamera } from "react-icons/md";

// props
interface SidebarProps {
    isActive: boolean;
    onToggle: () => void;
}

const MasterSidebar = forwardRef<HTMLDivElement, SidebarProps>(({ isActive, onToggle }, ref) => {
    if (!isActive) return null;

    return (
        <div ref={ref}>
            <Sidebar>
                <SidebarHeader>
                    <Brand
                        name="dashboard"
                        href="/"
                        icon={<MdControlCamera className="w-6 h-6" />}
                        className="text-black"
                    />
                    <IconButton
                        icon={<HiMenu className="w-5 h-5" />}
                        onClick={onToggle}
                        className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                    />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarItems title="main menu">
                        <SidebarItemLink
                            name="dashboard"
                            pathname="/"
                            icon={<RxDashboard className="w-5 h-5" />}
                        />
                    </SidebarItems>
                    <SidebarItems title="portfolio management">
                        <SidebarItemLink
                            name="my portfolio"
                            pathname="/"
                            icon={<MdWork className="w-5 h-5" />}
                        />
                        <SidebarItemLink
                            name="categories"
                            pathname="/"
                            icon={<TbCategory className="w-5 h-5" />}
                        />
                    </SidebarItems>
                    <SidebarItems title="post management">
                        <SidebarItemLink
                            name="my posts"
                            pathname="/"
                            icon={<FaBlogger className="w-5 h-5" />}
                        />
                        <SidebarItemLink
                            name="categories"
                            pathname="/"
                            icon={<TbCategory className="w-5 h-5" />}
                        />
                        <SidebarItemLink
                            name="tags"
                            pathname="/"
                            icon={<FaTags className="w-5 h-5" />}
                        />
                    </SidebarItems>
                    <SidebarItems title="account management">
                        <SidebarItemLink
                            name="Manage Permission"
                            pathname="/permissions"
                            icon={<FaGears className="w-5 h-5" />}
                        />
                        <SidebarItemLink
                            name="Manage Role"
                            pathname="/roles"
                            icon={<FaUserTie className="w-5 h-5" />}
                        />
                        <SidebarItemLink
                            name="Manage User"
                            pathname="/users"
                            icon={<FaUsers  className="w-5 h-5" />}
                        />
                    </SidebarItems>
                </SidebarContent>
                <SidebarFooter>
                    <IconButton
                        icon={<FaMoon className="w-5 h-5" />}
                        onClick={() => {}}
                        className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                    />
                    <IconButton
                        icon={<MdOutlineBrowserUpdated className="w-5 h-5" />}
                        onClick={() => {}}
                        className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                    />
                    <IconButton
                        icon={<IoLanguage className="w-5 h-5" />}
                        onClick={() => {}}
                        className="border-black hover:border-gray-800 bg-white hover:bg-gray-800 text-black hover:text-white"
                    />
                </SidebarFooter>
            </Sidebar>
        </div>
    );
});

MasterSidebar.displayName = "MasterSidebar";
export default MasterSidebar;
