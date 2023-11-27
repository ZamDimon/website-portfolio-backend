/**
 * Function that generates a json response with an array of resource keys
 * @param {int} id: a list of ids to render
 * @param {string} type: a type of the object
 * @returns Generated json response
 */
function convertIDsToKeys(ids, type) {
    return ids.map((id) => {
        return {
            "id": id,
            "type": type
        }
    })
}

module.exports = {
    convertIDsToKeys
}