import { ColumnDef } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "./portfolio.table"
import { flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, } from "@tanstack/react-table"

export type DataPortfolio = {
    id: number | string
    name: string
}

export const columns: ColumnDef<DataPortfolio>[] = [
    {
        accessorKey: "no",
        header: "No",
        cell: (info) => info.row.index + 1
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => (
            <div className="flex items-center space-x-2">
                <button className="btn btn-ghost btn-xs">Edit {row.original.id}</button>
                <button className="btn btn-ghost btn-xs">Delete {row.original.id}</button>
            </div>
        )
    }
]

interface PortfolioDataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function PortfolioDataTable<TData, TValue>({ columns, data }: PortfolioDataTableProps<TData, TValue>) {

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),     // PAGINATION

        // STATE MANAGEMENT
        state: {
            // .....
        },
    })


    return (
        <div className="">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center"> No results. </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* PAGE AND PAGINATION */}
            { table.getPageCount() > 1 &&
                <div className="w-full flex items-center justify-between px-2 py-2.5 bg-black">
                    <div>
                        <span className="text-white">
                            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className={`rounded-sm border border-white text-white py-1 px-2 ${table.getState().pagination.pageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </button>
                        <button
                            className="rounded-sm border border-white text-white py-1 px-2"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}