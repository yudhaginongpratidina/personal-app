import {db} from "../../config/database/prisma.database.js";

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

export const find_user_by_username = async (username) => {
    const response = await db.user.findUnique({
        where : {
            username : username
        }
    })

    return response
}