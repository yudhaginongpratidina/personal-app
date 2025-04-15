import AccountRepository from "./account.repository.js";
import ResponseError from "../../utils/ResponseError.js";
import bcrypt from "bcrypt";

export default class AccountService {

    static async find_by_username(username) {
        const account = await AccountRepository.find_by_username(username);
        if (!account) {
            throw new ResponseError(404, "account not found");
        }
        return account;
    }

    static async update_account(username, type, data) {

        const account = await AccountService.find_by_username(username);
        if (!account) {
            throw new ResponseError(404, "account not found");
        }

        if (type === "update_full_name") {
            return AccountRepository.update_account_by_username(username, {
                full_name: data.full_name,
            });
        }

        if (type === "update_bio") {
            return AccountRepository.update_account_by_username(username, {
                bio: data.bio,
            });
        }

        if (type === "update_password") {
            const passwordMatch = await bcrypt.compare(data.old_password, account.password);
            if (!passwordMatch) {
                throw new ResponseError(401, "wrong password");
            }
            const hashedPassword = await bcrypt.hash(data.new_password, 10);
            return AccountRepository.update_account_by_username(username, {
                password: hashedPassword,
            });
        }

        if (type === "update_image") {
            return AccountRepository.update_account_by_username(username, {
                image: data.image,
            });
        }
        
    }

    static async soft_delete_account(username) {
        const account = await AccountService.find_by_username(username);
        if (!account) {
            throw new ResponseError(404, "account not found");
        }
        return AccountRepository.soft_delete_account_by_username(username);
    }
}
