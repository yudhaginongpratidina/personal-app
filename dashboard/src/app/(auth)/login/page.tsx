"use client";
import { useState } from "react";

import { Form } from "@/ui/Form";
import ResponseMessage from "@/ui/ResponseMessage";
import TextField from "@/ui/TextField"
import Button from "@/ui/Button";

import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const initialFormData: { email: string, password: string } = {
    email: "",
    password: "",
};

export default function Page() {

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            setStatus({ isError: false, isLoading: true, message: "" });
            console.log(`Your e-mail : ${email}`);
            console.log(`Your password : ${password}`);
            setTimeout(() => displayMessage(false, "Login successfully"), 2000);
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ResponseMessage message={status.message} isError={status.isError} />
                <TextField name="email" type="text" value={formData.email} onChange={handleChange} prefixIcon={<MdEmail className="w-5 h-5"/>} required />
                <TextField name="password" type="password" value={formData.password} onChange={handleChange} prefixIcon={<TbLockPassword className="w-5 h-5"/>} required />
                <Button name="login" type="submit" fullWidth color={"primary"} isLoading={status.isLoading} />
            </Form>
        </>
    )
}