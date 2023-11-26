/**
 * Function that generates a json response for a 500 error
 * @returns Generated json response
 */
function internalError() {
    return {
        "errors": [{
            "title": "Internal server error",
            "detail": "Some internal error occurred. Please report this error to service maintainers.",
            "status": 500,
            "code": "internal-error"
        }]
    }
}

/**
 * Function that generates a json response for a 404 error
 * @returns Generated json response
 */
function notFoundError() {
    return {
        "errors": [{
            "title": "Not found error",
            "detail": "The requested resource could not be found.",
            "status": 404,
            "code": "not-found"
        }]
    }
}

module.exports = {
    internalError,
    notFoundError
}