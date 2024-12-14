import AuthLayout from "@/layouts/auth.layout";
import InputWithLabel from "@/core/components/InputWithLabel"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "@/validators/login.validator";

import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/credential.slice";

export default function LoginView() {

    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: LoginFormSchema) => {
        console.log(data)
        dispatch(loginSuccess({ id: 1, email: data.email }))
    }

    return (
        <AuthLayout>
            <div>
                <h1 className="text-2xl font-semibold uppercase">Login</h1>
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
                    <button className="w-full p-2.5 rounded-md bg-black hover:bg-gray-800 text-white">
                        Login
                    </button>
                </div>
            </form>
        </AuthLayout>
    )
}