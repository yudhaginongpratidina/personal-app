// client component
"use client";

// next or react
import { useState } from "react";

import { FaRegBookmark, FaRegDotCircle, FaRegEdit } from "react-icons/fa";
import { FaBorderAll, FaLock, FaShare, FaBookmark } from "react-icons/fa";

export default function Page() {

    const [activeTab, setActiveTab] = useState("posts");

    return (
        <div className="w-full flex flex-col max-h-[90vh] pb-4 overflow-auto items-center gap-4">

            <div className="w-full h-fit bg-white rounded-sm shadow-xl border border-gray-200">
                {/* Cover */}
                <div className="w-full h-[220px] relative bg-gradient-to-r from-indigo-600 to-purple-600">
                    <div className="w-[140px] h-[140px] rounded-full absolute -bottom-[70px] left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 bg-gray-200 border-4 border-white shadow-lg">
                        {/* Placeholder for profile image */}
                    </div>
                </div>

                {/* Content */}
                <div className="pt-20 px-6 md:px-10 pb-6">
                    {/* Name and verified */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center space-x-2">
                                <h1 className="text-2xl font-bold text-gray-800">Jhon Doe</h1>
                                <FaRegDotCircle className="text-indigo-500" />
                            </div>
                            <p className="text-sm text-gray-500">@jhondoe</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <button className="mt-4 md:mt-0 py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-sm transition-all duration-200">
                                Edit
                            </button>
                            <button className="mt-4 md:mt-0 py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-sm transition-all duration-200">
                                Share
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center md:justify-start space-x-4 mt-6 text-sm text-gray-600 font-medium">
                        <span className="text-center">100 Posts</span>
                        <div className="h-4 w-px bg-gray-300" />
                        <span className="text-center">2K Followers</span>
                        <div className="h-4 w-px bg-gray-300" />
                        <span className="text-center">3.4K Following</span>
                    </div>
                </div>
            </div>

            {/* categories */}
            <div className="w-full h-fit sticky top-0 z-10 bg-white rounded-sm shadow-xl border border-gray-200">
                <div className="w-full h-12 grid grid-cols-4">
                    <button onClick={() => setActiveTab("posts")} className="h-full w-full flex justify-center items-center gap-2 hover:bg-gray-100 hover:cursor-pointer">
                        <FaBorderAll className="w-5 h-5" />
                        <span className="hidden md:block text-sm font-semibold">All</span>
                    </button>
                    <button onClick={() => setActiveTab("private")} className="h-full w-full flex justify-center items-center gap-2 hover:bg-gray-100 hover:cursor-pointer">
                        <FaLock className="w-5 h-5" />
                        <span className="hidden md:block text-sm font-semibold">Private</span>
                    </button>
                    <button onClick={() => setActiveTab("shared")} className="h-full w-full flex justify-center items-center gap-2 hover:bg-gray-100 hover:cursor-pointer">
                        <FaShare className="w-5 h-5" />
                        <span className="hidden md:block text-sm font-semibold">Shared</span>
                    </button>
                    <button onClick={() => setActiveTab("saved")} className="h-full w-full flex justify-center items-center gap-2 hover:bg-gray-100 hover:cursor-pointer">
                        <FaBookmark className="w-5 h-5" />
                        <span className="hidden md:block text-sm font-semibold">Saved</span>
                    </button>
                </div>
            </div>

            {/* content */}
            {activeTab === "posts" && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full min-h-[200px] flex flex-col items-center justify-center mt-4 bg-white rounded-sm shadow-xl border border-gray-200 p-6">
                        <FaRegEdit className="text-gray-400 w-12 h-12 mb-4" />
                        <h1 className="text-lg text-center font-semibold text-gray-800">
                            Anda belum punya postingan
                        </h1>
                        <p className="text-sm text-center text-gray-500 mt-1">
                            Silakan buat postingan pertama Anda untuk mulai berbagi.
                        </p>
                    </div>
                </div>
            )}
            {activeTab === "private" && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full min-h-[200px] flex flex-col items-center justify-center mt-4 bg-white rounded-sm shadow-xl border border-gray-200 p-6">
                        <FaLock className="text-gray-400 w-12 h-12 mb-4" />
                        <h1 className="text-lg text-center font-semibold text-gray-800">Kamu tidak mempunyai postingan yang diprivate</h1>
                        <p className="text-sm text-center text-gray-500 mt-1">Postingan yang diprivate akan muncul di sini dan hanya bisa dilihat olehmu.</p>
                    </div>
                </div>
            )}
            {activeTab === "shared" && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full min-h-[200px] flex flex-col items-center justify-center mt-4 bg-white rounded-sm shadow-xl border border-gray-200 p-6">
                        <FaShare className="text-gray-400 w-12 h-12 mb-4" />
                        <h1 className="text-lg text-center font-semibold text-gray-800">Belum ada postingan yang dibagikan</h1>
                        <p className="text-sm text-center text-gray-500 mt-1">Postingan yang kamu bagikan akan muncul di sini.</p>
                    </div>
                </div>
            )}
            {activeTab === "saved" && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full min-h-[200px] flex flex-col items-center justify-center mt-4 bg-white rounded-sm shadow-xl border border-gray-200 p-6">
                        <FaRegBookmark className="text-gray-400 w-12 h-12 mb-4" />
                        <h1 className="text-lg text-center font-semibold text-gray-800">Belum ada postingan yang disimpan</h1>
                        <p className="text-sm text-center text-gray-500 mt-1">Postingan yang kamu simpan akan muncul di sini.</p>
                    </div>
                </div>
            )}

        </div>
    );
}
