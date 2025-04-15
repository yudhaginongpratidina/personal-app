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

            // request param
            const { username } = req.params;

            // get token
            const authHeader = req.headers['authorization'];
            const token = authHeader?.split(' ')[1];

            // decode token
            let decoded;
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            // check account, if account id match with decoded id
            const account = await AccountService.find_by_username(username);
            if (decoded.id !== account.id) {
                return res.status(403).json({ message: 'You are not allowed to update this account' });
            }

            // validate
            const data = await Validation.validate(AccountValidation.UPDATE, req.body);

            // update
            const response = await AccountService.update_account(username, data.type, data);

            // return response
            res.status(200).json({
                message: 'account updated',
                data: response,
            });
            
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
