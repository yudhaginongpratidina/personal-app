import ClientLayout from "@/layouts/client.layout"

import AlertMessage from "@/ui/AlertMessage"
import Form from "@/ui/Form"
import Input from "@/ui/Input"
import Button from "@/ui/Button"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerClientFormSchema, RegisterClientFormSchema } from "@/validators/client/auth.client.validator"

export default function RegisterClientView() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterClientFormSchema>({
        resolver: zodResolver(registerClientFormSchema)
    })

    const onSubmit = async (values: RegisterClientFormSchema) => {
        setIsError(false)
        setIsLoading(true)
        setMessage("")
        console.log(values)
    }

    return (
        <ClientLayout full_screen={true} item_center={true}>
            <div className="w-full max-w-md p-4 rounded-md shadow-md drop-shadow-md border flex flex-col gap-4 bg-white">
                <div>
                    <h1 className="text-2xl font-semibold">REGISTER</h1>
                    <p className="font-medium">Enter your username and password</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
                        {message && <AlertMessage type={isError ? "error" : "success"} message={message} />}
                        <div className="w-full grid grid-cols-2 gap-2">
                            <Input id="first_name" type="text" placeholder="First Name" {...register("first_name")} error={errors.first_name?.message} />
                            <Input id="last_name" type="text" placeholder="Last Name" {...register("last_name")} error={errors.last_name?.message} />
                        </div>
                        <Input id="email" type="email" placeholder="E-Mail" {...register("email")} error={errors.email?.message} />
                        <Input id="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                        <Input id="confirm_password" type="password" placeholder="Confirm Password"  {...register("confirm_password")} error={errors.confirm_password?.message} />
                        <Button type="submit" className="bg-black hover:bg-slate-800 text-white">
                            {isLoading ? "register..." : "register"}
                        </Button>
                    </Form>
                </form>
            </div>
        </ClientLayout>
    )
}