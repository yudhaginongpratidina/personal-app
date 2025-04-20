// --------------------------------------------------------------------------------
// dependencies
// --------------------------------------------------------------------------------
import cors from 'cors';
import express from "express";
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';

// --------------------------------------------------------------------------------
// dependencies - routes
// --------------------------------------------------------------------------------
import api from "../routes/api.route.js";

// --------------------------------------------------------------------------------
// dependencies - custom middleware
// --------------------------------------------------------------------------------
import NotFoundMiddleware from '../middleware/NotFoundMiddleware.js';
import ErrorMiddleware from '../middleware/ErrorMiddleware.js';

// --------------------------------------------------------------------------------
// initialize express
// --------------------------------------------------------------------------------
const app = express();

// --------------------------------------------------------------------------------
// middlewares - app
// --------------------------------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------------------------------------
// routes
// --------------------------------------------------------------------------------
app.use('/api', api);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --------------------------------------------------------------------------------
// custom middleware
// --------------------------------------------------------------------------------
app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

// --------------------------------------------------------------------------------
// export default
// --------------------------------------------------------------------------------
export default app;