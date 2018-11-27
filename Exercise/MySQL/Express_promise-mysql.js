router.get('/flags/:id', async (req, res) => {
    try {
        const connection = await pool.createConnection();
        try {
            const sql = `SELECT f.id, f.width, f.height, f.code, f.filename FROM flags f
                WHERE f.id = ?
                LIMIT 1`;
            const flags = await connection.query(sql, req.params.id);
            if (flags.length === 0)
                return res.status(404).send({ message: 'flag not found' });
            return res.send({ flags: 0 });
            //return res.send({ flags[0] });
        } finally {
            pool.releaseConnection(connection);
        }
    } catch (err) {
        // handle errors here
    }
});