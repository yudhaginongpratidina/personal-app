// LAYOUT
import MainLayout from "../../../layouts/Main";

// UI COMPONENTS
import { Card, CardHeader, CardBody, CardFooter } from "../../../ui/Card";
import { Form, FormControl } from "../../../ui/Form";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import InputError from "../../../ui/InputError";
import Button from "../../../ui/Button";

// REACT
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// FORM VALIDATION
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// REDUX
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { loginSuccess } from "../../../store/Slice/AuthSlice";

export default function Login() {
    // NAVIGATION
    const navigate = useNavigate()

    // REDUX
    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAppSelector(state => state.auth)

    // INPUT VALIDATION
    const loginFormSchema = z.object({
        email: z
            .string()
            .min(1, "Email is required")
            .email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(16, "Password must be less than 16 characters"),
    })

    type LoginFormSchema = z.infer<typeof loginFormSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    // HANDLER
    const onSubmit = async (data: LoginFormSchema) => {
        try {
            console.table(data)
            if (data.email === "user@gmail.com" && data.password === "user@gmail.com") {
                dispatch(loginSuccess({ id: 1, email: data.email, password: data.password, role: "user" }))
            }
            else if (data.email === "admin@gmail.com" && data.password === "admin@gmail.com") {
                dispatch(loginSuccess({ id: 2, email: data.email, password: data.password, role: "admin" }))
            }
            else {
                console.log("Invalid email or password")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
    }, [isAuthenticated, navigate])

    return (
        <MainLayout>
            <div className="w-full min-h-screen flex flex-col justify-center items-center p-2.5 bg-gray-200">
                <Card size={"md"}>
                    <CardHeader>
                        <h1 className="text-lg font-bold uppercase">login</h1>
                        <p className="text-md font-medium text-gray-400">
                            Please enter your email and password.
                        </p>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form>
                                <FormControl>
                                    <Label htmlFor="email" required>E-Mail</Label>
                                    <Input id={"email"} type={"email"} placeholder={"E-Mail"} autoFocus={true} {...register("email")} />
                                    {errors.email && <InputError>{errors.email.message}</InputError>}
                                </FormControl>
                                <FormControl>
                                    <Label htmlFor="password" required>Password</Label>
                                    <Input id={"password"} type={"password"} placeholder={"********"} {...register("password")} />
                                    {errors.password && <InputError>{errors.password.message}</InputError>}
                                </FormControl>
                                <Button type={"submit"} variant={"default"}>Login</Button>
                            </Form>
                        </form>
                    </CardBody>
                    <CardFooter claassName="flex items-center justify-center gap-2">
                        <span>Don&apos;t have an account?</span>
                        <Link to={"/register"} className="font-semibold hover:underline hover:underline-offset-4 text-blue-500">Register</Link>
                    </CardFooter>
                </Card>
            </div>
        </MainLayout>
    )
}