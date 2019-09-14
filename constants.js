'use strict';
export default Object.freeze({
    MONGODB_URL: "mongodb://127.0.0.1:27017/payoda",
    PORT: 3000,
    RESPONSE: {
        ERROR: {
            STATUS: 500,
            MESSAGE: 'Internal server error'
        },
        BAD_REQUEST: {
            STATUS: 400,
        },
        OK: {
            STATUS: 200,
        },
        NOT_FOUND: {
            STATUS: 404,
        },
        UNAUTHORIZED: {
            STATUS: 401,
        }
    },
    DUPLICATE_KEY: {
        CODE: 11000,
        MESSAGE: 'Email already exist',
    },
});
