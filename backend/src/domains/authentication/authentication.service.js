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

    static async login_with_email(data) {
        const user = await AuthenticationRepository.find_email(data.email);
        if (!user) {
            throw new ResponseError(404, "user not found");
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) {
            throw new ResponseError(401, "wrong password");
        }

        return user;
    }

    static async login_with_username(data) {
        const user = await AuthenticationRepository.find_username(data.username);
        if (!user) {
            throw new ResponseError(404, "user not found");
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) {
            throw new ResponseError(401, "wrong password");
        }

        return user;
    }

}
