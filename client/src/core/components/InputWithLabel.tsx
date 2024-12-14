import React from "react";
import Label from "@/core/ui/Label";
import Input from "@/core/ui/Input";
import InputError from "@/core/ui/InputError";

interface InputWithLabelProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    required: boolean
    type: string
    placeholder: string
    error?: string
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(({ id, required, label, type, placeholder, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <Label htmlFor={id} required={required} className={error ? "text-red-500" : ""}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} className={error ? "border-red-500" : ""} {...rest} ref={ref} />
            {error && <InputError>{error}</InputError>}
        </div>
    )
})

export default InputWithLabel