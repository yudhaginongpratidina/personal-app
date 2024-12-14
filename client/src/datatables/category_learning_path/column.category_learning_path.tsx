import { ColumnDef } from "@tanstack/react-table";
import { TypeDataCategoryLearningPath } from "./type_data.category_learning_path";
import { Link } from "react-router-dom";

export const Columns_CategoryLearningPath: ColumnDef<TypeDataCategoryLearningPath>[] = [
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
                <Link to={`/admin/learning-path/category/${row.original.id}/edit`}>Edit</Link>
                <Link to={`/admin/learning-path/category/${row.original.id}/delete`}>Delete</Link>
            </div>
        ),
        size: 10
    }
]
