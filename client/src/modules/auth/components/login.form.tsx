import AuthForm from "./auth.form"
import AuthInput from "./auth.input"
import AuthButton from "./auth.button"
import AuthAlert from "./auth.alert";

import { MdEmail, MdPassword } from "react-icons/md";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "@/modules/auth/validators/login.validator";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginSuccess } from "@/store/slices/credential.slice";

export default function LoginForm() {

    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAppSelector(state => state.credentials)

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
            <AuthForm>
                {message && <AuthAlert isError={isError} message={message} />}
                <AuthInput
                    icons={<MdEmail className="text-2xl" />}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <AuthInput
                    icons={<MdPassword className="text-2xl" />}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <AuthButton type="submit" disabled={isAuthenticated} className={isAuthenticated ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400" : ""}>Login</AuthButton>
            </AuthForm>
        </form>
    )
}