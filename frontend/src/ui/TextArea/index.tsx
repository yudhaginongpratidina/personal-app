import React from "react";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    placeholder: string;
    autofocus?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, placeholder, autoFocus, ...rest }, ref) => {
    return (
        <textarea
            ref={ref}
            id={id}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={`w-full min-h-[200px] p-2.5 border rounded-sm outline-none focus:shadow`}
            {...rest}
        ></textarea>
    );
});

export default TextArea