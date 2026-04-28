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

const getIngredientsByRecipeId = async (id) => {
    const result = await db.query('SELECT i.name, ri.quantity FROM ingredients i JOIN recipe_ingredients ri ON i.id = ri.ingredient_id WHERE ri.recipe_id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows;
};

const getStepsByRecipeId = async (id) => {
    const result = await db.query('SELECT * FROM recipe_steps WHERE recipe_id = $1', [id]);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows;
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    getIngredientsByRecipeId,
    getStepsByRecipeId
};