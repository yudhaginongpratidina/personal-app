import Link from "next/link"

type ProjectCard = {
    title: string
    type: string
    description: string
    repository: string
    demo: string
}

export default function ProjectCard({ title, type, description, repository, demo }: ProjectCard) {
    return (
        <div className="w-full p-4 rounded-md border border-white dark:border-gray-800 dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full h-[150px] rounded-md bg-gradient-to-r from-gray-700 via-gray-800 to-black"></div>
            <div className="flex justify-between items-center mt-4">
                <h2 className="text-xl font-semibold capitalize">{title}</h2>
                <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">{type}</span>
            </div>
            <p className="text-sm text-gray-300 mt-2">{description}</p>
            <div className="flex gap-4 mt-4">
                <Link
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 text-sm font-semibold text-gray-200 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >Repository</Link>
                <Link
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 text-sm font-semibold text-gray-200 bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >Demo</Link>
            </div>
        </div>
    )
}