import SkillCardPortfolio from "./skill_card.portfolio"

export default function SkillPortfolio() {
    return (
        <div className="w-full  px-4 py-6 bg-white">
            <div className="w-full flex flex-col justify-center items-center mb-4">
                <h1 className="text-2xl font-semibold">SKILL</h1>
                <span className="text-sm font-semibold text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, odio?</span>
            </div>
            <div className="w-full container grid grid-cols-2 lg:grid-cols-4 gap-2">
                <SkillCardPortfolio />
                <SkillCardPortfolio />
                <SkillCardPortfolio />
                <SkillCardPortfolio />
            </div>
        </div>
    )
}