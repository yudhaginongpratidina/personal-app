"use client";
import { useState } from "react";
import { useInputChange } from "@/hooks/useInputChange";

import { Form } from "@/components/UI/Form";
import Button from "@/components/UI/Button";
import TextField from "@/components/UI/TextField";

type FormState = {
    full_name: string;
    email: string;
    password: string;
    confirm_password: string;
};

export default function Page() {
    const [formState, setFormState] = useState<FormState>({
        full_name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const { handleChange } = useInputChange(formState, setFormState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <div className="w-full max-w-sm">
            <Form onSubmit={handleSubmit}>
                <TextField
                    id="full_name"
                    name="full_name"
                    type="text"
                    label="Full Name"
                    value={formState.full_name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="E-mail"
                    icon="md/MdEmail"
                    value={formState.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    icon="md/MdPassword"
                    value={formState.password}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    label="Confirm Password"
                    icon="md/MdPassword"
                    value={formState.confirm_password}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    fullWidth
                    name="Register"
                    className="bg-black text-white"
                />
            </Form>
        </div>
    );
}
