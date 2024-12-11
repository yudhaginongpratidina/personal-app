export default function Alert({ isError, message }: { isError: boolean, message: string }) {
    return (
        <div className={`w-full p-2.5 rounded-md ${isError ? "bg-red-500" : "bg-green-500"}`}>
            <span className="text-sm font-semibold text-white">{message}</span>
        </div>
    )
}