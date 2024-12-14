import { ColumnDef } from "@tanstack/react-table";
import { TypeDataPortfolio } from "./type_data.portfolio";
import { Link } from "react-router-dom";

export const Columns_Portfolio: ColumnDef<TypeDataPortfolio>[] = [
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
        accessorKey: "name",
        header: "Name",
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
                <Link to={`/admin/portfolio/${row.original.id}/edit`}>Edit</Link>
                <Link to={`/admin/portfolio/${row.original.id}`}>Delete</Link>
            </div>
        ),
        size: 10
    }
]
