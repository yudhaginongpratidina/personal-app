import {db} from "../../config/database/prisma.database.js";

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

export const find_user_by_email = async (email) => {
    const response = await db.user.findUnique({
        where : {
            email : email
        }
    })

    return response
}