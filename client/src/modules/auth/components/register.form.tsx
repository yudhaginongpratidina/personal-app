import AuthForm from "./auth.form"
import AuthInput from "./auth.input"
import AuthButton from "./auth.button"
import AuthAlert from "./auth.alert";

import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPassword  } from "react-icons/md";

import { useAppSelector } from "@/store/hooks";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "@/modules/auth/validators/register.validator";

export default function RegisterForm() {

    const { isAuthenticated } = useAppSelector(state => state.credentials)

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <AuthForm>
                <AuthAlert isError={true} message="Register failed" />
                <AuthInput 
                    icons={<FaUser className="text-2xl" />}
                    id="firstName" 
                    type="text" 
                    placeholder="First Name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <AuthInput 
                    icons={<FaUser className="text-2xl" />}
                    id="lastName"
                    type="text" 
                    placeholder="Last Name" 
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
                <AuthInput
                    icons={<FaPhoneAlt className="text-2xl" />}
                    id="phoneNumber" 
                    type="text" 
                    placeholder="Phone Number"
                    error={errors.phoneNumber?.message}
                    {...register("phoneNumber")} 
                />
                <AuthInput 
                    icons={<MdEmail className="text-2xl" />}
                    id="email" 
                    type="email" 
                    placeholder="E-Mail" 
                    error={errors.email?.message}
                    {...register("email")}
                />
                <AuthInput 
                    icons={<MdPassword className="text-2xl" />}
                    id="password" 
                    type="password" 
                    placeholder="Password"
                    error={errors.password?.message}
                    {...register("password")} 
                />
                <AuthInput 
                    icons={<MdPassword className="text-2xl" />}
                    id="password" 
                    type="password" 
                    placeholder="Confirm Password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")} 
                />
                <AuthButton type="submit" disabled={isAuthenticated} className={isAuthenticated ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400" : ""}>Register</AuthButton>
            </AuthForm>
        </form>
    )
}