function addAchievements(achievementsQuerier) {
    return async (_, response) => {
        try {
            var rows = await achievementsQuerier.listAchievements()
        } catch (err) {
            console.log(err)
        }
            
        response.send(rows)
    }
}

module.exports = addAchievements