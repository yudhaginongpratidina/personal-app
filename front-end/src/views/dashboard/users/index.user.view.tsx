import DashboardLayout from "@/layouts/dashboard.layout"
import DataTableUser from "@/datatables/user/data_table.user"
import { DataDumyUser } from "@/datatables/user/data_dumy.user"
import { Columns_User } from "@/datatables/user/column.user"

export default function IndexUserView(){
    return (
        <DashboardLayout>
            <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-semibold">USER MANAGEMENT</h1>
                <button className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>
            </div>
            <div className="w-full p-4 bg-white">
                <DataTableUser data={DataDumyUser} columns={Columns_User} />
            </div>
        </DashboardLayout>
    )
}