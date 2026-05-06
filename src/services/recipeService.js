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

const createRecipe = async (name, description, time_minutes, work_level, image_path) => {
    const sql = 'INSERT INTO recipes (name, description, time_minutes, work_level, image_path) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, description, time_minutes, work_level, image_path];
    const result = await db.query(sql, values);

    return result.rows[0];
};

const createRecipeIngredient = async (recipeId, ingredientId, quantity) => {
    const sql = 'INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES ($1, $2, $3)';
    const values = [recipeId, ingredientId, quantity];
    await db.query(sql, values);
};

const createRecipeStep = async (recipeId, stepNumber, instruction) => {
    const sql = 'INSERT INTO recipe_steps (recipe_id, step_number, instruction) VALUES ($1, $2, $3)';
    const values = [recipeId, stepNumber, instruction];
    await db.query(sql, values);
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    getIngredientsByRecipeId,
    getStepsByRecipeId,
    createRecipe,
    createRecipeIngredient,
    createRecipeStep
};