"use client";
import { useState } from "react";

import { Form, FormSplit } from "@/ui/Form";
import ResponseMessage from "@/ui/ResponseMessage";
import TextField from "@/ui/TextField"
import Button from "@/ui/Button";

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

type FormDataType = {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

const initialFormData: FormDataType = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
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
            const { first_name, last_name, username, email, password, confirm_password } = formData;
            setStatus({ isError: false, isLoading: true, message: "" });

            if (password !== confirm_password) {
                displayMessage(true, "Password and confirm password do not match");
                return;
            }

            console.log(`Your first name : ${first_name}`);
            console.log(`Your last name : ${last_name}`);
            console.log(`Your username : ${username}`);
            console.log(`Your email : ${email}`);
            console.log(`Your password : ${password}`);
            console.log(`Your confirm password : ${confirm_password}`);

            setTimeout(() => displayMessage(false, "Register successfully"), 2000);
        } catch (error:any) {
            const errorMessage = error?.response?.data?.message || error?.response?.data[0]?.message || "An error occurred";
            displayMessage(true, errorMessage);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ResponseMessage message={status.message} isError={status.isError} />
                <FormSplit>
                    <TextField name="first_name" type="text" value={formData.first_name} onChange={handleChange} required />
                    <TextField name="last_name" type="text" value={formData.last_name} onChange={handleChange} />
                </FormSplit>
                <TextField name="username" type="text" value={formData.username} onChange={handleChange} prefixIcon={<FaUser className="w-5 h-5"/>} required />
                <TextField name="email" type="email" value={formData.email} onChange={handleChange} prefixIcon={<MdEmail className="w-5 h-5"/>} required />
                <TextField name="password" type="password" value={formData.password} onChange={handleChange} prefixIcon={<TbLockPassword className="w-5 h-5"/>} required />
                <TextField name="confirm_password" type="password" value={formData.confirm_password} onChange={handleChange} prefixIcon={<TbLockPassword className="w-5 h-5"/>} required />
                <Button name="register" type="submit" fullWidth color={"primary"} isLoading={status.isLoading} />
            </Form>
        </>
    )
}