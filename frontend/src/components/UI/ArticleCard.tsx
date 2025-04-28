import Link from "next/link";

type ArticleCardProps = {
    href: string,
    title: string,
    author: string,
    content: string
}

export default function ArticleCard({ href, title, author, content }: ArticleCardProps) {
    const truncatedContent = content.length > 114 ? content.slice(0, 114) + "..." : content;
    return (
        <Link href={href || "#"} className="w-full border border-gray-200 rounded-sm shadow-md hover:shadow-lg transition-all bg-white p-6 flex flex-col md:flex-row gap-6">
            <div className="hidden md:block min-w-40 min-h-40 max-w-40 max-h-40 bg-gray-100 rounded-sm"></div>
            <div className="flex flex-col justify-between gap-4 w-full">
                <div>
                    <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-snug hover:underline">{title}</h1>
                    <p className="hidden md:block text-gray-600 mt-3 text-base">
                        By {author} - {truncatedContent}
                    </p>
                </div>
                <div className="flex items-center text-gray-400 text-sm gap-2">
                    <span>By {author}</span>
                    <span>•</span>
                    <span>1 hour ago</span>
                </div>
            </div>
        </Link>
    );
}