import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchDataTableProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icons?: React.ReactNode
    type: string
    placeholder: string
}

const SearchDataTable = React.forwardRef<HTMLInputElement, SearchDataTableProps>(({ icons, id, type, placeholder, ...rest }, ref) => {
    return (
        <div className="w-full max-w-md flex items-center relative">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
                ref={ref}
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete="off"
                className="w-full max-w-md border p-2.5 pl-11 rounded-md outline-none focus:shadow text-sm"
                {...rest}
            />
        </div>
    )
})

export default SearchDataTable