import { Form, FormBody } from "@/core/ui/Form"
import Alert from "@/core/ui/Alert"
import Input from "@/core/ui/Input"
import TextArea from "@/core/ui/TextArea"
import { ButtonSave } from "@/core/ui/Button"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPortfolioFormSchema, CreatePortfolioFormSchema } from "../validators/create_portfolio.validator"

export default function FormCreatePortfolio() {

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePortfolioFormSchema>({
        resolver: zodResolver(createPortfolioFormSchema)
    })

    const onSubmit = async (data: CreatePortfolioFormSchema) => {
        try {
            console.log(data)
        } catch (error) {
            setIsError(true)
            setMessage((error as Error).message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
                <FormBody>
                    {message && <Alert isError={isError} message={message} />}
                    <Input
                        id={"name"}
                        type={"text"}
                        label={"Name"}
                        placeholder={"Enter project name"}
                        error={errors.name?.message}
                        {...register("name")}
                    />
                    <TextArea
                        id={"description"}
                        label={"description"}
                        placeholder={"Enter description"}
                        error={errors.description?.message}
                        {...register("description")}
                    />
                    <Input
                        id={"repository"}
                        type={"url"}
                        label={"repository"}
                        placeholder={"Enter url repository"}
                        error={errors.repository?.message}
                        {...register("repository")}
                    />
                    <Input
                        id={"demo"}
                        type={"url"}
                        label={"demo"}
                        placeholder={"Enter url demo"}
                        error={errors.demo?.message}
                        {...register("demo")}
                    />
                    <ButtonSave>Save</ButtonSave>
                </FormBody>
            </Form>
        </form>
    )
}