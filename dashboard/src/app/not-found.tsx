// client component
"use client";

// icons
import { IoArrowBack } from "react-icons/io5"

// ui
import Button from "@/components/UI/Button";

export default function NotFound() {
    return (
        <div className="w-full px-4 md:px-16 flex flex-col gap-4 bg-transparent text-black">
            <div className="w-full min-h-[90vh] flex items-center justify-center">
                <div className="text-center flex flex-col gap-2.5">
                    <h1 className="text-9xl font-bold opacity-75">404</h1>
                    <p className="text-2xl font-semibold">Page Not Found</p>
                    <p className="text-lg opacity-70">The page you're looking for does not exist.</p>
                    <Button
                        type="button"
                        name="Back to previous page"
                        onClick={() => window.history.back()}
                        icon={<IoArrowBack className="w-5 h-5" />}
                        className="px-6 py-2.5 border-black hover:border-gray-600 bg-black hover:bg-gray-600 text-white"
                        fullWidth
                    />
                </div>
            </div>
        </div>
    );
}