/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('achievements', {
        id: 'id',
        name: { type: 'text', notNull: true },
        url: { type: 'text', notNull: true },
        year: { type: 'integer', notNull: true },
        subject: { type: 'text', notNull: true },
        level: { type: 'smallint', notNull: true },
        place: { type: 'smallint', notNull: true },
        result: { type: 'text', notNull: true },
    })
}

exports.down = (pgm) => {
    pgm.dropTable('achievements', { ifExists: true })
}
