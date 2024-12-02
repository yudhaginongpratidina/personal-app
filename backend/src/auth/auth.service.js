import bcrypt from "bcrypt";
import ResponseError from "../../utils/response-error.js";
import { count_username, count_email, create_user, find_user } from "./auth.repository.js";

export const REGISTER = async (user) => {

    if (!user.username || !user.email || !user.password || !user.confirmPassword) {
        throw new ResponseError(400, "Please fill in all fields");
    }

    const countUsername = await count_username(user.username);

    if (countUsername === 1) {
        throw new ResponseError(400, "Username already exists");
    }

    const countEmail = await count_email(user.email);

    if (countEmail === 1) {
        throw new ResponseError(400, "Email already exists");
    }

    if (user.password !== user.confirmPassword) {
        throw new ResponseError(400, "Passwords do not match");
    }

    user.password = await bcrypt.hash(user.password, 10);
    
    const response = await create_user(user);
    return response
}

export const LOGIN = async (user) => {

    if (!user.email || !user.password) {
        throw new ResponseError(400, "Please fill in all fields");
    }

    const findUser = await find_user(user.email);

    if (!findUser) {
        throw new ResponseError(400, "User not found");
    }

    const match = await bcrypt.compare(user.password, findUser.password);

    if (!match) {
        throw new ResponseError(400, "Password is incorrect");
    }

    return findUser
}