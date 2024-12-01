export const Form = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={`w-full flex flex-col gap-4 ${className}`}>
            { children }
        </div>
    )
}

export const FormControl = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col gap-1.5">
            {children}
        </div>
    )
}