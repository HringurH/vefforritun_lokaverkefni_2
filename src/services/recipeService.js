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
    const result = await db.query('SELECT * FROM recipe_steps WHERE recipe_id = $1 ORDER BY step_number', [id]);

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

getIngredientIdbyName = async (name) => {
    const result = await db.query('SELECT id FROM ingredients WHERE name = $1', [name]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0].id;
}

const addIngredientToRecipe = async (recipeId, name, quantity) => {
    const ingredientId = await getIngredientIdbyName(name);

    if (!ingredientId) {
        const insertResult = await db.query('INSERT INTO ingredients (name) VALUES ($1) RETURNING id', [name]);
        const newIngredientId = insertResult.rows[0].id;
        await createRecipeIngredient(recipeId, newIngredientId, quantity);
    } else {
        await createRecipeIngredient(recipeId, ingredientId, quantity);
    }
};

const addStepToRecipe = async (recipeId, { name, step_number, description }) => {
    await db.query('INSERT INTO recipe_steps (recipe_id, step_number, name, description) VALUES ($1, $2, $3, $4)', [recipeId, step_number, name, description]);
};

const getRecipeIdByName = async (name) => {
    const result = await db.query('SELECT id FROM recipes WHERE name = $1', [name]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0].id;
};

const deleteRecipeByName = async (name) => {
    const recipeId = await getRecipeIdByName(name);
    if (recipeId) {
        await db.query('DELETE FROM recipes WHERE id = $1', [recipeId]);
    }
};

module.exports = {
    getAllRecipes,
    getRecipeById,
    getIngredientsByRecipeId,
    getStepsByRecipeId,
    createRecipe,
    createRecipeIngredient,
    createRecipeStep,
    addIngredientToRecipe,
    addStepToRecipe,
    getRecipeIdByName,
    deleteRecipeByName
};