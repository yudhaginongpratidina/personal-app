import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    required: boolean
    label?: string
    error?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, required, error, ...props }, ref) => { 
    return (
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex items-center gap-2">
                <input type="checkbox" id={id} className="w-4 h-4" {...props} ref={ref} />
                {label && <label htmlFor={id} className={`text-sm font-semibold capitalize ${error ? "text-red-500" : ""}`}>
                    <span>{label}</span>
                    {required && <span className="text-red-500">*</span>}
                </label>}
            </div>
            {error && <span className="text-sm font-semibold text-red-500 ">{error}</span>}
        </div>
    )
})

export default Checkbox