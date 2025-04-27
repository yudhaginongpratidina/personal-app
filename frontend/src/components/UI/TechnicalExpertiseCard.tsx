import { JSX } from "react"

type Item = {
    title: string,
}

type TechnicalExpertiseCard = {
    icon: JSX.Element,
    title: string,
    description: string,
    items: Item[],
}

export default function TechnicalExpertiseCard({ icon, title, description, items }: TechnicalExpertiseCard) {
    return (
        <div className="group p-6 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {description}
            </p>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}