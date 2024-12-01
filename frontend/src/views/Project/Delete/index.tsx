// LAYOUT
import MainLayout from "../../../layouts/Main"

export default function DeleteProject() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen py-16 flex justify-center bg-gray-200">
                <div className="w-full container flex flex-col gap-4">
                    <div className="w-full py-2.5 flex items-center justify-between border-b border-black">
                        <h1 className="text-lg font-semibold">DELETE PROJECT</h1>
                    </div>
                    <div className="w-full p-2.5 flex justify-center bg-white">
                        <span>Are you sure?</span>
                    </div>
                </div>
            </div> 
        </MainLayout>
    )
}