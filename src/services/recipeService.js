const db = require('../lib/db');

const getAllRecipes = async () => {
    const result = await db.query('SELECT * FROM recipes ORDER BY name')
    return result.rows;
};

const getRecipeById = async (id) => {
    const result = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0]
};

module.exports = {
    getAllRecipes,
    getRecipeById
};