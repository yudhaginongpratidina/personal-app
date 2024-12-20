import axios from "axios"
import { useState,useEffect } from "react"

import DashboardLayout from "@/layouts/dashboard.layout"
import DataTableUser from "@/datatables/user/data_table.user"
import { TypeDataUser } from "@/datatables/user/type_data.user"
import { Columns_User } from "@/datatables/user/column.user"

export default function IndexUserView(){

    const [users, setUsers] = useState<TypeDataUser[]>([])

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`);
            const { data } : any = await response.data
            // console.log(data)
            setUsers(data)
        } catch ( error : any) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <DashboardLayout>
            <div className="w-full flex justify-between items-center">
                <h1 className="text-xl font-semibold">USER MANAGEMENT</h1>
                <button className="text-md font-semibold py-1 px-4 rounded-md bg-black hover:bg-slate-800 text-white">BACK</button>
            </div>
            <div className="w-full p-4 bg-white">
                <DataTableUser data={users} columns={Columns_User} />
            </div>
        </DashboardLayout>
    )
}