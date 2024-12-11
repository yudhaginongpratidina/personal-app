import { Form, FormHeader, FormTitle, FormDescription, FormBody } from "@/core/ui/Form";
import Alert from "@/core/ui/Alert";
import Input from "@/core/ui/Input";
import { ButtonAuth } from "@/core/ui/Button";

import { MdPassword } from "react-icons/md";

import { useState } from "react";

export default function ForgetPasswordForm() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const onSubmit = async () => {
        try {
            
        } catch (error) {
            setIsError(true)
            setMessage((error as Error).message)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Form>
                <FormHeader>
                    <FormTitle>Forget Password</FormTitle>
                    <FormDescription>Enter your new password</FormDescription>
                </FormHeader>
                <FormBody>
                    {message && <Alert isError={isError} message={message} />}
                    <Input 
                        icons={<MdPassword className="text-xl" />}
                        id={"new_password"}
                        type={"password"} 
                        placeholder={"New Password"}
                    />
                    <Input 
                        icons={<MdPassword className="text-xl" />}
                        id={"confirm_password"}
                        type={"password"} 
                        placeholder={"Confirm Password"}
                    />
                    <ButtonAuth>Change Password</ButtonAuth>
                </FormBody>
            </Form>
        </form>
    )
}