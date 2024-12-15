import AuthLayout from "@/layouts/auth.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"
import Checkbox from "@/ui/Checkbox";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "@/validators/register.validator"

export default function RegisterView(){

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        console.log(data)
    }

    return (
        <AuthLayout>
            <div className="w-full">
                <h1 className="text-xl font-semibold">Register</h1>
                <span className="text-lg font-medium text-gray-500">Please enter your email and password</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form>
                    <Input id="fullName" label="full name" type="text" placeholder="Full Name" {...register("fullName")} error={errors.fullName?.message} />
                    <Input id="email" label="email" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
                    <Input id="password" label="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                    <Input id="confirmPassword" label="confirm password" type="password" placeholder="Confirm Password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <Checkbox id="terms_and_conditions" label="I agree with the terms and conditions" required={true} {...register("terms_and_conditions")} error={errors.terms_and_conditions?.message} />
                    <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Register</button>
                </Form>
            </form>
        </AuthLayout>
    )
}