import prismaClient from "../../application/database.js";

export default class AccountRepository {

    static find_by_username (username) {
        return prismaClient.user.findUnique({
            where: {
                username: username
            }
        });
    }

    static update_account_by_username (username, data) {
        return prismaClient.user.update({
            where: {
                username: username
            },
            data: { updated_at: new Date(), ...data }
        })        
    }

    static soft_delete_account_by_username (username) {
        return prismaClient.user.update({
            where: {
                username: username
            },
            data: { deleted_at: new Date() }
        })        
    }

}
