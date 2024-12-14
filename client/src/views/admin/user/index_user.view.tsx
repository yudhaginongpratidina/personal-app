import DashboardLayout from "@/layouts/dashboard.layout"
import DataTableUser from "@/datatables/user/data_table.user"
import { DataDumyUser } from "@/datatables/user/data_dumy.user"
import { Columns_User } from "@/datatables/user/column.user"

export default function IndexUserView() {
    return (
        <DashboardLayout>
            <DataTableUser data={DataDumyUser} columns={Columns_User} />
        </DashboardLayout>
    )
}