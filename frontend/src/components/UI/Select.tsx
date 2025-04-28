"use client";
import { useState, useRef } from "react";
import LazyIcon from "@/components/UI/LazyIcon";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: { value: string; label: string }[];
    icon?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    disabled?: boolean;
    hideLabel?: boolean;
}

export default function Select({
    hideLabel,
    name,
    label,
    options,
    icon,
    required,
    disabled,
    onChange,
    value,
    ...props
}: SelectProps) {
    const [isFocused, setIsFocused] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);

    const hasValue = value !== "" && value !== undefined;
    const showIcon = icon && !isFocused && !hasValue;

    return (
        <div className="relative w-full">
            {/* Icon */}
            {showIcon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none transition-all">
                    <LazyIcon iconPath={icon} />
                </div>
            )}

            {/* Select */}
            <select
                name={name}
                id={name}
                ref={selectRef}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
                value={value}
                {...props}
                className={`peer w-full border border-gray-200 rounded-sm p-2.5 pr-10 outline-none focus:border-gray-300 focus:shadow-sm duration-100 
                    ${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"} 
                    ${icon ? (showIcon ? "pl-10" : "pl-2") : "pl-2"}`}
            >
                <option value="" disabled hidden>
                    {label}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Label */}
            {!hideLabel && (
                <label
                    htmlFor={name}
                    className={`absolute bg-white px-1 transition-all 
                        ${icon
                            ? (isFocused || hasValue
                                ? "left-2 -top-2 text-xs text-gray-500 font-semibold"
                                : "left-10 top-1/2 -translate-y-1/2 text-gray-400 font-normal")
                            : (isFocused || hasValue
                                ? "left-2 -top-2 text-xs text-gray-500 font-semibold"
                                : "left-2 top-1/2 -translate-y-1/2 text-gray-400 font-normal")}`}
                >
                    {label}
                </label>
            )}

            {/* Required Indicator */}
            {required && !hideLabel && (
                <span className="absolute top-1/2 -translate-y-1/2 right-3 text-red-500">*</span>
            )}
        </div>
    );
}
