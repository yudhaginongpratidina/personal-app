import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    type: string
    error?: string
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, label, type, error, ...props }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1">
            {label && <label htmlFor={id} className={`text-sm font-semibold capitalize ${error ? "text-red-500" : ""}`}>{label}</label>}
            <input id={id} type={type} className={`w-full p-2.5 border border-gray-300 rounded-md outline-none focus:shadow-sm focus:border-gray-400 ${error ? "border-red-500 focus:border-red-600 text-red-500" : ""}`}{...props} ref={ref} />
            {error && <span className="text-sm font-semibold text-red-500 ">{error}</span>}
        </div>
    )
})

export default Input