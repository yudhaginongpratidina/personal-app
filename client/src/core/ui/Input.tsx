import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icons?: React.ReactNode
    id: string
    label?: string
    type: string
    placeholder: string
    error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ icons, id, label, type, placeholder, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1.5">
            {label && <label htmlFor={id} className="capitalize font-semibold">{label}</label>}
            <div className="w-full flex items-center relative">
                {icons && <div className="absolute top-3 left-3">{icons}</div>}
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoComplete="off"
                    className={`w-full border p-2.5 ${icons && "pl-12"} rounded-md outline-none ${error && "border-red-500"} focus:shadow focus:border-blue-500 ${error && "focus:border-red-500"}`}
                    {...rest}
                />
            </div>
            {error && <span className="text-sm font-semibold text-red-500">{error}</span>}
        </div>
    )
})

export default Input