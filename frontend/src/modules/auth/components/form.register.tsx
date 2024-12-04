import { Form, FormControl } from "@/modules/core/ui/Form";
import Label from "@/modules/core/ui/Label";
import Input from "@/modules/core/ui/Input";
import InputError from "@/modules/core/ui/InputError";
import Button from "@/modules/core/ui/Button";
import Checkbox from "@/modules/core/ui/Checkbox";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "../validators/register.validator";

export default function FormRegister() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormControl>
                        <Label htmlFor="firstName" required>first name</Label>
                        <Input id="firstName" type="text" placeholder="First Name" {...register("firstName")} />
                        {errors.firstName && <InputError>{errors.firstName.message}</InputError>}
                    </FormControl>
                    <FormControl>
                        <Label htmlFor="lastName" required>last name</Label>
                        <Input id="lastName" type="text" placeholder="Last Name" {...register("lastName")} />
                        {errors.lastName && <InputError>{errors.lastName.message}</InputError>}
                    </FormControl>
                </div>
                <FormControl>
                    <Label htmlFor="phone" required>phone</Label>
                    <Input id="phone" type="text" placeholder="Phone" {...register("phone")} />
                    {errors.phone && <InputError>{errors.phone.message}</InputError>}
                </FormControl>
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
                    <Label htmlFor="confirmPassword" required>confirm password</Label>
                    <Input id="confirmPassword" type="password" placeholder="*****" {...register("confirmPassword")} />
                    {errors.confirmPassword && <InputError>{errors.confirmPassword.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Checkbox id="terms" label="I accept the terms and conditions" required {...register("terms")} />
                    {errors.terms && <InputError>{errors.terms.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Checkbox id="newsletter" label="I want to receive the newsletter" required={false} {...register("newsletter")} />
                </FormControl>
                <FormControl>
                    <Button type={"submit"} className="h-11 bg-black hover:bg-gray-700 text-white">Register</Button>
                </FormControl>
            </Form>
        </form>
    )
}