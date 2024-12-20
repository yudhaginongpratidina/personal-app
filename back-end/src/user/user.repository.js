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

export const count_username = async (username) => {
    const response = await db.user.count({
        where: {
            username : username
        }
    })

    return response
}

export const create_user = async (data) => {
    const response = await db.user.create({
        data : {
            username : data.username,
            password : data.password,
            terms_and_conditions : data.terms_and_conditions
        }
    })

    return response
}

export const update_user_by_id = async (id, data) => {
    const response = await db.user.update({
        where : {
            id : id
        },
        data : {
            username : data.username,
        }
    })

    return response
}

export const delete_many_user_by_id = async (ids) => {
    const response = await db.user.deleteMany({where : {id : {in : ids}}})
    return response
}