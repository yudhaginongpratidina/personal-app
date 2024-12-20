import { count_username, create_user, find_user_by_username } from "./auth.repository.js"
import ResponseError from "../../helper/response_error.helper.js"
import bcrypt from "bcrypt"

export const REGISTER = async ( data ) => {
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

export const LOGIN = async (data) => {
    const { username, password } = data;

    const response = await find_user_by_username(username)

    if ( !response ) {
        throw new ResponseError(400, "user not found");
    }

    const isPasswordValid = await bcrypt.compare(password, response.password)
    if ( !isPasswordValid ) {
        throw new ResponseError(400, "password is incorrect");
    }

    return response
}