import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/core/ui/Table";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, ColumnFiltersState, getFilteredRowModel, } from "@tanstack/react-table";
import { ButtonDeleteSelected, ButtonActionCreate, ButtonPaginationPrev, ButtonPagination, ButtonPaginationNext, } from "@/core/ui/Button";
import SearchDataTable from "@/core/ui/SearchDatatable";


interface TableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export default function DatatablePortfolio<TData extends { id: number | string }, TValue>({ columns, data }: TableProps<TData, TValue>) {

    const [rowSelection, setRowSelection]   = useState({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel         : getCoreRowModel(),        // CORE
        getPaginationRowModel   : getPaginationRowModel(),  // PAGINATION
        onRowSelectionChange    : setRowSelection,          // ROW SELECTION
        onColumnFiltersChange   : setColumnFilters,         // COLUMN FILTER
        getFilteredRowModel     : getFilteredRowModel(),    // FILTER

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
        <div className="">
            <div className="w-full flex items-center justify-between gap-2 py-4">
                <ButtonDeleteSelected onClick={deleteSelectedRows} />
                <div className="w-full flex justify-end items-center gap-2">
                    <SearchDataTable 
                        type="text"
                        placeholder="Filter name..." 
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            table.getColumn("name")?.setFilterValue(e.target.value)
                        }
                    />
                    <ButtonActionCreate href="/dashboard/portfolio/create" />
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
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
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
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* PAGE AND PAGINATION */}
            <div className="w-full flex items-center justify-between py-2.5">
                <div className="flex items-center gap-1.5">
                    <span className="w-fit py-1.5 px-3 text-sm rounded-md font-medium border shadow-sm hover:bg-black hover:text-white duration-200">
                        {table.getFilteredSelectedRowModel().rows.length}
                    </span>
                    <span className="w-fit py-1.5 px-3 text-sm rounded-md font-medium border shadow-sm hover:bg-black hover:text-white duration-200">
                        Selected
                    </span>
                </div>
                {table.getPageCount() > 1 && (
                    <div className="flex items-center gap-2">
                        <ButtonPaginationPrev
                            className={`${table.getState().pagination.pageIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        />
                        {table.getState().pagination.pageIndex > 0 && (
                            <ButtonPagination onClick={() => table.setPageIndex(0)}>1</ButtonPagination>
                        )}
                        <ButtonPagination onClick={() => table.setPageIndex(table.getState().pagination.pageIndex)}>
                            {table.getState().pagination.pageIndex + 1}
                        </ButtonPagination>
                        {table.getState().pagination.pageIndex < table.getPageCount() - 1 && (
                            <ButtonPagination onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                                {table.getPageCount()}
                            </ButtonPagination>
                        )}
                        <ButtonPaginationNext
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
