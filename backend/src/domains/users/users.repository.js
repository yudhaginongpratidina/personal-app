import prismaClient from "../../application/database.js";

export default class UsersRepository {

    static async find_all() {
        return await prismaClient.user.findMany();
    }

}
