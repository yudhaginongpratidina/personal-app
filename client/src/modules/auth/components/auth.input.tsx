import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icons: React.ReactNode;
    id: string;
    type: string;
    placeholder: string;
    error?: string;
    autofocus?: boolean
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(({ icons, id, type, placeholder, autoFocus, error, ...rest }, ref) => {
    return (
        <div className="flex flex-col gap-1.5">
            <div className="w-full flex items-center relative">
                <div className="absolute top-3 left-3 border-r-2 pr-2">
                    {icons}
                </div>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    autoComplete="off"
                    className={`w-full border p-2.5 pl-14 rounded-sm outline-none ${error && "border-red-500"} focus:shadow focus:border-blue-500 ${error && "focus:border-red-500"}`}
                    {...rest}
                />
            </div>
            {error && <span className="text-sm font-semibold text-red-500">{error}</span>}
        </div>
    );
});

export default AuthInput