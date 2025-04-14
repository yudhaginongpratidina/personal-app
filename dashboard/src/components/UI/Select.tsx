"use client"
import { useRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options: { value: string; label: string }[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    required?: boolean;
    hideLabel?: boolean;
    optilnal?: boolean;
}

export default function Select({ hideLabel, name, required, optilnal, options, disabled, onChange, ...props }: SelectProps) {
    const selectRef = useRef<HTMLSelectElement>(null);

    return (
        <div className="w-full select-none">
            {/* Label for the select field, formatted to replace underscores with spaces and lowercase the text */}
            {!hideLabel && (
                <label htmlFor={name} className="text-sm capitalize flex items-center gap-0.5 text-gray-600">
                    {name.replace(/_/g, " ").toLowerCase()}
                    {required && <span className="text-red-500">*</span>}
                    {optilnal && <span className="lowercase text-gray-500">(optional)</span>}
                </label>
            )}
            <div className="w-full relative">
                {/* Select field with dynamic styling */}
                <select
                    id={name}
                    name={name}
                    ref={selectRef}
                    disabled={disabled}
                    onChange={onChange}
                    {...props}
                    className={`w-full p-2 border border-gray-300 focus:border-gray-400 outline-none rounded-sm duration-200 ${disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}