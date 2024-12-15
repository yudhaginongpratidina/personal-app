import { get_all_user, get_user_by_id, delete_user_by_id, create_user, count_email } from "./user.repository.js"
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
    const { full_name, email, password, terms_and_conditions } = data;

    const email_exist = await count_email(email)

    if ( email_exist === 1 ) {
        throw new ResponseError(400, "email already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);

    const response = await create_user({ 
        full_name : full_name, 
        email : email,
        password: hash_password,
        terms_and_conditions : terms_and_conditions
    })

    return response
}