import { ColumnDef } from "@tanstack/react-table"
import { TypeDataPortfolio } from "./data.dumy.portfolio"
import { ButtonActionEdit, ButtonActionView, ButtonActionDelete } from "@/core/ui/Button"

export const columns: ColumnDef<TypeDataPortfolio>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <div className="flex items-center justify-center">
                <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />
            </div>
        ),
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={row.getToggleSelectedHandler()}
                />
            </div>
        ),
        size: 20
    },
    {
        accessorKey: "no",
        header: "No",
        cell: (info) => info.row.index + 1,
        size: 10
    },
    {
        accessorKey: "name",
        header: "Name",
        size: 160
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <ButtonActionEdit href={`/portfolio/${row.original.id}`} />
                <ButtonActionView href={`/portfolio/${row.original.id}`} />
                <ButtonActionDelete href={`/portfolio/${row.original.id}`} />
            </div>
        ),
        size: 10
    }
]