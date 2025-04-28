"use client";
import React, { useState } from "react";
import { useInputChange } from "@/hooks/useInputChange";

import { Form } from "@/components/UI/Form";
import Button from "@/components/UI/Button";
import TextField from "@/components/UI/TextField";

type FormState = {
    email: string;
    password: string;
}

export default function Page() {

    const [formState, setFormState] = useState<FormState>({
        email: "",
        password: "",
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
                <Button
                    fullWidth 
                    type="submit"
                    icon="md/MdLogin"
                    name="Login"
                    className="bg-black text-white"
                />
            </Form>
        </div>
    );
}
