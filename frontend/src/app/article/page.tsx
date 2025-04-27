import ArticleCard from "@/components/UI/ArticleCard";
import LazyIcon from "@/components/UI/LazyIcon";

export default function Page() {
    return (
        <main className="w-full min-h-screen bg-gray-50 pt-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header with Search */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full p-4 pl-12 rounded-lg border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        />
                        <div className="absolute left-4 top-4 text-gray-400">
                            <LazyIcon iconPath="fa/FaSearch" />
                        </div>
                    </div>
                </div>

                {/* Articles List */}
                <div className="space-y-6">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>

                {/* Load More Button */}
                <div className="mt-8 text-center">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto">
                        Load more articles
                        <LazyIcon iconPath="fa/FaChevronDown" />
                    </button>
                </div>
            </div>
        </main>
    );
}