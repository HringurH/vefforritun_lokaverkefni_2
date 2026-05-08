const recipeService = require('../services/recipeService');

const getHomePage = async (req, res) => {
    try {
        const recipes = await recipeService.getAllRecipes();
        
        res.render('index', {
            title: 'Cookies & Cakes',
            recipes: recipes
        });
    } catch (error) {
        console.error('Error retrieving recipes from database:', error);
        res.status(500).render('500', {title: 'Internal Server Error (500)'});
    }
};

const getRecipeDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const recipe = await recipeService.getRecipeById(id);
        const ingredients = await recipeService.getIngredientsByRecipeId(id);
        const steps = await recipeService.getStepsByRecipeId(id);

        if (!recipe) {
            return res.status(404).render(('404', {title: 'Recipe Not Found (404)'}))
        }

        res.render('recipe-details', {
            title: recipe.name,
            recipe: recipe,
            ingredients: ingredients,
            steps: steps
        });
    } catch (error) {
        console.error('Error fetching recipe', error);
        res.status(500).render('500', {title: 'Internal Server Error (500)'});
    }
}

const getRecipeForm = (req, res) => {
    res.render('add-recipe', {
        title: 'Add New Recipe'
    });
}

const getRecipeIngredientForm = (req, res) => {
    res.render('add-ingredient', {
        title: 'Add New Ingredient'
    });
}

const getRecipeStepForm = (req, res) => {
    res.render('add-step', {
        title: 'Add New Step'
    });
}

const createRecipe = async (req, res) => {
    try {
        const { name, description, time_minutes, work_level, image_path} = req.body;
        const recipe = await recipeService.createRecipe(name, description, time_minutes, work_level, image_path);
        const recipeId = recipe.id;

        res.redirect(`/recipe/${recipeId}`);
    } catch (error) {
        console.error('Error creating recipe', error);
        res.status(500).render('500', {title: 'Internal Server Error (500)'});
    }
};

const addIngredient = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { name, quantity } = req.body;

        await recipeService.addIngredientToRecipe(recipeId, name, quantity);

        res.redirect(`/recipe/${recipeId}`);
    } catch (error) {
        console.error('Error adding ingredient:', error);
        res.status(500).render('500', { title: 'Internal Server Error (500)' });
    }
};

const addStep = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { name, step_number, description } = req.body;

        await recipeService.addStepToRecipe(recipeId, { name, step_number, description });

        res.redirect(`/recipe/${recipeId}`);
    } catch (error) {
        console.error('Error adding step:', error);
        res.status(500).render('500', { title: 'Internal Server Error (500)' });
    }
};

const getRemoveRecipeForm = (req, res) => {
    res.render('remove-recipe', {
        title: 'Remove Recipe'
    });
}

const removeRecipeByName = async (req, res) => {
    try {
        const { name } = req.body;
        await recipeService.deleteRecipeByName(name);
        res.redirect('/');
    } catch (error) {
        console.error('Error removing recipe:', error);
        res.status(500).render('500', { title: 'Internal Server Error (500)' });
    }
};

module.exports = {
    getHomePage,
    getRecipeDetails,
    getRecipeForm,
    createRecipe,
    addIngredient,
    addStep,
    getRemoveRecipeForm,
    removeRecipeByName
};