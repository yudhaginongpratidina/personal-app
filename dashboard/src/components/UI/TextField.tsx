"use client";
import React, { useRef, memo, JSX } from "react";
import clsx from "clsx";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: "text" | "email" | "password" | "number" | "date" | "time" | "search" | "url" | "file";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    prefixIcon?: JSX.Element;
    suffixIcon?: JSX.Element;
    required?: boolean;
    hideLabel?: boolean;
    optilnal?: boolean;
    disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
    name,
    type,
    value,
    onChange,
    prefixIcon = null,
    suffixIcon = null,
    required = false,
    hideLabel = false,
    optilnal = false,
    disabled = false,
    ...props
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full select-none">
            {!hideLabel && (
                <label htmlFor={name} className="text-sm capitalize flex items-center gap-0.5 text-gray-600">
                    {name.replace(/_/g, " ").toLowerCase()}
                    {required && <span className="text-red-500">*</span>}
                    {optilnal && <span className="lowercase text-gray-500">(optional)</span>}
                </label>
            )}
            <div className="w-full relative">
                {prefixIcon && (
                    <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                        {prefixIcon}
                    </span>
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                    className={clsx(
                        "w-full p-2 border border-gray-300 focus:border-gray-400 outline-none rounded-sm duration-200",
                        {
                            "px-10": prefixIcon && suffixIcon,
                            "pl-10": prefixIcon && !suffixIcon,
                            "pr-10": suffixIcon && !prefixIcon,
                            "pl-2.5 pr-2.5": !prefixIcon && !suffixIcon,
                        },
                        disabled ? "bg-gray-200 cursor-not-allowed" : "bg-white"
                    )}
                    required={required}
                    autoComplete="off"
                    disabled={disabled}
                    {...props}
                />
                {suffixIcon && (
                    <span className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
                        {suffixIcon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default memo(TextField);