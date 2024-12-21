import { get_admin_by_username, create_admin, get_all_admin, get_admin_by_id, update_password_by_id, delete_admin_by_id } from "./admin.repository.js";
import ResponseError from "../../helper/response_error.helper.js"
import bcrypt from "bcrypt"

export const CREATE_ADMIN = async (data) => {
    const { username, password, terms_and_conditions } = data;

    const username_exist = await get_admin_by_username(username)

    if (username_exist === 1) {
        throw new ResponseError(400, "username already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const response = await create_admin({
        username: username,
        password: hash_password,
        terms_and_conditions: terms_and_conditions
    });

    return response
}

export const GET_ALL_ADMIN = async () => {
    const response = await get_all_admin()
    return response
}

export const GET_ADMIN_BY_ID = async (id) => {
    const response = await get_admin_by_id(id)

    if (!response) {
        throw new ResponseError(400, "admin not found")
    }

    return response
}

export const UPDATE_PASSWORD_BY_ID = async (id, data) => {

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(data.password, salt);

    const response = await update_password_by_id(id, hash_password)
    return response
}

export const DELETE_ADMIN_BY_ID = async (id) => {
    const user_exist = await get_admin_by_id(id)

    if (!user_exist) {
        throw new ResponseError(400, "admin not found")
    }

    const response = await delete_admin_by_id(id)
    return response
}
