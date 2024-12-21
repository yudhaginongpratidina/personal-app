import DashboardLayout from "@/layouts/dashboard.layout"

import Form from "@/ui/Form"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateRoleUserFormSchema, UpdateRoleUserFormSchema } from "@/validators/user.validator";
import axios from "axios";

export default function UpdateRoleUserView() {

    const navigate = useNavigate()
    const { id } = useParams()

    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [roleUser, setRoleUser] = useState<string>("")

    const getUserById = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`)
            const { data } = await response.json()
            setRoleUser(data.role)
        } catch (error) {
            console.log(error)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<UpdateRoleUserFormSchema>({
        resolver: zodResolver(updateRoleUserFormSchema),
    })

    const onSubmit = async (values: UpdateRoleUserFormSchema) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}/update-role`, {
                role: values.role,
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
        getUserById()
    }, [])

    return (
        <DashboardLayout title="user management" buttonBack>
            <div className="w-full p-4 bg-white">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form className="max-w-md">
                        {message && (
                            <div className={`w-full p-2.5 border rounded-md ${isError ? "border-red-500" : "border-green-500"}`}>
                                {isError && <span className="text-red-500">{message}</span>}
                                {!isError && <span className="text-green-500">{message}</span>}
                            </div>
                        )}
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="role" className="text-sm font-semibold capitalize">Role</label>
                            <select id="role" className="w-full p-2.5 border border-gray-300 rounded-md outline-none focus:shadow-sm focus:border-gray-400 bg-white" {...register("role")}>
                                <option value={roleUser}>{roleUser}</option>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                            {errors.role && <span className="text-sm font-semibold text-red-500 ">{errors.role.message}</span>}
                        </div>
                        <div className="flex gap-4">
                            <button type="submit" className="w-fit py-2.5 px-6 rounded-md bg-black hover:bg-slate-800 text-white">Change Role</button>
                        </div>
                    </Form>
                </form>
            </div>
        </DashboardLayout>
    )
}