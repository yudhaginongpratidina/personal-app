import { get_all_user, get_user_by_id, delete_user_by_id, create_user, count_username, update_user_by_id, delete_many_user_by_id, update_role_by_id } from "./user.repository.js"
import ResponseError from "../../helper/response_error.helper.js"
import bcrypt from "bcrypt"

export const GET_ALL_USERS = async () => {
    const response = await get_all_user()
    return response
}

export const GET_USER_BY_ID = async (id) => {
    const response = await get_user_by_id(id)

    if (!response) {
        throw new ResponseError(400, "user not found")
    }

    return response
}

export const DELETE_USER_BY_ID = async (id) => {
    const response = await get_user_by_id(id)

    if (!response) {
        throw new ResponseError(400, "user not found")
    }

    const responseDelete = await delete_user_by_id(id)
    return responseDelete
}

export const CREATE_USER = async (data) => {
    const { username, password, terms_and_conditions } = data;

    const username_exist = await count_username(username)

    if ( username_exist === 1 ) {
        throw new ResponseError(400, "username already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const response = await create_user({ 
        username : username,
        password: hash_password,
        terms_and_conditions : terms_and_conditions
    })

    return response
}

export const UPDATE_USER_BY_ID = async (id, data) => {
    const id_exist = await get_user_by_id(id)

    if (!id_exist) {
        throw new ResponseError(400, "user not found")
    }

    if (data.username === id_exist.username) {
        throw new ResponseError(400, "username has already been used");
    }

    const response = await update_user_by_id(id, {
        username : data.username
    })

    return response
}

export const UPDATE_ROLE_BY_ID = async (id, role) => {
    const id_exist = await get_user_by_id(id)

    if (!id_exist) {
        throw new ResponseError(400, "user not found")
    }
    
    const response = await update_role_by_id(id, role)
    return response
}

export const DELETE_MANY_USER_BY_ID = async (ids) => {
    if (Array.isArray(ids) === false) {
        throw new ResponseError(400, "ids must be an array");
    }

    if (ids.length === 0) {
        throw new ResponseError(400, "ids must not be empty");
    }
    
    const response = await delete_many_user_by_id(ids)
    return response
}