export default function InputError({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm font-semibold text-red-500">{children}</p>
    )
}