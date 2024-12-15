import DashboardLayout from "@/layouts/dashboard.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFormSchema, userFormSchema } from "@/validators/user.validator";

export default function CreateUserView() {

    const { register, handleSubmit, formState: { errors } } = useForm<UserFormSchema>({
        resolver: zodResolver(userFormSchema)
    })

    const onSubmit = async (data: UserFormSchema) => {
        console.log(data)
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
                        <Input id="fullName" label="full name" type="text" placeholder="Full Name" {...register("fullName")} error={errors.fullName?.message} />
                        <Input id="email" label="email" type="email" placeholder="Email" {...register("email")} error={errors.email?.message} />
                        <Input id="password" label="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                        <Input id="confirmPassword" label="confirm password" type="password" placeholder="Confirm Password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                        <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Create</button>
                    </Form>
                </form>
            </div>
        </DashboardLayout>
    )
}