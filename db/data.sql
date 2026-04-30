-- Placeholder data

INSERT INTO recipes (name, work_level, time_minutes, description, image_path) VALUES
('Cookies', 2, 30, 'Cookie desc', 'public/images/cookies.jpg'),
('Lemon Yogurt Cake', 4, 60, 'Cake desc', 'public/images/cake.jpg'),
('Pancakes', 3, 30, 'Pancake', 'public/images/pancake.jpg');

INSERT INTO ingredients (name) VALUES
('Flour'),
('Baking powder'),
('Salt'),
('Yogurt'),
('Sugar'),
('Eggs'),
('Lemon zest'),
('Vanilla extract'),
('Vegetable oil'),
('Lemon juice'),
('Confectioners'' sugar'),
('Milk');

INSERT INTO recipe_ingredients(recipe_id, ingredient_id, quantity) VALUES
(1, 1, '2 cups'), (1, 2, '1 tsp'),
(2, 1, '1 1/2 cups'), (2, 2, '2 tsp'), (2, 3, '1/2 tsp'), (2, 4, '1 cup'), (2, 5, '1 1/3 cups'), (2, 6, '3'), (2, 7, '2 tsp'), (2, 8, '1/2 tsp'), (2, 9, '1/2 cup'), (2, 10, '1/2 cup'), (2, 11, '1 cup'),
(3, 1, '1 cup'), (3, 2, '1 tsp'), (3, 3, '1/2 tsp');

INSERT INTO users(username, email, password, is_admin) VALUES
('Admin', 'admin@email.com', 'GBBO', true);

INSERT INTO users(username, email, password) VALUES
('User1', 'user1@email.com', 'password1'),
('User2', 'user2@email.com', 'password2'),
('User3', 'user3@email.com', 'password3');

INSERT INTO recipe_steps(step_number, name, description, image_path, recipe_id) VALUES
(1, 'Preparation', 'Preheat the oven to 180°C°. Grease a 22 x 11 x 6 cm loaf pan and line it with parchment paper.', 'public/images/cake_step1.jpg', 2),
(2, 'Mix the Batter', 'In a medium bowl, sift together the flour, baking powder, and salt. In a separate large bowl, whisk together the yogurt, 1 cup sugar, eggs, lemon zest and vanilla. Slowly whisk the dry ingrdients into the wet mixture until just combined. Using a rubber spatula, gently fold the vegetable oil into the batter until fully incorpotated and smooth.', 'public/images/cake_step2.jpg', 2),
(3, 'Bake', 'Transfer the batter to the prepared loaf pan. Bake for approximately 50 minutes. The cake is ready when a cake tester inserted in the center comes out clean.', 'public/images/cake_step3.jpg', 2),
(4, 'Prepare the Lemon Syrup', 'While the cake is baking, combine 1/3 cup lemon juice and 1/3 cup sugar in a small saucepan over medium heat. Stir until the sugar is dissolved and the liguid is clear. Set aside.', 'public/images/cake_step4.jpg', 2),
(5, 'Soak and Cool', 'Let the cake cool in the pan for 10 minutes. Carefully move the cake to a wire rack over a sheet pan. While the cake is still warm, pour the lemon syrup over the top and let it soak in completely. Allow the cake to cool to room temperature.', 'public/images/cake_step5.jpg', 2),
(6, 'Finishing Glaze', 'Combine the confectioners'' sugar and remaining lemon juice until smooth. Pour the glaze over the cooled cake before serving.', 'public/images/cake_step6.jpg', 2),
(1, 'Cookie Placeholder Step', 'This is a placeholder step for cookies.', 'public/images/cookies.jpg', 1),
(1, 'Pancake Placeholder Step', 'This is a placeholder step for pancakes.', 'public/images/pancake.jpg', 3);

SELECT * FROM recipes;
SELECT * FROM ingredients;
SELECT * FROM recipe_ingredients;
SELECT * FROM users;