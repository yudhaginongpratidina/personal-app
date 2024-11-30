export default function InputError({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-sm font-semibold text-red-500">{children}</span>
    )
}