import { IoCubeSharp } from "react-icons/io5";

export default function NavbarPortfolio() {
    return (
        <nav className="w-full fixed top-0 z-10 shadow-md bg-white">
            <div className="container w-full h-14 box-border flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <IoCubeSharp className="text-3xl text-slate-900" />
                    <h1 className="text-lg font-semibold">YUDHA</h1>
                </div>
                <button className="px-4 py-2 rounded-md border font-semibold bg-black text-white">
                    Download CV
                </button>
            </div>
        </nav>
    )
}