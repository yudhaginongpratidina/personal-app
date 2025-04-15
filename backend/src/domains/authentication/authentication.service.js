import AuthenticationRepository from "./authentication.repository.js";
import ResponseError from "../../utils/ResponseError.js";
import bcrypt from "bcrypt";

export default class AuthenticationService {

    static async register(data) {
        const emailExists = await AuthenticationRepository.find_email(data.email);
        if (emailExists) {
            throw new ResponseError(400, "email has been registered");
        }

        const usernameExists = await AuthenticationRepository.find_username(data.username);
        if (usernameExists) {
            throw new ResponseError(400, "username has been registered");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        return await AuthenticationRepository.register(data);
    }

}
