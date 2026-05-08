const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController')

router.get('/', recipeController.getHomePage);
router.get('/recipe/new', recipeController.getRecipeForm);
router.post('/recipe/new', recipeController.createRecipe);
router.get('/recipe/remove', recipeController.getRemoveRecipeForm);
router.post('/recipe/remove', recipeController.removeRecipeByName);
router.get('/recipe/:id', recipeController.getRecipeDetails);
router.post('/recipe/:id/ingredient', recipeController.addIngredient);
router.post('/recipe/:id/step', recipeController.addStep);

module.exports = router;