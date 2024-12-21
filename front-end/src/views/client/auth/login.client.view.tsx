import ClientLayout from "@/layouts/client.layout"

import AlertMessage from "@/ui/AlertMessage"
import Form from "@/ui/Form"
import Input from "@/ui/Input"
import Button from "@/ui/Button"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginClientFormSchema, LoginClientFormSchema } from "@/validators/client/auth.client.validator"

export default function LoginClientView() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginClientFormSchema>({
        resolver: zodResolver(loginClientFormSchema)
    })

    const onSubmit = async (values: LoginClientFormSchema) => {
        setIsError(false)
        setIsLoading(true)
        setMessage("")
        console.log(values)
    }

    return (
        <ClientLayout full_screen={true} item_center={true}>
            <div className="w-full max-w-md p-4 rounded-md shadow-md drop-shadow-md border flex flex-col gap-4 bg-white">
                <div>
                    <h1 className="text-2xl font-semibold">LOGIN</h1>
                    <p className="font-medium">Enter your username and password</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
                        {message && <AlertMessage type={isError ? "error" : "success"} message={message} />}
                        <Input id="email" type="text" placeholder="E-Mail" {...register("email")} error={errors.email?.message} />
                        <Input id="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                        <Button type="submit" className="bg-black hover:bg-slate-800 text-white">
                            {isLoading ? "login..." : "login"}
                        </Button>
                    </Form>
                </form>
            </div>
        </ClientLayout>
    )
}