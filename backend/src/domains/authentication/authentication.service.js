import AuthenticationRepository from "./authentication.repository.js";
import ResponseError from "../../utils/ResponseError.js";
import bcrypt from "bcrypt";

export default class AuthenticationService {

    static async register(data) {
        const email_is_exist = await AuthenticationRepository.find("email", data.email);
        const phone_number_is_exist = await AuthenticationRepository.find("phone_number", data.phone_number);
        const hash_password = await bcrypt.hash(data.password, 12);
        data.password = hash_password;

        if (email_is_exist) { throw new ResponseError(409, "Email is already exist");}
        if (phone_number_is_exist) { throw new ResponseError(409, "Phone number is already exist");}

        delete data.confirm_password;
        return await AuthenticationRepository.create(data);
    }
}
