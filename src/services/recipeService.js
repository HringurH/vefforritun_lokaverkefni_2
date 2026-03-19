const db = require('../lib/db');

const getAllRecipes = async () => {
    const result = await db.query('SELECT * FROM recipes ORDER BY name')
    return result.rows;
};

module.exports = {
    getAllRecipes
};