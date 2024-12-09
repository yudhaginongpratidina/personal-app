import DashboardPortfolioLayout from "@/modules/portfolio/layouts/dashboard_portfolio.layout"
import { PortfolioDataTable, columns, DataPortfolio } from "@/modules/portfolio/components/portfolio.datatable"

export default function DashboardPortfolioView() {

    const data_potfolio: DataPortfolio[] = [
        {
            id: 1,
            name: "Portfolio 1"
        },
        {
            id: 2,
            name: "Portfolio 2"
        },
        {
            id: 3,
            name: "Portfolio 3"
        },
    ]

    return (
        <DashboardPortfolioLayout>
            <div className="w-full container p-2.5 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                <div className="w-full rounded-sm h-[150px] border shadow-md bg-white"></div>
                <div className="w-full rounded-sm h-[150px] border shadow-md bg-white"></div>
                <div className="w-full rounded-sm h-[150px] border shadow-md bg-white"></div>
                <div className="w-full rounded-sm h-[150px] border shadow-md bg-white"></div>
            </div>
            <div className="w-full container p-2.5">
                <PortfolioDataTable columns={columns} data={data_potfolio} />
            </div>
        </DashboardPortfolioLayout>
    )
}