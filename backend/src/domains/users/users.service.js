import UsersRepository from "./users.repository.js";
import ResponseError from "../../utils/ResponseError.js";

export default class UsersService {

    static async find_all() {
        return await UsersRepository.find_all();
    }

    static async find_by_id(id) {
        const user = await UsersRepository.find_by_id(id);
        if (!user) {
            throw new ResponseError(404, "user not found");
        }
        return user;
    }

    static async update_role(id, role) {
        const user = await UsersRepository.find_by_id(id);
        if (!user) {
            throw new ResponseError(404, "user not found");
        }

        return await UsersRepository.update_role(id, role);
    }

}
