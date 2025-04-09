import { BiSolidMessageSquareError } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";

export default function ResponseMessage({message, isError} : {message: string, isError: boolean}) {
    return (
        <>
            {message && (
                <div className={`w-full p-2 rounded-sm flex items-center gap-2 ${isError ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                    {isError ? <BiSolidMessageSquareError className="w-6 h-6" /> : <BsFillInfoSquareFill className="w-5 h-5" />}
                    <span className="text-sm font-medium">{message}</span>
                </div>
            )}
        </>
    )
}