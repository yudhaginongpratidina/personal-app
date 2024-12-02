import { db } from "../../application/database.js"

export const get_detail_account_by_id = async (id) => {
    const response = await db.detailAccount.findUnique({
        where: {
            id: Number(id)
        }
    })

    return response
}

export const update_detail_account_by_id = async (id, user) => {
    const response = await db.detailAccount.update({
        where: {
            id: Number(id)
        },
        data: {
            address: user.address,
            phone: user.phone
        }
    })

    return response
}