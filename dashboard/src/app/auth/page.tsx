// client component
"use client"

// next or react
import { useState } from "react"

// ui
import ResponseMessage from "@/components/UI/ResponseMessage";
import { Form } from "@/components/UI/Form";
import TextField from "@/components/UI/TextField";
import Checkbox from "@/components/UI/Checkbox";
import Button from "@/components/UI/Button";

// type for form authentication
type FormDataType = {
    username_or_email: string,
    full_name: string,
    username: string,
    email: string,
    password: string,
    confirm_password: string,
    accept_terms_and_conditions: boolean,
}

// initial form data
const initialFormData: FormDataType = {
    username_or_email: "",
    full_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    accept_terms_and_conditions: false,
}

export default function Page() {

    const [authTitle, setAuthTitle] = useState<string>("login");
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState({ isError: false, isLoading: false, message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const displayMessage = (isError: boolean, message: string) => {
        setStatus({ isError, isLoading: false, message });
        setTimeout(() => setStatus({ isError: false, isLoading: false, message: "" }), 4000);
    };

    const handleChangeAuthTitle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (authTitle === "login") {
            setAuthTitle("register")
            setFormData(initialFormData);
        }
        else {
            setAuthTitle("login")
            setFormData(initialFormData);
        }
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { username_or_email, password } = formData;
            setStatus({ isError: false, isLoading: true, message: "" });

            console.log("Login data: ", { username_or_email, password });

            displayMessage(false, "Login successful!");
            setFormData(initialFormData);
            setAuthTitle("login")
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { full_name, username, email, password, confirm_password, accept_terms_and_conditions } = formData;
            setStatus({ isError: false, isLoading: true, message: "" });

            console.log("Register data: ", { full_name, username, email, password, confirm_password, accept_terms_and_conditions });

            displayMessage(false, "Registration successful!");
            setFormData(initialFormData);
            setAuthTitle("login")
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <div className="w-full max-w-md p-4 rounded-sm flex flex-col gap-4 bg-white">
                <Form onSubmit={authTitle === "login" ? handleLogin : handleRegister}>
                    <ResponseMessage isError={status.isError} message={status.message} />
                    {authTitle === "login" && (
                        <>
                            <TextField
                                name="username_or_email"
                                type="text"
                                value={formData.username_or_email}
                                onChange={handleChange}
                                required={true}
                            />
                            <TextField
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required={true}
                            />
                        </>
                    )}
                    {authTitle === "register" && (
                        <>
                            <TextField
                                name="full_name"
                                type="text"
                                value={formData.full_name}
                                onChange={handleChange}
                                required={true}
                            />
                            <TextField
                                name="username"
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                required={true}
                            />
                            <TextField
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required={true}
                            />
                            <TextField
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required={true}
                            />
                            <TextField
                                name="confirm_password"
                                type="password"
                                value={formData.confirm_password}
                                onChange={handleChange}
                                required={true}
                            />
                            <Checkbox
                                name="accept_terms_and_conditions"
                                type="checkbox"
                                value={formData.accept_terms_and_conditions ? "true" : "false"}
                                onChange={handleChange}
                                required={true}
                            />
                        </>
                    )}
                    <Button
                        name={authTitle}
                        type="submit"
                        fullWidth={true}
                        isLoading={false}
                        className="px-3 py-2.5 border-black bg-black text-white hover:bg-gray-800 hover:border-gray-800"
                    />
                </Form>
                <button onClick={handleChangeAuthTitle} className="w-full flex justify-center items-center gap-1.5 text-sm">
                    {authTitle === "login" ? "Don’t have an account yet?" : "Already have an account?"}
                    <span className="text-blue-500 font-semibold hover:cursor-pointer hover:underline hover:underline-offset-4 duration-200">
                        {authTitle === "login" ? "Create an account" : "Login"}
                    </span>
                </button>
            </div>
        </div>
    )
}