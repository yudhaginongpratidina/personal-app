import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className="box-border w-full h-[450px] px-6 md:px-16 flex items-center md:justify-center text-white bg-black dark:bg-gray-900">
                <div className="w-full max-w-3xl flex flex-col gap-2 md:items-center md:text-center">
                    <div className="w-full flex flex-col items-start md:items-center gap-2">
                        <h2 className="text-2xl md:text-3xl font-light">Hey, I'm Yudha</h2>
                        <hr className="w-32 border-t-2 border-white my-1" />
                    </div>
                    <h1 className="font-bold text-3xl md:text-4xl leading-tight">
                        I'm a Fullstack Developer who writes clean and thoughtful code.
                    </h1>
                    <p className="text-base md:text-lg leading-relaxed opacity-90 max-w-xl">
                        Aspiring Fullstack Developer with foundational experience in web development.
                        Recent graduate in Informatics Engineering from Universitas Islam Balitar,
                        combining academic knowledge with hands-on projects to build efficient
                        digital solutions. Eager to apply my skills and grow in a professional environment.
                    </p>
                    <div className="flex items-center gap-2.5 py-1.5 md:justify-center">
                        <button className="px-6 py-2 rounded-sm hover:cursor-pointer bg-white text-black transition duration-300 hover:bg-gray-200">
                            See my work
                        </button>
                        <button className="px-6 py-2 rounded-sm border hover:cursor-pointer border-white transition duration-300 hover:bg-white hover:text-black">
                            Let's connect
                        </button>
                    </div>
                </div>
            </div>

            <div className="box-border w-full py-16 px-6 md:px-16 bg-white dark:bg-gray-700">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Technical Expertise</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group p-6 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Programming Languages</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Proficient in modern languages optimized for performance and type safety.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                    <span>HTML + CSS</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                    <span>JavaScript</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                    <span>TypeScript</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                    <span>Golang</span>
                                </li>
                            </ul>
                        </div>

                        <div className="group p-6 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mr-3">
                                    <svg className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Development Tools</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Leveraging industry-standard tools for efficient development workflows.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>GitHub</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>VS Code</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>Postman</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>Figma</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>Docker</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    <span>Node.js</span>
                                </li>
                            </ul>
                        </div>

                        <div className="group p-6 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 mr-3">
                                    <svg className="h-5 w-5 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17v-6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Database Technologies</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Experience with both SQL and NoSQL database solutions for diverse application needs.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                    <span>MySQL</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                    <span>PostgreSQL</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                                    <span>MongoDB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-border w-full py-16 px-6 md:px-16 flex items-center text-white bg-black dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">Recent Projects</h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        <CardPortfolio
                            title="e-commerce"
                            type="Fullstack"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus."
                            repository="https://github.com/"
                            demo="https://demo-link.com"
                        />
                        <CardPortfolio
                            title="e-commerce"
                            type="Fullstack"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus."
                            repository="https://github.com/"
                            demo="https://demo-link.com"
                        />
                        <CardPortfolio
                            title="e-commerce"
                            type="Fullstack"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus."
                            repository="https://github.com/"
                            demo="https://demo-link.com"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

const CardPortfolio = ({ title, type, description, repository, demo }: { title: string; type: string; description: string; repository: string; demo: string }) => {
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