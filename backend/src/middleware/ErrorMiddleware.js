// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import { ZodError } from "zod";
import ResponseError from "../utils/ResponseError.js";

// --------------------------------------------------------------------------------
// configure error middleware
// --------------------------------------------------------------------------------
const ErrorMiddleware = async (error, req, res, next) => {
    if (error instanceof ZodError) {
        const { issues } = error;
        const status = 400;
        res.status(status).json({
            data: issues.map((issue) => ({
                path: issue.path[0],
                message: issue.message
            }))
        });
    } else if (error instanceof ResponseError) {
        res.status(error.status).json({
            message: error.message,
        });
    } else {
        res.status(500).json({
            errors: error.message,
        });
    }
};

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default ErrorMiddleware;
