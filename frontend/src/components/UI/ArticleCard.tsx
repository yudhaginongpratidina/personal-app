import Link from "next/link";
import LazyIcon from "@/components/UI/LazyIcon";

export default function ArticleCard() {
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Article Content */}
                <div className="p-6 flex-1">
                    {/* Meta Information */}
                    <div className="flex items-center gap-3 text-sm mb-3">
                        <span className="text-gray-500 flex items-center gap-1">
                            <LazyIcon iconPath="fa/FaCalendar" />
                            <span>12 Agustus 2025</span>
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            Tutorial
                        </span>
                    </div>

                    {/* Title and Content */}
                    <h2 className="font-bold text-2xl text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                        <Link href="/article/how-to-make-website">
                            How to make a website with Next.js
                        </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo esse minima iste odit. Eaque odio error ipsa dignissimos laborum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo esse minima iste odit.
                    </p>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        {/* Stats */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <LazyIcon iconPath="fa/FaEye" />
                                <span>10k views</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <LazyIcon iconPath="fa/FaHeart" className="text-red-500" />
                                <span>200 likes</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <LazyIcon iconPath="fa/FaComment" className="text-gray-500" />
                                <span>200 comments</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button className="text-gray-500 hover:text-blue-600 transition-colors">
                                <LazyIcon iconPath="io/IoMdShare" />
                            </button>
                            <Link
                                href="/article/how-to-make-website"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1"
                            >
                                Read more
                                <LazyIcon iconPath="fa/FaArrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Article Image */}
                <div className="md:w-48 md:h-auto bg-gray-200 flex-shrink-0">
                    <div className="w-full md:min-w-48 md:max-w-48 h-48 md:h-full bg-gray-200" />
                </div>
            </div>
        </article>
    )
}