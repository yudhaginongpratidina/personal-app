import AuthLayout from "@/modules/auth/layout/auth.layout"
import LoginForm from "@/modules/auth/components/login.form"

export default function LoginView() {
    return (
        <AuthLayout title="Login" description="Enter your email and password" link_url="/register" link_text="I don't have an account">
            <LoginForm />
        </AuthLayout>
    )
}