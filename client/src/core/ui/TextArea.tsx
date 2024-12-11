import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label: string;
    placeholder: string;
    error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, placeholder, autoFocus, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1.5">
            {label && <label htmlFor={id} className="capitalize font-semibold">{label}</label>}
            <textarea
                ref={ref}
                id={id}
                placeholder={placeholder}
                autoComplete="off"
                className={`w-full border p-2.5 outline-none rounded-md ${error && "border-red-500"} focus:shadow focus:border-blue-500 ${error && "focus:border-red-500"}`}
                {...rest}
            />
            {error && <span className="text-sm font-semibold text-red-500">{error}</span>}
        </div>
    );
});

export default TextArea