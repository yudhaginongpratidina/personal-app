import DashboardPortfolioLayout from "@/modules/portfolio/layouts/dashboard_portfolio.layout"
import CreatePortfolioForm from "@/modules/portfolio/components/create_portfolio.form"

export default function CreatePortfolioView() {
    return (
        <DashboardPortfolioLayout>
            <div className="w-full p-2.5">
                <CreatePortfolioForm />
            </div>
        </DashboardPortfolioLayout>
    )
}