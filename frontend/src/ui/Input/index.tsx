import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    placeholder: string;
    autofocus?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ id, type, placeholder, autoFocus, ...rest }, ref) => {
    return (
        <input 
            ref={ref} 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            autoFocus={autoFocus}
            className={`w-full p-2.5 border rounded-sm outline-none focus:shadow`} 
            {...rest} 
        />
    );
});

export default Input