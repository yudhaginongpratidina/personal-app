export default class WellcomeController {
    static async index(req, res, next) {
        try {
            res.status(200).json({
                message: "successfuly",
                data: "api is running"
            });
        } catch (e) {
            next(e);
        }
    }

    static async create(req, res, next) {
        try {
            res.send("Wellcome create form");
        } catch (e) {
            next(e);
        }
    }

    static async store(req, res, next) {
        try {
            res.send("Wellcome stored");
        } catch (e) {
            next(e);
        }
    }

    static async show(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Wellcome show ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async edit(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Wellcome edit ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async update(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Wellcome updated ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async destroy(req, res, next) {
        try {
            const { id } = req.params;
            res.send(`Wellcome deleted ${id}`);
        } catch (e) {
            next(e);
        }
    }
}
