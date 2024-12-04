export default function Alert({ isError, children }: { isError: boolean, children: React.ReactNode }) {
    return (
        <div className={`w-full p-2.5 text-center text-sm font-semibold rounded-md text-white ${isError ? "bg-red-500" : "bg-green-500"}`}>
            { children }
        </div>
    )
}