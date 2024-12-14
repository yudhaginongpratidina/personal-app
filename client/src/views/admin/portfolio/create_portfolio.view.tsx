import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { portfolioFormSchema, PortfolioFormSchema } from "@/validators/portfolio.validator";

export default function CreatePortfolioView() {

    const { register, handleSubmit, formState: { errors } } = useForm<PortfolioFormSchema>({
        resolver: zodResolver(portfolioFormSchema)
    })

    const onSubmit = async (data: PortfolioFormSchema) => {
        console.log(data)
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center container">
            <div className="w-full max-w-md flex flex-col gap-4">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold uppercase">Create Portfolio</h1>
                    <p className="text-gray-500">Please fill the form below</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 max-w-md">
                    <InputWithLabel
                        id="name"
                        label="Name"
                        required={true}
                        type="text"
                        placeholder="Enter portfolio name"
                        {...register("name")}
                        error={errors.name?.message}
                    />
                    <InputWithLabel
                        id="repository"
                        label="Repository"
                        required={true}
                        type="text"
                        placeholder="Enter portfolio repository"
                        {...register("repository")}
                        error={errors.repository?.message}
                    />
                    <InputWithLabel
                        id="demo"
                        label="Demo"
                        required={true}
                        type="text"
                        placeholder="Enter portfolio demo"
                        {...register("demo")}
                        error={errors.demo?.message}
                    />
                    <div className="flex gap-2">
                        <button type="submit" className="w-fit py-2 px-4 rounded-md bg-black hover:bg-gray-800 text-white">Create</button>
                        <button onClick={() => { window.history.back() }} className="w-fit py-2 px-4 rounded-md bg-red-500 hover:bg-red-600 text-white">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}