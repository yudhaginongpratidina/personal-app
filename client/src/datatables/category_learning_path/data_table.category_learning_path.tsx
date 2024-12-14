import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, ColumnFiltersState, getFilteredRowModel, } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/core/ui/Table";
import { useState } from "react";
import { Link } from "react-router-dom";

interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export default function DataTableCategoryLearningPath<TData extends { id: number | string }, TValue>({ columns, data }: TableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),                 // CORE
        getPaginationRowModel: getPaginationRowModel(),     // PAGINATION
        onRowSelectionChange: setRowSelection,              // ROW SELECTION
        onColumnFiltersChange: setColumnFilters,            // COLUMN FILTER
        getFilteredRowModel: getFilteredRowModel(),         // FILTER

        state: {
            rowSelection,   // ROW SELECTION STATE
            columnFilters,  // COLUMN FILTER STATE
        },

        defaultColumn: {
            size: 0,
        },
    });

    const deleteSelectedRows = () => {
        const preDelete = []
        const selectedRowIds = Object.keys(rowSelection).map(
            (key) => data[parseInt(key)].id.toString()
        );
        preDelete.push(selectedRowIds)
        console.table(preDelete)
    };

    return (
        <>
            <div className="w-full flex items-center justify-between gap-2 py-1.5">
                <div className="w-full flex items-center">
                    <button className="w-fit py-1.5 px-4 bg-red-500 hover:bg-red-600 duration-100 text-white rounded-md" onClick={deleteSelectedRows}>delete selected</button>
                </div>
                <div className="w-full flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Filter name..." 
                        className="w-full py-1.5 px-4 border border-gray-300 rounded-md outline-none"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => table.getColumn("name")?.setFilterValue(e.target.value)}
                    />
                    <Link to="/admin/learning-path/category/create" className="w-fit py-1.5 px-4 bg-black hover:bg-gray-800 duration-100 text-white rounded-md">create</Link>
                </div>
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())
                                    }
                                </TableHead>
                            ))}
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
                                        <div style={{ width: `${cell.column.getSize()}px` }} />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center"> No results.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            <div className="w-full flex items-center justify-between py-2.5">
                <span className="w-fit border rounded-md py-1.5 px-4 bg-black text-white">
                    Rows selected: {table.getFilteredSelectedRowModel().rows.length}
                </span>

                {table.getPageCount() > 1 && (
                    <div className="flex items-center gap-2">
                        <button
                            className={`${table.getState().pagination.pageIndex === 0 ? "border rounded-md bg-gray-800 text-white py-1.5 px-4 cursor-not-allowed" : "border rounded-md hover:bg-gray-800 bg-black text-white py-1.5 px-4"}`}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >Previous</button>
                        {table.getState().pagination.pageIndex > 0 && (
                            <button
                                className="border rounded-md bg-black hover:bg-gray-800 text-white py-1.5 px-4"
                                onClick={() => table.setPageIndex(0)}
                            >1</button>
                        )}
                        <button
                            className="border rounded-md bg-black hover:bg-gray-800 text-white py-1.5 px-4"
                            onClick={() => table.setPageIndex(table.getState().pagination.pageIndex)}
                        >{table.getState().pagination.pageIndex + 1}</button>
                        {table.getState().pagination.pageIndex < table.getPageCount() - 1 && (
                            <button
                                className="border rounded-md bg-black text-white py-1.5 px-4"
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            >{table.getPageCount()}</button>
                        )}
                        <button
                            className={`${table.getState().pagination.pageIndex === table.getPageCount() - 1 ? "border rounded-md bg-gray-800 text-white py-1.5 px-4 cursor-not-allowed" : "border rounded-md bg-black hover:bg-gray-800 text-white py-1.5 px-4 "}`}
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >Next</button>
                    </div>
                )}
            </div>
        </>
    )
}