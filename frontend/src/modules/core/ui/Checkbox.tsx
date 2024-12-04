import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    required: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, required, ...rest }, ref) => {
    return (
        <div className="w-full flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" id={id} ref={ref} {...rest} />
            <label htmlFor={id} className="capitalize flex items-center gap-0.5">
                <span className="text-sm font-semibold"> {label} </span>
                {required && <span className="text-red-500">*</span>}
            </label>
        </div>
    )
})

export default Checkbox
