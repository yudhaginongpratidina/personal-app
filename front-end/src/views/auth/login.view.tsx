import AuthLayout from "@/layouts/auth.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "@/validators/login.validator"

import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/credential.slice";

export default function LoginView() {

    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: LoginFormSchema) => {
        try {
            if (data.email === "admin@gmail.com" && data.password === "admin@gmail.com") {
                dispatch(loginSuccess({ id: 1, fullName: "Admin", email: data.email, role: "admin" }))
                window.location.href = "/dashboard"
            }
        } catch (error) {
            console.log(error as Error)
        }
    }

    return (
        <AuthLayout>
            <div className="w-full">
                <h1 className="text-xl font-semibold">Login</h1>
                <span className="text-lg font-medium text-gray-500">Please enter your email and password</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Input id="email" label="email" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
                    <Input id="password" label="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                    <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Login</button>
                </Form>
            </form>
        </AuthLayout>
    )
}