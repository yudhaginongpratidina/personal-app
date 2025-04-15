import prismaClient from "../../application/database.js";

export default class UsersRepository {

    static async find_all() {
        return await prismaClient.user.findMany();
    }

    static async find_by_id(id) {
        return await prismaClient.user.findUnique({
            where: {
                id: id
            }
        });
    }

    static async update_role(id, role) {
        return await prismaClient.user.update({
            where: {
                id: id
            },
            data: {
                role: role,
                updated_at: new Date()
            }
        });
    }

}
