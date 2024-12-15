import { count_email, create_user, find_user_by_email } from "./auth.repository.js"
import ResponseError from "../../helper/response_error.helper.js"
import bcrypt from "bcrypt"

export const REGISTER = async ( data ) => {
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

export const LOGIN = async (data) => {
    const { email, password } = data;

    const response = await find_user_by_email(email)

    if ( !response ) {
        throw new ResponseError(400, "user not found");
    }

    const isPasswordValid = await bcrypt.compare(password, response.password)
    if ( !isPasswordValid ) {
        throw new ResponseError(400, "password is incorrect");
    }

    return response
}