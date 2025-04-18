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

    static async login(type, data) {
        const field = type === "login_with_email" ? "user_email" :
                      type === "login_with_phone_number" ? "user_phone_number" : null;
        const identifier = data.email || data.phone_number;
    
        if (!field || !identifier) { throw new ResponseError(400, "Invalid login type or missing credentials");}
    
        const user = await AuthenticationRepository.find(field, identifier);
        if (!user) throw new ResponseError(404, "User not found");
    
        const isPasswordValid = await bcrypt.compare(data.password, user.password_hash);
        if (!isPasswordValid) throw new ResponseError(401, "Invalid password");
    
        await AuthenticationRepository.update_last_login(user.id);
        delete user.password_hash;
    
        return user;
    }
}
