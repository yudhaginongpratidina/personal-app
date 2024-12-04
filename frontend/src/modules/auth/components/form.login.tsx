import { Form, FormControl } from "@/modules/core/ui/Form";
import Label from "@/modules/core/ui/Label";
import Input from "@/modules/core/ui/Input";
import InputError from "@/modules/core/ui/InputError";
import Checkbox from "@/modules/core/ui/Checkbox";
import Button from "@/modules/core/ui/Button";
import Alert from "@/modules/core/ui/Alert";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchema } from "../validators/login.validator";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { loginSuccess, loginFailure } from "../slice/auth.slice";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isAuthenticated, isError, message } = useAppSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = async (data: LoginFormSchema) => {
        try {
            console.table(data)
            if (data.email === "user@gmail.com" && data.password === "user@gmail.com") {
                dispatch(loginSuccess({ id: 1, email: data.email, password: data.password, role: "user" }))
            }
            else {
                dispatch(loginFailure())
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            setTimeout(() => {
                navigate("/")
            }, 3000)
        }
    }, [isAuthenticated, navigate])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
                { message && 
                    <>
                        { isError
                            ? <Alert isError={true}>{message}</Alert>
                            : <Alert isError={false}>{message}</Alert>
                        }
                    </>
                }
                <FormControl>
                    <Label htmlFor="email" required>e-mail</Label>
                    <Input id="email" type="email" placeholder="E-Mail" {...register("email")} />
                    {errors.email && <InputError>{errors.email.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Label htmlFor="password" required>password</Label>
                    <Input id="password" type="password" placeholder="*****" {...register("password")} />
                    {errors.password && <InputError>{errors.password.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Checkbox id="remember" label="remember me" required={false} {...register("remember")} />
                </FormControl>
                <FormControl>
                    <Button type={"submit"} className="h-11 bg-black hover:bg-gray-700 text-white">Login</Button>
                </FormControl>
            </Form>
        </form>
    )
}