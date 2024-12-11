import { Form, FormHeader, FormTitle, FormDescription, FormBody, FormFooter, FormLinkAlternative } from "@/core/ui/Form";
import Alert from "@/core/ui/Alert";
import Input from "@/core/ui/Input";
import { ButtonAuth } from "@/core/ui/Button";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPassword } from "react-icons/md";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "@/modules/auth/validators/register.validator";

export default function RegisterForm() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        try {
            if (data.email === "user@gmail.com" && data.password === "user@gmail.com") {
                setIsError(false)
                setMessage("register success")
            } else {
                setIsError(true)
                setMessage("register failed")
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
                    <FormTitle>Register</FormTitle>
                    <FormDescription>Enter your details to register</FormDescription>
                </FormHeader>
                <FormBody>
                    {message && <Alert isError={isError} message={message} />}
                    <div className="w-full flex gap-2">
                        <Input
                            icons={<FaUser className="text-xl" />}
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            error={errors.firstName?.message}
                            {...register("firstName")}
                        />
                        <Input
                            icons={<FaUser className="text-xl" />}
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            error={errors.lastName?.message}
                            {...register("lastName")}
                        />
                    </div>
                    <Input
                        icons={<FaPhoneAlt className="text-xl" />}
                        id="phoneNumber"
                        type="text"
                        placeholder="Phone Number"
                        error={errors.phoneNumber?.message}
                        {...register("phoneNumber")}
                    />
                    <Input
                        icons={<MdEmail className="text-xl" />}
                        id="email"
                        type="email"
                        placeholder="E-Mail"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <Input
                        icons={<MdPassword className="text-xl" />}
                        id="password"
                        type="password"
                        placeholder="Password"
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <Input
                        icons={<MdPassword className="text-xl" />}
                        id="password"
                        type="password"
                        placeholder="Confirm Password"
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword")}
                    />
                    <ButtonAuth>Create Account</ButtonAuth>
                </FormBody>
                <FormFooter>
                    <FormLinkAlternative href="/login">I have an account</FormLinkAlternative>
                </FormFooter>
            </Form>
        </form>
    )
}