import bcrypt from "bcrypt";
import ResponseError from "../../utils/response-error.js";
import { get_all_accounts, get_account_by_id, update_password_by_id, update_role_account_by_id, delete_account_by_id } from "./account.repository.js"

export const GET_ALL_ACCOUNTS = async () => {
    const response = await get_all_accounts()
    return response
}

export const GET_ACCOUNT_BY_ID = async (id) => {
    const response = await get_account_by_id(id)

    if (!response) {
        throw new ResponseError(404, "Account not found");
    }

    return response
}

export const UPDATE_PASSWORD_BY_ID = async (id, user) => {

    if (!id || !user.newPassword || !user.confirmPassword) {
        throw new ResponseError(400, "Please fill in all fields");
    }

    if (user.newPassword !== user.confirmPassword) {
        throw new ResponseError(400, "Passwords do not match");
    }

    const hashedPassword = await bcrypt.hash(user.newPassword, 10);

    const response = await update_password_by_id(id, hashedPassword);
    return response
}

export const UPDATE_ROLE_ACCOUNT_BY_ID = async (id, user) => {
    if (!id || !user.role) {
        throw new ResponseError(400, "Please fill in all fields");
    }
    const response = await update_role_account_by_id(id, user.role)
    return response
}

export const DELETE_ACCOUNT_BY_ID = async (id) => {
    const account = await get_account_by_id(id)

    if (!account) {
        throw new ResponseError(404, "Account not found");
    }

    const response = await delete_account_by_id(id)
    return response
}