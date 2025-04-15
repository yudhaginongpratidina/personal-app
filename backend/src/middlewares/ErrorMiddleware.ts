// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import { Response, Request, NextFunction } from "express";
import { ZodError } from "zod";
import ResponseError from "@/utils/response_error";

// --------------------------------------------------------------------------------
// configure error middleware
// --------------------------------------------------------------------------------
const ErrorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        const { issues } = error;
        const status = 400;
        res.status(status).json({
            message: issues
                .map((issue) => ({
                    path: issue.path[0],
                    message: issue.message,
                }))
        })
    } else if (error instanceof ResponseError) {
        res.status(error.status).json({
            errors: error.message
        });
    } else {
        res.status(500).json({
            errors: error.message
        });
    }
}

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default ErrorMiddleware