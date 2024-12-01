// LAYOUT
import MainLayout from "../../layouts/Main"

// UI COMPONENT
import ButtonLink from "../../ui/ButtonLink"

export default function Project() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen py-16 flex justify-center bg-gray-200">
                <div className="w-full container flex flex-col gap-4">
                    <div className="w-full py-2.5 flex items-center justify-between border-b border-black">
                        <h1 className="text-lg font-semibold">PROJECT</h1>
                        <ButtonLink to={"/project/create"} variant="default" className="w-fit py-1.5 px-3 text-sm font-semibold">NEW</ButtonLink>
                    </div>
                    <div className="w-full p-2.5 flex justify-center bg-white">
                        <span>No project is created</span>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}