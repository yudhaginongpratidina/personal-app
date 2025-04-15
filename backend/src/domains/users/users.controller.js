import UsersService from "./users.service.js";
import FormatDate from "../../utils/FormatDate.js";

export default class UsersController {
    static async index(req, res, next) {
        try {
            const users = await UsersService.find_all();
            const response = users.map(user => ({
                id: user.id,
                full_name: user.full_name,
                username: user.username,
                role: user.role,
                image: user.image,
                created_at: FormatDate(user.created_at),
                updated_at: FormatDate(user.updated_at),
                deleted_at: FormatDate(user.deleted_at)
            }));

            res.status(200).json({
                message: "successfully",
                data: {
                    total_user: response.length,
                    total_by_role: {
                        user: response.filter(user => user.role === "user").length,
                        contributor: response.filter(user => user.role === "contributor").length,
                        admin: response.filter(user => user.role === "admin").length,
                    },
                    users_by_role: {
                        user: response.filter(user => user.role === "user"),
                        contributor: response.filter(user => user.role === "contributor"),
                        admin: response.filter(user => user.role === "admin"),
                    }
                }
            });
        } catch (e) {
            next(e);
        }
    }

    static async create(req, res, next) {
        try {
            res.send("Users create form");
        } catch (e) {
            next(e);
        }
    }

    static async store(req, res, next) {
        try {
            res.send("Users stored");
        } catch (e) {
            next(e);
        }
    }

    static async show(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Users show ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async edit(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Users edit ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Users updated ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async destroy(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Users deleted ${id}`);
        } catch (e) {
            next(e);
        }
    }
}
