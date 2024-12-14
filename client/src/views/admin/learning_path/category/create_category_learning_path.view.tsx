import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categoryLearningPathFormSchema, CategoryLearningPathFormSchema } from "@/validators/category_learning_path.validator";

export default function CreateCategoryLearningPathView() {

    const { register, handleSubmit, formState: { errors } } = useForm<CategoryLearningPathFormSchema>({
        resolver: zodResolver(categoryLearningPathFormSchema)
    })

    const onSubmit = async (data: CategoryLearningPathFormSchema) => {
        console.log(data)
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center container">
            <div className="w-full max-w-md flex flex-col gap-4">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold uppercase">Create Category Learning Path</h1>
                    <p className="text-gray-500">Please fill the form below</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 max-w-md">
                    <InputWithLabel
                        id="name"
                        label="Name"
                        required={true}
                        type="text"
                        placeholder="Enter category learning path"
                        {...register("name")}
                        error={errors.name?.message}
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