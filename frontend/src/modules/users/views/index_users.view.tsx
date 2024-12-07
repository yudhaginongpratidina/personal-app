import { columns, data_users } from "@/modules/users/components/columns.users"
import { DataTable } from "@/modules/core/ui/DataTable"

export default function IndexUserView() {
    const data = data_users
    return (
        <>
            <div className="w-full container py-6">
                <DataTable columns={columns} data={data}  />
            </div>
        </>
    )
}