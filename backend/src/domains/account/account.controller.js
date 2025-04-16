import AccountService from "./account.service.js";
import FormatDate from "../../utils/FormatDate.js";
import Validation from "../../utils/Validation.js";
import AccountValidation from "./account.validation.js";
import jwt from "jsonwebtoken";

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
                message: 'account updated',
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }

    static async soft_delete(req, res, next) {
        try {
            const { username } = req.params;
            const data = await Validation.validate(AccountValidation.SOFT_DELETE, req.body);

            if (data.confirm_delete === "DELETE ACCOUNT") {
                const response = await AccountService.soft_delete_account(username);
                res.status(200).json({
                    message: 'account deleted',
                    data: response,
                });
            }
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

    static async restore(req, res, next) {
        try {
            const data = await Validation.validate(AccountValidation.RESTORE, req.body);
            const response = await AccountService.restore_account(data);
            res.status(200).json({
                message: 'account restored',
                data: response,
            });
        } catch (e) {
            next(e);
        }
    }
}
