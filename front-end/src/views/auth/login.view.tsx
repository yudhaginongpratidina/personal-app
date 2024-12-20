import AuthLayout from "@/layouts/auth.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "@/validators/login.validator"

import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/credential.slice";

export default function LoginView() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (values: LoginFormSchema) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
                username: values.username,
                password: values.password
            })

            const { data, message }: any = await response.data
            setIsError(false)
            setMessage(message)

            dispatch(loginSuccess({
                id: data.id,
                username: data.username,
                role: data.role
            }))
        } catch (error: any) {
            setIsError(true)
            setMessage(error.response?.data.message)
        }
    }

    return (
        <AuthLayout>
            <div className="w-full">
                <h1 className="text-xl font-semibold">Login</h1>
                <span className="text-lg font-medium text-gray-500">Please enter your username and password</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    {message && (
                        <div className={`w-full p-2.5 border rounded-md ${isError ? "border-red-500" : "border-green-500"}`}>
                            {isError && <span className="text-red-500">{message}</span>}
                            {!isError && <span className="text-green-500">{message}</span>}
                        </div>
                    )}
                    <Input id="username" label="username" type="text" placeholder="Username" {...register("username")} error={errors.username?.message} />
                    <Input id="password" label="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                    <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Login</button>
                </Form>
            </form>
        </AuthLayout>
    )
}