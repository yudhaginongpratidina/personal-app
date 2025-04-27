import TechnicalExpertiseCard from "@/components/UI/TechnicalExpertiseCard";
import ProjectCard from "@/components/UI/ProjectCard";
import LazyIcon from "@/components/UI/LazyIcon";

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
                        <TechnicalExpertiseCard
                            icon={<LazyIcon size={"1.5rem"} iconPath="md/MdOutlineCode" />}
                            title="Programming Languages"
                            description="Proficient in modern languages optimized for performance and type safety."
                            items={[
                                { title: 'HTML + CSS' },
                                { title: 'JavaScript' },
                                { title: 'TypeScript' },
                                { title: 'Golang' },
                            ]}
                        />
                        <TechnicalExpertiseCard
                            icon={<LazyIcon size={"1.5rem"} iconPath="fa/FaDev" />}
                            title="Development Tools"
                            description="Utilizing industry-standard tools for efficient development workflows."
                            items={[
                                { title: 'Git' },
                                { title: 'GitHub' },
                                { title: 'Docker' },
                            ]}
                        />
                        <TechnicalExpertiseCard
                            icon={<LazyIcon size={"1.5rem"} iconPath="fa/FaDatabase" />}
                            title="Databases"
                            description="Experience working with SQL, NoSQL, and MongoDB databases."
                            items={[
                                { title: 'SQL' },
                                { title: 'NoSQL' },
                                { title: 'MongoDB' },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className="box-border w-full py-16 px-6 md:px-16 flex items-center text-white bg-black dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">Recent Projects</h1>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProjectCard
                            title="e-commerce"
                            type="Fullstack"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus."
                            repository="https://github.com/"
                            demo="https://demo-link.com"
                        />
                        <ProjectCard
                            title="e-commerce"
                            type="Fullstack"
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, delectus."
                            repository="https://github.com/"
                            demo="https://demo-link.com"
                        />
                        <ProjectCard
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