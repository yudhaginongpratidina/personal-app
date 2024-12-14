import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { learningPathFormSchema, LearningPathFormSchema } from "@/validators/learning_path.validator";

export default function UpdateLearningPathView() {

    const { register, handleSubmit, formState: { errors } } = useForm<LearningPathFormSchema>({
        resolver: zodResolver(learningPathFormSchema)
    })

    const onSubmit = async (data: LearningPathFormSchema) => {
        console.log(data)
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center container">
            <div className="w-full max-w-md flex flex-col gap-4">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold uppercase">Update Learning Path</h1>
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
                    <InputWithLabel
                        id="category_learning_path_id"
                        label="Category Learning Path"
                        required={true}
                        type="text"
                        placeholder="Enter category learning path"
                        {...register("category_learning_path_id")}
                        error={errors.category_learning_path_id?.message}
                    />
                    <InputWithLabel
                        id="level_learning_path_id"
                        label="Level Learning Path"
                        required={true}
                        type="text"
                        placeholder="Enter level learning path"
                        {...register("level_learning_path_id")}
                        error={errors.level_learning_path_id?.message}
                    />
                    <div className="flex gap-2">
                        <button type="submit" className="w-fit py-2 px-4 rounded-md bg-black hover:bg-gray-800 text-white">Update</button>
                        <button onClick={() => { window.history.back() }} className="w-fit py-2 px-4 rounded-md bg-red-500 hover:bg-red-600 text-white">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}