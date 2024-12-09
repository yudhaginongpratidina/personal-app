import React from "react";

interface PortfolioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icons: React.ReactNode;
    id: string;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
    autofocus?: boolean
}

const PortfolioInput = React.forwardRef<HTMLInputElement, PortfolioInputProps>(({ icons, id, name, type, placeholder, autoFocus, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1.5">
            <label htmlFor={id}>{name}</label>
            <div className="w-full flex items-center">
                <div className="p-2.5 border">
                    {icons}
                </div>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    autoComplete="off"
                    className={`w-full border p-2.5 outline-none ${error && "border-red-500"} focus:shadow focus:border-blue-500 ${error && "focus:border-red-500"}`}
                    {...rest}
                />
            </div>
            {error && <span className="text-sm font-semibold text-red-500">{error}</span>}
        </div>
    );
});

export default PortfolioInput