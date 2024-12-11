import { Form, FormHeader, FormTitle, FormDescription, FormBody, FormFooter, FormLinkAlternative } from "@/core/ui/Form";
import Alert from "@/core/ui/Alert";
import Input from "@/core/ui/Input";
import { ButtonAuth } from "@/core/ui/Button";

import { MdEmail, MdPassword } from "react-icons/md";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "@/modules/auth/validators/login.validator";

import { useAppDispatch } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/credential.slice";

export default function LoginForm() {

    const dispatch = useAppDispatch()

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: LoginFormSchema) => {
        try {
            if (data.email === "user@gmail.com" && data.password === "user@gmail.com") {
                setIsError(false)
                setMessage("login success")
                dispatch(loginSuccess({ id: 1, email: data.email }))
            } else {
                setIsError(true)
                setMessage("login failed")
            }
        } catch (error) {
            setIsError(true)
            setMessage((error as Error).message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
                <FormHeader>
                    <FormTitle>Login</FormTitle>
                    <FormDescription>Enter your details to login</FormDescription>
                </FormHeader>
                <FormBody>
                    {message && <Alert isError={isError} message={message} />}
                    <Input
                        icons={<MdEmail className="text-xl" />}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <Input 
                        icons={<MdPassword className="text-xl" />}
                        id={"password"}
                        type={"password"} 
                        placeholder={"Enter your password"}
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <ButtonAuth>Login</ButtonAuth>
                </FormBody>
                <FormFooter>
                    <FormLinkAlternative href="/register">I don't have an account</FormLinkAlternative>
                </FormFooter>
            </Form>
        </form>
    )
}