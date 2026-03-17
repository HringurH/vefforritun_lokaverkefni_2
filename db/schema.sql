CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
    work_level INT CHECK (work_level >= 1 AND work_level <= 5),
    time_minutes INT NOT NULL,
    description TEXT NOT NULL,
    image_path VARCHAR(255)
)

CREATE TABLE IF NOT EXISTS ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
)

CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    quantity INT,

    PRIMARY KEY(recipe_id, ingredient_id),
    CONSTRAINT fk_ri_recipe
        FOREIGN KEY (recipe_id)
        REFERENCES recipes(id)
        ON DELETE CASCADE,
    CONSTRAINT fk_ri_ingredients
        FOREIGN KEY (ingredient_id)
        REFERENCES ingredients(id)
        ON DELETE CASCADE
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) UNIQUE CHECK (email LIKE "%_@_%._%"),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP,
    last_login TIMESTAMP
)