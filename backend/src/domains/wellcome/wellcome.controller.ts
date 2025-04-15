import { Request, Response, NextFunction } from "express";
import WellcomeService from "./wellcome.service";

export default class WellcomeController {
    static async index(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await WellcomeService.index();
            res.json({
                msg: "successfuly",
                data: response
            });
        } catch (e) {
            next(e);
        }
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Wellcome create form");
        } catch (e) {
            next(e);
        }
    }

    static async store(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("Wellcome stored");
        } catch (e) {
            next(e);
        }
    }

    static async show(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(`Wellcome show ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async edit(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(`Wellcome edit ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(`Wellcome updated ${id}`);
        } catch (e) {
            next(e);
        }
    }

    static async destroy(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            res.send(`Wellcome deleted ${id}`);
        } catch (e) {
            next(e);
        }
    }
}
