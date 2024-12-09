export default function AuthForm({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full px-2.5 py-4 flex flex-col gap-4">
            { children }
        </div>
    )
}