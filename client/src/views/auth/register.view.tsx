import AuthLayout from "@/layouts/auth.layout";
import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "@/validators/register.validator";

export default function RegisterView() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        console.log(data)
    }

    return (
        <AuthLayout>
            <div>
                <h1 className="text-2xl font-semibold uppercase">Register</h1>
                <p className="text-md text-gray-500">Please fill the form below</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full flex flex-col gap-4">
                    <InputWithLabel
                        id="email"
                        label="Email"
                        required={true}
                        type="email"
                        placeholder="example@gmail.com"
                        {...register("email")}
                        error={errors.email?.message}
                    />
                    <InputWithLabel
                        id="password"
                        label="Password"
                        required={true}
                        type="password"
                        placeholder="password"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                    <InputWithLabel
                        id="confirmPassword"
                        label="Confirm Password"
                        required={true}
                        type="password"
                        placeholder="confirm password"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
                    />
                    <button className="w-full p-2.5 rounded-md bg-black hover:bg-gray-800 text-white">
                        Register
                    </button>
                </div>
            </form>
        </AuthLayout>
    )
}