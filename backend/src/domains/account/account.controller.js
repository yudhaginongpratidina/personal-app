import AccountService from "./account.service.js";
import FormatDate from "../../utils/FormatDate.js";
import Validation from "../../utils/Validation.js";
import AccountValidation from "./account.validation.js";

export default class AccountController {
    static async index(req, res, next) {
        try {
            res.send("Account index");
        } catch (e) {
            next(e);
        }
    }

    static async create(req, res, next) {
        try {
            res.send("Account create form");
        } catch (e) {
            next(e);
        }
    }

    static async store(req, res, next) {
        try {
            res.send("Account stored");
        } catch (e) {
            next(e);
        }
    }

    static async show(req, res, next) {
        try {
            const { username } = req.params;
            const response = await AccountService.find_by_username(username);
            res.status(200).json({
                message: "account found",
                data: {
                    id: response.id,
                    username: response.username,
                    email: response.email,
                    role: response.role,
                    image: response.image,
                    bio: response.bio,
                    created_at: FormatDate(response.created_at)
                }
            });
        } catch (e) {
            next(e);
        }
    }

    static async edit(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Account edit ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async update(req, res, next) {
        try {
            const { username } = req.params;
            const data = await Validation.validate(AccountValidation.UPDATE, req.body);
            const response = await AccountService.update_account(username, data.type, data);
            res.status(200).json({
                message: "account updated",
                data: response
            })
        } catch (e) {
            next(e);
        }
    }

    static async destroy(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Account deleted ${id}`);
        } catch (e) {
            next(e);
        }
    }
}
