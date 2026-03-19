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
        res.status(500).send('System Error - Unable to retrieve recipes from database');
    }
};

module.exports = {
    getHomePage
};