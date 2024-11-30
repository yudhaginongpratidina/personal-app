// LAYOUT
import AuthLayout from "../../../layouts/Auth";

// UI COMPONENTS
import FormControl from "../../../ui/FormControl";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import InputError from "../../../ui/InputError";
import Button from "../../../ui/Button";

// REACT
import { Link } from "react-router-dom";

// FORM VALIDATION
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {

    // INPUT VALIDATION
    const registerFormSchema = z.object({
        username: z
            .string()
            .min(6, "Username is required")
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

    return (
        <AuthLayout>
            <div className="w-full mb-6">
                <h1 className="text-lg font-bold uppercase">Register</h1>
                <p className="text-md font-medium text-gray-400">
                    Please enter your email and password.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 mb-6">
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
                <Button type={"submit"} variant="default">Register</Button>
            </form>
            <div className="w-full flex justify-center items-center gap-1.5">
                <span>I have an account?</span>
                <Link to={"/login"} className="font-semibold hover:underline hover:underline-offset-4 text-blue-500">Login</Link>
            </div>
        </AuthLayout>
    )
}