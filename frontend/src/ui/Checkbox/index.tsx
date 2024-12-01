import React from "react";

import Label from "../Label";

interface CheckboxProps {
    htmlFor: string
    required: boolean
    children?: React.ReactNode
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ htmlFor, required, children, ...rest }, ref) => {
    return (
        <div className="w-full flex items-center gap-2">
            <input
                id={htmlFor}
                ref={ref}
                type="checkbox"
                className="w-4 h-4"
                {...rest}
            />
            <Label htmlFor={htmlFor} required={required}>{children}</Label>
        </div>
    )
})

export default Checkbox