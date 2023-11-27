module.exports = {
    achievements: {
        get: require('./get_achievement'),
        add: require('./add_achievements'),
        delete: require('./delete_achievement'),
        update: require('./update_achievement')
    }
}