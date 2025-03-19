SELECT * FROM language;

SELECT 
    film.title, 
    film.description, 
    language.name AS language_name
FROM film
INNER JOIN language ON film.language_id = language.language_id;


SELECT 
    film.title, 
    film.description, 
    language.name AS language_name
FROM film
LEFT JOIN language ON film.language_id = language.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
    ('Inception'),
    ('The Godfather');
    
SELECT * FROM new_film;




Create the corrected table
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY, 
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT NOT NULL,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE
);
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
    (1, 1, 'Amazing film', 9, 'Inception is a mind-bending masterpiece with stunning visuals and a great plot.'),
    (2, 2, 'Awsome Spectacle', 8, 'Interstellar is a breathtaking space epic that blends science and emotion beautifully.');

DELETE FROM new_film WHERE id = 1;
SELECT * FROM customer_review;



