import AuthenticationService from "./authentication.service.js";
import Validation from "../../utils/Validation.js";
import AuthenticationValidation from "./authentication.validation.js";

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
            res.status(200).json({
                message: "user logged in successfully",
                data: response
            });
        } catch (e) {
            next(e);
        }
    }


}
