import * as db from '../db.js';

app.get('/:id', async (req, res, next) => {
    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.params.id])
    res.send(result.rows[0])
})