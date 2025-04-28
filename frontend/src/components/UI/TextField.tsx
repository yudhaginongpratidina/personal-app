"use client";
import { useState } from "react";
import LazyIcon from "@/components/UI/LazyIcon";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    type: string;
    label: string;
    icon?: string;
}

export default function TextField({ id, name, type = "text", label, icon, value = "", onChange, ...props }: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const hasValue = (typeof value === "string" || Array.isArray(value)) ? value.length > 0 : !!value;
    const showIcon = icon && !isFocused && !hasValue;
    const isPasswordType = type === "password";

    return (
        <div className="relative w-full">
            {/* Icon */}
            {showIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none transition-all">
                    <LazyIcon iconPath={icon} />
                </div>
            )}

            {/* Input */}
            <input
                type={isPasswordType ? (isPasswordVisible ? "text" : "password") : type}
                name={name}
                id={id}
                placeholder=" "
                autoComplete="off"
                {...(onChange ? { value, onChange } : { defaultValue: value })}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`peer w-full border border-gray-200 rounded-sm p-2.5 pr-10 outline-none focus:border-gray-300 focus:shadow-sm duration-100 ${icon ? (showIcon ? "pl-10" : "pl-2") : "pl-2"}`}
                {...props}
            />

            {/* Label */}
            <label htmlFor={id} className={`absolute bg-white px-1 transition-all 
                ${icon
                    ? (isFocused || hasValue
                        ? "left-2 -top-2 text-xs text-gray-500 font-semibold"
                        : "left-10 top-1/2 -translate-y-1/2 text-gray-400 font-normal")
                    : (isFocused || hasValue
                        ? "left-2 -top-2 text-xs text-gray-500 font-semibold"
                        : "left-2 top-1/2 -translate-y-1/2 text-gray-400 font-normal")}`}
            >{label}</label>

            {/* Password toggle button */}
            {isPasswordType && (
                <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer text-gray-400 text-xl focus:outline-none"
                >{isPasswordVisible ? <LazyIcon iconPath="md/MdVisibility" /> : <LazyIcon iconPath="md/MdVisibilityOff" />}</button>
            )}
        </div>
    );
}
