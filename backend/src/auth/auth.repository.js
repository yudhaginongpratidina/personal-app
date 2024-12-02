import { db } from "../../application/database.js"

export const count_username = async (username) => {
    const response = await db.account.count({
        where: {
            username: username
        }
    })
    return response
}

export const count_email = async (email) => {
    const response = await db.account.count({
        where: {
            email: email
        }
    })
    return response
}

export const create_user = async (user) => {
    const response = await db.account.create({
        data: {
            username: user.username,
            email: user.email,
            password: user.password
        },
        select: {
            id: true,
            username: true,
            email: true,
        }
    })

    await db.detailAccount.create({
        data: {
            accountId: response.id,
            address: "",
            phone: ""
        }
    })

    return response
}

export const find_user = async (email) => {
    const response = await db.account.findUnique({
        where: {
            email: email
        },
        select: {
            id: true,
            email: true,
            password: true
        }
    })
    return response
}