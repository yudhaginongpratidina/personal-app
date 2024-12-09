import AuthLayout from "@/modules/auth/layout/auth.layout"
import RegisterForm from "@/modules/auth/components/register.form"

export default function RegisterView() {
    return (
        <AuthLayout title="Register" description="Enter your details to register" link_url="/login" link_text="I have an account">
            <RegisterForm />
        </AuthLayout>
    )
}