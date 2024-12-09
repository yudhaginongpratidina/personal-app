import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
    placeholder: string;
    error?: string;
    autofocus?: boolean
}

const PortfolioTextarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, name, placeholder, autoFocus, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1.5">
            <label htmlFor={id}>{name}</label>
            <textarea
                ref={ref}
                id={id}
                placeholder={placeholder}
                autoFocus={autoFocus}
                autoComplete="off"
                className={`w-full border p-2.5 outline-none ${error && "border-red-500"} focus:shadow focus:border-blue-500 ${error && "focus:border-red-500"}`}
                {...rest}
            />
            {error && <span className="text-sm font-semibold text-red-500">{error}</span>}
        </div>
    );
});

export default PortfolioTextarea