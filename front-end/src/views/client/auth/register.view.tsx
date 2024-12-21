import AuthLayout from "@/layouts/auth.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"
import Checkbox from "@/ui/Checkbox";

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "@/validators/register.validator"

export default function RegisterView(){

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (values: RegisterFormSchema) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/register`, {
                username: values.username,
                password: values.password,
                confirm_password: values.confirmPassword,
                terms_and_conditions: values.terms_and_conditions
            })

            const { message } : any = await response.data
            setIsError(false)
            setMessage(message)
        } catch (error : any) {
            setIsError(true)
            setMessage(error.response?.data.message)
        }
    }

    return (
        <AuthLayout>
            <div className="w-full">
                <h1 className="text-xl font-semibold">Register</h1>
                <span className="text-lg font-medium text-gray-500">Please enter your details</span>
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
                    <Input id="confirmPassword" label="confirm password" type="password" placeholder="Confirm Password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <Checkbox id="terms_and_conditions" label="I agree with the terms and conditions" required={true} {...register("terms_and_conditions")} error={errors.terms_and_conditions?.message} />
                    <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Register</button>
                </Form>
            </form>
        </AuthLayout>
    )
}