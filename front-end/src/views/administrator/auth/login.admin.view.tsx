import AdministratorLayout from "@/layouts/administrator.layout"

import AlertMessage from "@/ui/AlertMessage"
import Form from "@/ui/Form"
import Input from "@/ui/Input"
import Button from "@/ui/Button"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginAdminFormSchema, LoginAdminFormSchema } from "@/validators/admin/auth.admin.validator"

export default function LoginAdminView() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginAdminFormSchema>({
        resolver: zodResolver(loginAdminFormSchema)
    })

    const onSubmit = async (values: LoginAdminFormSchema) => {
        setIsError(false)
        setIsLoading(true)
        setMessage("")
        console.log(values)
    }


    return (
        <AdministratorLayout full_screen={true} item_center={true}>
            <div className="w-full max-w-md p-4 rounded-md shadow-md drop-shadow-md border flex flex-col gap-4 bg-white">
                <div>
                    <h1 className="text-2xl font-semibold">LOGIN</h1>
                    <p className="font-medium">Enter your username and password</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form>
                        {message && <AlertMessage type={isError ? "error" : "success"} message={message} />}
                        <Input id="username" type="text" placeholder="Username" {...register("username")} error={errors.username?.message} />
                        <Input id="password" type="password" placeholder="Password" {...register("password")} error={errors.password?.message} />
                        <Button type="submit" className="bg-black hover:bg-slate-800 text-white">
                            {isLoading ? "login..." : "login"}
                        </Button>
                    </Form>
                </form>
            </div>
        </AdministratorLayout>
    )
}