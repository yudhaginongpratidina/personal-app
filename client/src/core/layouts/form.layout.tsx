import { useNavigate } from "react-router-dom"

export default function FormLayout({ title, description, children }: { title: string, description: string, children: React.ReactNode }) {
    const navigate = useNavigate()

    const goBack = async (e:React.MouseEvent) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <div className="w-full min-h-screen bg-gray-100">
            <div className="w-full container flex justify-center p-4">
                <div className="w-full max-w-screen-2xl rounded-md bg-white">

                    <div className="w-full p-4 flex items-center justify-between border-b">
                        <div>
                            <h1 className="text-2xl font-semibold uppercase">{title}</h1>
                            <span className="text-gray-400">{description}</span>
                        </div>
                        <button onClick={goBack} className="py-1.5 px-4 rounded-md flex items-center gap-1.5 bg-red-500 hover:bg-red-600 text-white duration-200">
                            <span className="text-lg font-semibold">{"<"}</span>
                            <span className="font-semibold">Back</span>
                        </button>
                    </div>

                    { children }

                </div>
            </div>
        </div>
    )
}
