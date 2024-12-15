import {db} from "../../config/database/prisma.database.js";

export const get_all_user = async () => {
    const response = await db.user.findMany()
    return response
}

export const get_user_by_id = async (id) => {
    const response = await db.user.findUnique({where : {id : id}})
    return response
}

export const delete_user_by_id = async (id) => {
    const response = await db.user.delete({where : {id : id}})
    return response
}

export const count_email = async (email) => {
    const response = await db.user.count({
        where: {
            email : email
        }
    })

    return response
}

export const create_user = async (data) => {
    const response = await db.user.create({
        data : {
            full_name : data.full_name,
            email : data.email,
            password : data.password,
            terms_and_conditions : data.terms_and_conditions
        }
    })

    return response
}