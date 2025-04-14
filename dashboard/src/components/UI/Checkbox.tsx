"use client";
import React, { useRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    hideLabel?: boolean;
    optilnal?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, type, value, onChange, required = false, hideLabel = false, optilnal = false, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full flex items-center gap-2.5 select-none">
            <input
                ref={inputRef}
                id={name}
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                className="w-4 h-4 accent-black"
                required={required}
                {...props}
            />
            {!hideLabel && (
                <label htmlFor={name} className="text-sm capitalize flex items-center gap-0.5 text-gray-600">
                    {name.replace(/_/g, " ").toLowerCase()}
                    {required && <span className="text-red-500">*</span>}
                    {optilnal && <span className="lowercase text-gray-500">(optional)</span>}
                </label>
            )}
        </div>
    );
};

export default Checkbox;