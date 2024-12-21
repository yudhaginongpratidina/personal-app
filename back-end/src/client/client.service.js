import { create_client, get_all_client, get_client_by_email, get_client_by_id, update_client_by_id, update_password_client_by_id, delete_client_by_id } from "./client.repository.js";
import ResponseError from "../../helper/response_error.helper.js"
import bcrypt from "bcrypt"

export const CREATE_CLIENT = async (data) => {
    const { first_name, last_name, email, password, terms_and_conditions } = data;

    const email_exist = await get_client_by_email(email);

    if (email_exist === 1) {
        throw new ResponseError(400, "email already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const response = await create_client({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hash_password,
        terms_and_conditions: terms_and_conditions
    });

    return response
}

export const GET_ALL_CLIENT = async () => {
    const response = await get_all_client()
    return response
}

export const GET_CLIENT_BY_ID = async (id) => {
    const response = await get_client_by_id(id)

    if (!response) {
        throw new ResponseError(400, "client not found")
    }

    return response
}

export const UPDATE_CLIENT_BY_ID = async (id, data) => {
    const user_exist = await get_client_by_id(id)

    if (!user_exist) {
        throw new ResponseError(400, "client not found")
    }

    const response = await update_client_by_id(id, data)
    return response
}

export const UPDATE_PASSWORD_CLIENT_BY_ID = async (id, data) => {
    const user_exist = await get_client_by_id(id)

    if (!user_exist) {
        throw new ResponseError(400, "client not found")
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(data.password, salt);

    const response = await update_password_client_by_id(id, hash_password)
    return response
}

export const DELETE_CLIENT_BY_ID = async (id) => {
    const user_exist = await get_client_by_id(id)

    if (!user_exist) {
        throw new ResponseError(400, "client not found")
    }

    const response = await delete_client_by_id(id)
    return response
}
