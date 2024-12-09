export default function PortfolioForm({children} : {children: React.ReactNode}) {
    return (
        <div className="w-full max-w-lg flex flex-col gap-4 border p-2.5 shadow-md rounded-sm">
            { children }
        </div>
    )
}