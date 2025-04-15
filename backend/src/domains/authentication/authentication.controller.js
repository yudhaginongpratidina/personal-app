import AuthenticationService from "./authentication.service.js";
import Validation from "../../utils/Validation.js";
import AuthenticationValidation from "./authentication.validation.js";
import jwt from "jsonwebtoken";

export default class AuthenticationController {

    static async register(req, res, next) {
        try {
            const data = await Validation.validate(AuthenticationValidation.REGISTER, req.body);
            const response = await AuthenticationService.register(data);
            res.status(201).json({
                message: "user registered successfully",
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        try {
            const data = await Validation.validate(AuthenticationValidation.LOGIN, req.body);

            const loginMethodMap = {
                login_with_username: AuthenticationService.login_with_username,
                login_with_email: AuthenticationService.login_with_email,
            };

            const response = await loginMethodMap[data.type](data);

            const id = response.id;
            const role = response.role;

            const access_token = jwt.sign({ id, role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN });
            const refresh_token = jwt.sign({ id, role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN });

            res.cookie("refresh_token", refresh_token, { httpOnly: true, secure: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000, partitioned: true });

            res.status(200).json({
                message: "user logged in successfully",
                data: {
                    token : access_token
                }
            });
        } catch (e) {
            next(e);
        }
    }

    static async logout(req, res, next) {
        try {
            if (!req.cookies.refresh_token) return res.status(401).json({ message: "user not logged in" });
            res.clearCookie('refresh_token', { maxAge: 0 });
            res.status(200).json({ message: 'Logout success' });
        } catch (error) {
            next(error);
        }
    }
}
