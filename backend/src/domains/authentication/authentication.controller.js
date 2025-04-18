import AuthenticationValidation from "./authentication.validation.js";
import AuthenticationService from "./authentication.service.js";
import FormatDate from "../../utils/FormatDate.js";
import Validation from "../../utils/Validation.js";

export default class AuthenticationController {
    static async register(req, res, next) {
        try {
            const data = await Validation.validate(AuthenticationValidation.REGISTER, req.body);
            const response = await AuthenticationService.register(data);
            res.status(201).json({
                message: "success",
                data: {
                    id: response.id,
                    full_name: response.full_name,
                    birth_date: FormatDate(response.birth_date),
                    gender: response.gender,
                    greeting_preference: response.greeting_preference,
                    profile_image_url: response.profile_image_url,
                    email: response.email,
                    phone_number: response.phone_number
                }
            })
        } catch (e) {
            next(e);
        }
    }

    static async login(req, res, next) {
        try {
            const data = await Validation.validate(AuthenticationValidation.LOGIN, req.body);
            const response = await AuthenticationService.login(data.type, data);
            res.status(200).json({
                message: "success",
                data: {
                    id: response.id,
                    full_name: response.full_name,
                    birth_date: FormatDate(response.birth_date),
                    gender: response.gender,
                    greeting_preference: response.greeting_preference,
                    profile_image_url: response.profile_image_url,
                    email: response.email,
                    phone_number: response.phone_number
                }
            })
        } catch (e) {
            next(e);
        }
    }
}
