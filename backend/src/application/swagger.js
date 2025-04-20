import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
dotenv.config();

const getEnv = (key, fallback) => {
    return process.env[key] && process.env[key].trim() !== ''
        ? process.env[key]
        : fallback;
};

const SWAGGER_OPEN_API_VERSION = getEnv('SWAGGER_OPEN_API_VERSION', '3.0.0');
const SWAGGER_INFO_TITLE = getEnv('SWAGGER_INFO_TITLE', 'API Dokumentation');
const SWAGGER_INFO_VERSION = getEnv('SWAGGER_INFO_VERSION', '1.0.0');

const SWAGGER_CONTACT_NAME = getEnv('SWAGGER_CONTACT_NAME', 'API Team');
const SWAGGER_CONTACT_EMAIL = getEnv('SWAGGER_CONTACT_EMAIL', 'support@example.com');
const SWAGGER_CONTACT_URL = getEnv('SWAGGER_CONTACT_URL', 'https://github.com/your-org/your-repo');

const SWAGGER_DEVELOPMENT_SERVER = getEnv('SWAGGER_DEVELOPMENT_SERVER', 'http://localhost:3000');
const SWAGGER_PRODUCTION_SERVER = getEnv('SWAGGER_PRODUCTION_SERVER', 'https://api.example.com');

const SWAGGER_BEARER_AUTH_TYPE = getEnv('SWAGGER_BEARER_AUTH_TYPE', 'http');
const SWAGGER_BEARER_AUTH_SCHEME = getEnv('SWAGGER_BEARER_AUTH_SCHEME', 'bearer');
const SWAGGER_BEARER_AUTH_BEARER_FORMAT = getEnv('SWAGGER_BEARER_AUTH_BEARER_FORMAT', 'JWT');

const swaggerOptions = {
    definition: {
        openapi: SWAGGER_OPEN_API_VERSION,
        info: {
            title: SWAGGER_INFO_TITLE,
            version: SWAGGER_INFO_VERSION,
            contact: {
                name: SWAGGER_CONTACT_NAME,
                email: SWAGGER_CONTACT_EMAIL,
                url: SWAGGER_CONTACT_URL
            }
        },
        servers: [
            {
                url: SWAGGER_DEVELOPMENT_SERVER,
                description: 'Development'
            },
            {
                url: SWAGGER_PRODUCTION_SERVER,
                description: 'Production'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: SWAGGER_BEARER_AUTH_TYPE,
                    scheme: SWAGGER_BEARER_AUTH_SCHEME,
                    bearerFormat: SWAGGER_BEARER_AUTH_BEARER_FORMAT
                }
            }
        }
    },
    apis: ['./**/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
export default swaggerSpec;
