import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    type: string
    placeholder: string
    className?: string
}


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, type, placeholder, className, ...props }, ref) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`w-full p-2.5 border border-gray-300 rounded-md outline-none ${className}`}
            {...props}
            ref={ref}
        />
    )
})

export default Input