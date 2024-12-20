import DashboardLayout from "@/layouts/dashboard.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormSchema, createUserFormSchema } from "@/validators/user.validator";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUserView() {

    const navigate = useNavigate()

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserFormSchema>({
        resolver: zodResolver(createUserFormSchema)
    })

    const onSubmit = async (values: CreateUserFormSchema) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/users`, {
                username: values.username,
                password: values.password,
                confirm_password: values.confirmPassword,
                terms_and_conditions: true
            })

            const { message } : any = await response.data
            setIsError(false)
            setMessage(message)

            setTimeout(() => {
                navigate("/dashboard/users")
            }, 1000)
        } catch (error : any) {
            setIsError(true)
            setMessage(error.response?.data.message)
        }
    }

    return (
        <DashboardLayout>
            <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-semibold">USER MANAGEMENT</h1>
                <button className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>
            </div>
            <div className="w-full p-4 bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form className="max-w-md">
                        {message && (
                            <div className={`w-full p-2.5 border rounded-md ${isError ? "border-red-500" : "border-green-500"}`}>
                                {isError && <span className="text-red-500">{message}</span>}
                                {!isError && <span className="text-green-500">{message}</span>}
                            </div>
                        )}
                        <Input id="username" label="username" type="text" placeholder="Username" {...register("username")} error={errors.username?.message} />
                        <Input id="password" label="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                        <Input id="confirmPassword" label="confirm password" type="password" placeholder="Confirm Password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                        <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Create</button>
                    </Form>
                </form>
            </div>
        </DashboardLayout>
    )
}