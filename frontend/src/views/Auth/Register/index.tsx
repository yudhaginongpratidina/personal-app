// LAYOUT
import MainLayout from "../../../layouts/Main";

// UI COMPONENTS
import { Card, CardHeader, CardBody, CardFooter } from "../../../ui/Card";
import { Form, FormControl } from "../../../ui/Form";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import InputError from "../../../ui/InputError";
import Checkbox from "../../../ui/Checkbox";
import Button from "../../../ui/Button";

// REACT
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// FORM VALIDATION
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// REDUX
import { useAppSelector } from "../../../store/hooks";

export default function Register() {

    // INIT
    const navigate = useNavigate()

    // REDUX
    const { isAuthenticated } = useAppSelector(state => state.auth);

    // INPUT VALIDATION
    const registerFormSchema = z.object({
        username: z
            .string()
            .min(1, "Username is required")
            .min(6, "Username must be at least 6 characters")
            .max(28, "Username must be less than 28 characters"),
        email: z
            .string()
            .min(1, "Email is required")
            .email("Invalid email"),
        password: z
            .string()
            .min(1, "Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(16, "Password must be less than 16 characters"),
        confirmPassword: z
            .string()
            .min(1, "Confirm Password is required")
            .min(6, "Confirm Password must be at least 6 characters")
            .max(16, "Confirm Password must be less than 16 characters"),
        terms: z
            .boolean()
            .refine(value => value, { 
                message: "You must accept the terms and conditions"
            })
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

    type RegisterFormSchema = z.infer<typeof registerFormSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    // HANDLER
    const onSubmit = async (data: RegisterFormSchema) => {
        console.log(data)
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
                        <h1 className="text-lg font-bold uppercase">Register</h1>
                        <p className="text-md font-medium text-gray-400">
                            Please enter your email and password.
                        </p>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Form>
                                <FormControl>
                                    <Label htmlFor="username" required={true}>username</Label>
                                    <Input id="username" type="text" placeholder="Username" autoFocus={true} {...register("username")} />
                                    {errors.username && <InputError>{errors.username.message}</InputError>}
                                </FormControl>
                                <FormControl>
                                    <Label htmlFor="email" required={true}>email</Label>
                                    <Input id="email" type="email" placeholder="Email" {...register("email")} />
                                    {errors.email && <InputError>{errors.email.message}</InputError>}
                                </FormControl>
                                <FormControl>
                                    <Label htmlFor="password" required={true}>password</Label>
                                    <Input id="password" type="password" placeholder="******" {...register("password")} />
                                    {errors.password && <InputError>{errors.password.message}</InputError>}
                                </FormControl>
                                <FormControl>
                                    <Label htmlFor="confirmPassword" required={true}>confirm password</Label>
                                    <Input id="confirmPassword" type="password" placeholder="******" {...register("confirmPassword")} />
                                    {errors.confirmPassword && <InputError>{errors.confirmPassword.message}</InputError>}
                                </FormControl>
                                <FormControl>
                                    <Checkbox htmlFor="terms" required={true} {...register("terms")}>I accept the terms and conditions</Checkbox>
                                    {errors.terms && <InputError>{errors.terms.message}</InputError>}
                                </FormControl>
                                <Button type={"submit"} variant="default">Register</Button>
                            </Form>
                        </form>
                    </CardBody>
                    <CardFooter claassName="flex items-center justify-center gap-2">
                        <span>I have an account?</span>
                        <Link to={"/login"} className="font-semibold hover:underline hover:underline-offset-4 text-blue-500">Login</Link>
                    </CardFooter>
                </Card>
            </div>
        </MainLayout>
    )
}