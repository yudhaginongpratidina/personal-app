import { ColumnDef } from "@tanstack/react-table";
import { TypeDataUser } from "./type_data.user";
import { Link } from "react-router-dom";

export const Columns_User: ColumnDef<TypeDataUser>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <input className="w-4 h-4" type="checkbox" checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <input className="w-4 h-4" type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
            </div>
        ),
        size: 20
    },
    {
        accessorKey: "no",
        header: () => (
            <div className="flex items-center justify-center">
                <span className="text-sm font-semibold">No</span>
            </div>
        ),
        cell: (info) => {
            return (
                <div className="flex items-center justify-center">
                    <span className="text-sm font-semibold">{info.row.index + 1}</span>
                </div>
            )
        },
        size: 10
    },
    {
        accessorKey: "username",
        header: "Username",
        size: 160
    },
    {
        accessorKey: "action",
        header: () => (
            <div className="flex items-center justify-center">
                <span className="text-sm font-semibold">Action</span>
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center gap-2">
                <Link to={`/dashboard/users/${row.original.id}/edit`} className="font-semibold text-blue-500">Edit</Link>
            </div>
        ),
        size: 10
    }
]
