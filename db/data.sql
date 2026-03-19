-- Placeholder data

INSERT INTO recipes (name, work_level, time_minutes, description, image_path) VALUES
('Cookies', 2, 30, 'Cookie desc', 'public/images/cookies.jpg'),
('Cake', 4, 60, 'Cake desc', 'public/images/cake.jpg'),
('Pancakes', 3, 30, 'Pancake', 'public/images/pancake.jpg')

INSERT INTO ingredients (name) VALUES
('Flour'),
('Sugar'),
('Eggs'),
('Milk')

INSERT INTO recipe_ingredients(recipe_id, ingredient_id) VALUES
(1, 1), (1, 2),
(2, 1), (2, 2), (2, 3), (2, 4),
(3, 1), (3, 2), (3, 3)

INSERT INTO users(username, email, password, is_admin) VALUES
('Admin', 'admin@email.com', 'GBBO', true)

INSERT INTO users(username, email, password) VALUES
('User1', 'user1@email.com', 'password1'),
('User2', 'user2@email.com', 'password2'),
('User3', 'user3@email.com', 'password3')

SELECT * FROM recipes;
SELECT * FROM ingredients;
SELECT * FROM recipe_ingredients;
SELECT * FROM users;