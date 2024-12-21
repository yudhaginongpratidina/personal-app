import {db} from "../../config/database/prisma.database.js";

export const get_all_admin = async () => {
    const response = await db.admin.findMany({
        select : {
            id : true,
            username : true,
            created_at : true
        }
    })
    return response
}

export const get_admin_by_id = async (id) => {
    const response = await db.admin.findUnique(
        {where : {id : id}},
    )
    return response
}

export const get_admin_by_username = async (username) => {
    const response = await db.admin.count({where : {username : username}})
    return response
}

export const create_admin = async (data) => {
    const response = await db.admin.create({
        data : {
            username : data.username,
            password : data.password,
            terms_and_conditions : data.terms_and_conditions
        },
        select : {
            id : true,
            username : true,
            created_at : true
        }
    })

    return response
}

export const update_password_by_id = async (id, data) => {
    const response = await db.admin.update({
        where : { id : id },
        data : { password : data.password }
    })

    return response
}

export const delete_admin_by_id = async (id) => {
    const response = await db.admin.delete({where : {id : id}})
    return response
}