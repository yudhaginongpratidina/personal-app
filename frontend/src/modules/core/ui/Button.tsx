import React from "react";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, children, ...props }, ref) => {
    return (
        <button ref={ref} className={`w-fit min-w-16 px-4 rounded-md border font-semibold ${className}`} {...props}>
            { children }
        </button>
    )
});

export default Button