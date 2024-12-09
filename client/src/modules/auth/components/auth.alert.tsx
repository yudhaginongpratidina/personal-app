export default function AuthAlert({ isError, message }: { isError: boolean, message: string }) {
    return (
        <div className={`w-full p-2.5 rounded-sm ${isError ? "bg-red-500" : "bg-green-500"}`}>
            <span className="text-sm font-semibold text-white">{message}</span>
        </div>
    )
}