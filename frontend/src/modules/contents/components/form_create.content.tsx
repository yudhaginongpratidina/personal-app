import { useState } from "react";

import { Form, FormControl } from "@/modules/core/ui/Form";
import Label from "@/modules/core/ui/Label";
import Input from "@/modules/core/ui/Input";
import InputError from "@/modules/core/ui/InputError";
import MDEditor from '@uiw/react-md-editor';
import Button from "@/modules/core/ui/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContentFormSchema, CreateContentFormSchema } from "../validators/create_content.validator";

export default function FormCreateContent() {

    const [editorValue, setEditorValue] = useState<string | undefined>('');

    const { register, handleSubmit, formState: { errors }, setValue }= useForm<CreateContentFormSchema>({
        resolver: zodResolver(createContentFormSchema)
    })

    const onSubmit = async (data: CreateContentFormSchema) => {
        console.table(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form>
                <FormControl>
                    <Label htmlFor="title" required>title</Label>
                    <Input id="title" type="text" placeholder="Title" {...register("title")} />
                    {errors.title && <InputError>{errors.title.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Label htmlFor="content" required>content</Label>
                    <div data-color-mode="light">
                        <MDEditor
                            highlightEnable = {true}
                            value={editorValue}
                            height={250}
                            onChange={(value) => {
                                setEditorValue(value);
                                setValue('content', value || '');
                            }}
                            preview='edit'
                        />
                    </div>
                    <input type="hidden" {...register("content")} value={editorValue || ''} />
                    {errors.content && <InputError>{errors.content.message}</InputError>}
                </FormControl>
                <FormControl>
                    <Button type={"submit"} className="h-11 bg-black hover:bg-gray-700 text-white">Submit</Button>
                </FormControl>
            </Form>
        </form>
    )
}