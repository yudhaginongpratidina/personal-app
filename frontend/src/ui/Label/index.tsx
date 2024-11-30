interface LabelProps {
    htmlFor: string
    required: boolean
    children: React.ReactNode
}

export default function Label({ htmlFor, required, children } : LabelProps) {
    return (
        <label htmlFor={htmlFor} className="capitalize flex items-center gap-0.5">
            <span className="text-md font-semibold">
                { children }
            </span>
            { required && <span className="text-red-500">*</span> }
        </label>
    )
}