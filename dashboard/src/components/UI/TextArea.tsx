"use client";
import React, { useRef, memo, JSX } from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    hideLabel?: boolean;
    optilnal?: boolean;
    rows?: number;
    cols?: number;
}

export default function TextArea({ hideLabel, name, required, value, onChange, optilnal, rows, cols, ...props }: TextAreaProps) {
    
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className="w-full select-none">
            {!hideLabel && (
                <label htmlFor={name} className="text-sm capitalize flex items-center gap-0.5 text-gray-600">
                    {name.replace(/_/g, " ").toLowerCase()}
                    {required && <span className="text-red-500">*</span>}
                    {optilnal && <span className="lowercase text-gray-500">(optional)</span>}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                ref={textAreaRef}
                rows={rows}
                cols={cols}
                {...props}
                className="w-full p-2 border border-gray-300 focus:border-gray-400 outline-none rounded-sm duration-200"
            ></textarea>
        </div>
    )
}