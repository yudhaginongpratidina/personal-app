import AuthLayout from "../layout/auth.layout"
import FormLogin from "../components/form.login"

export default function LoginView(){
    return (
        <AuthLayout>
            <FormLogin />
        </AuthLayout>
    )
}