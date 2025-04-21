export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly details?: any;

    constructor( message: string, statusCode: number, isOperational=true, details?: any) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.details = details;
        Error.captureStackTrace(this);

        // Set the prototype explicitly.
        // Object.setPrototypeOf(this, AppError.prototype);
    }
}

// Not found error
export class NotFoundError extends AppError {
    constructor(message: 'Resources not found', details?: any) {
        super(message, 404, true, details);
        this.name = 'NotFoundError';
    }
}
// Bad request error
export class BadRequestError extends AppError {
    constructor(message: 'Bad request', details?: any) {
        super(message, 400, true, details);
        this.name = 'BadRequestError';
    }
}
// Unauthorized error
export class UnauthorizedError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 401, true, details);
        this.name = 'UnauthorizedError';
    }
}
// Forbidden error
export class ForbiddenError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 403, true, details);
        this.name = 'ForbiddenError';
    }
}
// Internal server error
export class InternalServerError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 500, false, details);
        this.name = 'InternalServerError';
    }
}
// Validation error - (use for joi/zod validation req.body)
export class ValidationError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 400, true, details);
        this.name = 'ValidationError';
    }
}
// Conflict error
export class ConflictError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 409, true, details);
        this.name = 'ConflictError';
    }
}
// Method not allowed error
export class MethodNotAllowedError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 405, true, details);
        this.name = 'MethodNotAllowedError';
    }
}
// Service unavailable error
export class ServiceUnavailableError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 503, true, details);
        this.name = 'ServiceUnavailableError';
    }
}
// Gateway timeout error
export class GatewayTimeoutError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 504, true, details);
        this.name = 'GatewayTimeoutError';
    }
}
// Error middleware
export const errorMiddleware = (err: Error, req: any, res: any, next: any) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            details: err.details,
        });
    }
    console.error(err);
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
}

// Auth error
export class AuthError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 401, true, details);
        this.name = 'AuthError';
    }
}
// Database error
export class DatabaseError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 500, false, details);
        this.name = 'DatabaseError';
    }
}

// Rate limit error
export class RateLimitError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 429, true, details);
        this.name = 'RateLimitError';
    }
}
// Not implemented error
export class NotImplementedError extends AppError {
    constructor(message: string, details?: any) {
        super(message, 501, true, details);
        this.name = 'NotImplementedError';
    }
}