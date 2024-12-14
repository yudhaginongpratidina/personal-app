type LabelProps = {
    htmlFor: string
    children: React.ReactNode 
    required: boolean
    className?: string
}

export default function Label({ htmlFor, required, className, children }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`text-sm font-semibold flex items-center gap-1.5 ${className}`}>
            { children }
            {required && <span className="text-red-500">*</span>}
        </label>
    )
}