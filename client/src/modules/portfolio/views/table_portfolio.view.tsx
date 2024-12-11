import TableLayout from "@/core/layouts/table.layout"
import DatatablePortfolio from "../components/datatable.portfolio"
import { columns } from "../components/colums.portfolio"
import { DataDumyPortfolio } from "../components/data.dumy.portfolio"

export default function TablePortfolioView() {
    return (
        <TableLayout title={"Portfolio"} description={"List of portfolio"}>
            <DatatablePortfolio columns={columns} data={DataDumyPortfolio} />
        </TableLayout>
    )
}