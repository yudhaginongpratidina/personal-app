import UsersRepository from "./users.repository.js";

export default class UsersService {

    static async find_all() {
        return await UsersRepository.find_all();
    }

}
