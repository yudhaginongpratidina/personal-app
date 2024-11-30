export default function FormControl({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col gap-1.5">
            {children}
        </div>
    )
}