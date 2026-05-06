const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController')

router.get('/', recipeController.getHomePage);
router.get('/recipe/new', recipeController.getRecipeForm);
router.post('/recipe', recipeController.createRecipe);
router.get('/recipe/:id', recipeController.getRecipeDetails);

module.exports = router;