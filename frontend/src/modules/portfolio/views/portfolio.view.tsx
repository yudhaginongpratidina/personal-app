import NavbarPortfolio from "../components/navbar.portfolio"
import HeroPortfolio from "../components/hero.portfolio"
import SkillPortfolio from "../components/skill.portfolio"
import ProjectPortfolio from "../components/project.portfolio"
import ContactPortfolio from "../components/contact.portfolio"
import FooterPortfolio from "../components/footer.portfolio"

export default function PortfolioView() {
    return (
        <main className="w-full min-h-screen pt-14 bg-gray-200">
            <NavbarPortfolio />
            <HeroPortfolio />
            <SkillPortfolio />
            <ProjectPortfolio />
            <ContactPortfolio />
            <FooterPortfolio />
        </main>
    )
}