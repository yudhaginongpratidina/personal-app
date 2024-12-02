import { db } from "../../application/database.js";

export const get_all_accounts = async () => {
    const response = await db.account.findMany()
    return response
}

export const get_account_by_id = async (id) => {
    const response = await db.account.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            detailAccount: true
        }
    })
    return response
}

export const update_password_by_id = async (id, password) => {
    const response = await db.account.update({
        where: {
            id: Number(id)
        },
        data: {
            password: password
        }
    })
    return response
}

export const update_role_account_by_id = async (id, role) => {
    const response = await db.account.update({
        where: {
            id: Number(id)
        },
        data: {
            role: role
        }
    })
    return response
}

export const delete_account_by_id = async (id) => {
    // delete detail account
    const deleteDetailAccount = await db.detailAccount.delete({
        where: {
            accountId: Number(id)
        }
    })

    // delete account
    if (deleteDetailAccount) {
        const response = await db.account.delete({
            where: {
                id: Number(id)
            }
        })
        return response
    }
}