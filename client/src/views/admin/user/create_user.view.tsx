import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema, UserFormSchema } from "@/validators/user.validator";

export default function CreateUserView() {

    const { register, handleSubmit, formState: { errors } } = useForm<UserFormSchema>({
        resolver: zodResolver(userFormSchema)
    })

    const onSubmit = async (data: UserFormSchema) => {
        console.log(data)
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center container">
            <div className="w-full max-w-md flex flex-col gap-4">
                <div className="w-full">
                    <h1 className="text-2xl font-semibold uppercase">Create User</h1>
                    <p className="text-gray-500">Please fill the form below</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 max-w-md">
                    <InputWithLabel
                        id="name"
                        label="Name"
                        required={true}
                        type="text"
                        placeholder="Enter name"
                        {...register("name")}
                        error={errors.name?.message}
                    />
                    <InputWithLabel
                        id="email"
                        label="Email"
                        required={true}
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <InputWithLabel
                        id="password"
                        label="Password"
                        required={true}
                        type="password"
                        placeholder="Enter password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                    <InputWithLabel
                        id="confirmPassword"
                        label="Confirm Password"
                        required={true}
                        type="password"
                        placeholder="Enter confirm password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
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