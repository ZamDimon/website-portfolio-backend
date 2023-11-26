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

/**
 * Function that generates a json response for a 400 error
 * @param {any} errs: a list of errors
 * @returns Generated json response
 */
function badRequestError(errs) {
    return {
        "title": "Bad Request",
        "detail": "Some data in the request was invalid. Please refer to the service documentation.",
        "status": 400,
        "meta": {
          "error": errs[0]['msg']
        }
    }
}

module.exports = {
    internalError,
    notFoundError,
    badRequestError
}