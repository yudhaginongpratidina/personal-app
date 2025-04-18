// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import app from "./application/app.js";
import logger from "./application/logging.js";
import dotenv from 'dotenv';

// --------------------------------------------------------------------------------
// load env
// --------------------------------------------------------------------------------
dotenv.config();

// --------------------------------------------------------------------------------
// start server
// --------------------------------------------------------------------------------
app.listen(process.env.EXPRESS_PORT, () => {
    logger.info(`Server running on port ${process.env.EXPRESS_PORT}`);
});
