const errorMiddleware = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Server Error";
    let errorType = err.name || "UnknownError";

    console.error(`❌ [${errorType}] ${message}`);

    switch (errorType) {
        // Mongoose: Invalid ObjectId (e.g., malformed ID)
        case "CastError":
            message = `Resource not found with id: ${err.value}`;
            statusCode = 404;
            break;

        // Mongoose: Duplicate key error (e.g., unique field conflict)
        case "MongoServerError":
            if (err.code === 11000) {
                message = "Duplicate field value entered";
                statusCode = 400;
            }
            break;

        // Mongoose: Validation error (e.g., missing required fields)
        case "ValidationError":
            message = Object.values(err.errors).map(val => val.message).join(", ");
            statusCode = 400;
            break;

        // JWT: Invalid or expired token
        case "JsonWebTokenError":
            message = "Invalid token, please log in again";
            statusCode = 401;
            break;

        case "TokenExpiredError":
            message = "Your session has expired, please log in again";
            statusCode = 401;
            break;

        // Express Built-in Errors
        case "SyntaxError":
            if (err.message.includes("Unexpected token")) {
                message = "Invalid JSON syntax in request body";
                statusCode = 400;
            }
            break;

        // Handle missing routes (404)
        case "NotFoundError":
            message = "Requested resource not found";
            statusCode = 404;
            break;

        // Generic Errors (Unhandled Rejections, Server Errors, etc.)
        default:
            message = err.message || "An unexpected error occurred";
            statusCode = err.statusCode || 500;
            break;
    }

    res.status(statusCode).json({
        success: false,
        errorType,
        message
    });
};

export default errorMiddleware;