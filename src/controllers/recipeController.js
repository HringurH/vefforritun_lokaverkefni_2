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
        //const steps = await recipeService.getStepsByRecipeId(id);

        if (!recipe) {
            return res.status(404).render(('404', {title: 'Recipe Not Found (404)'}))
        }

        res.render('recipe-details', {
            title: recipe.name,
            recipe: recipe
        });
    } catch (error) {
        console.error('Error fetching recipe', error);
        res.status(500).render('500', {title: 'Internal Server Error (500)'});
    }
}

module.exports = {
    getHomePage,
    getRecipeDetails
};