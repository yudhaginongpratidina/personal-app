import DashboardLayout from "@/layouts/dashboard.layout"

import Form from "@/ui/Form"
import Input from "@/ui/Input"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateUserFormSchema, updateUserFormSchema } from "@/validators/user.validator";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUserView() {

    const navigate = useNavigate()

    const { id } = useParams()
    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [user, setUser] = useState({
        username: ''
    });

    const getUserById = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
            const { data } = await response.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUserById = async () => {
        try {

            const conclussion = confirm("Are you sure you want to delete this user?")

            if (!conclussion) {
                return
            }

            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
                method: "DELETE"
            })
            
            const { message } = await response.json()
            setMessage(message)

            setTimeout(() => {
                navigate("/dashboard/users")
            }, 1000)
        } catch (error: any) {
            setIsError(true)
            setMessage(error.response?.data.message)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<UpdateUserFormSchema>({
        resolver: zodResolver(updateUserFormSchema),
    })

    const onSubmit = async (values: UpdateUserFormSchema) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
                username: values.username,
            })

            const { message }: any = await response.data
            setIsError(false)
            setMessage(message)

            setTimeout(() => {
                navigate("/dashboard/users")
            }, 1000)
        } catch (error: any) {
            setIsError(true)
            setMessage(error.response?.data.message)
        }
    }

    useEffect(() => {
        // console.log(id)
        getUserById()
    }, [])

    return (
        <DashboardLayout>
            <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-semibold">USER MANAGEMENT</h1>
                <button className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>
            </div>
            <div className="w-full p-4 bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form className="max-w-md">
                        {message && (
                            <div className={`w-full p-2.5 border rounded-md ${isError ? "border-red-500" : "border-green-500"}`}>
                                {isError && <span className="text-red-500">{message}</span>}
                                {!isError && <span className="text-green-500">{message}</span>}
                            </div>
                        )}
                        <Input id="username" label="username" type="text" placeholder="Username" defaultValue={user.username} {...register("username")} error={errors.username?.message} />
                        <div className="flex gap-4">
                            <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Update</button>
                            <button type="button" onClick={deleteUserById} className="w-fit py-2.5 px-6 rounded-md bg-red-500 hover:bg-red-600 text-white">Delete</button>
                        </div>
                    </Form>
                </form>
            </div>
        </DashboardLayout>
    )
}