import React from "react";
import Input from "@/core/ui/Input";
import InputError from "@/core/ui/InputError";

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icons: React.ReactNode
    id: string
    required: boolean
    type: string
    placeholder: string
    error?: string
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(({ icons, id, required, type, placeholder, error, ...rest }, ref) => {
    return (
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex items-center relative">
                <div className="absolute top-3 left-3">{icons}</div>
                <Input id={id} type={type} placeholder={placeholder} className={`pl-12 ${error ? "border-red-500" : ""}`} {...rest} ref={ref} />
            </div>
            {error && <InputError>{error}</InputError>}
        </div>
    )
})

export default InputWithIcon