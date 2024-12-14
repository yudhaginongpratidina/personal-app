import DataTablePortfolio from "@/datatables/portfolio/data_table.portfolio"
import { Columns_Portfolio } from "@/datatables/portfolio/column.portfolio"
import { DataDumyPortfolio } from "@/datatables/portfolio/data_dumy.portfolio"

export default function IndexPortfolioView() {
    return (
        <div className="w-full container">
            <DataTablePortfolio columns={Columns_Portfolio} data={DataDumyPortfolio} />
        </div>
    )
}