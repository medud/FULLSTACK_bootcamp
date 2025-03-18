SELECT *FROM customer

SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;

select create_date 
from customer;

select * from customer
order by first_name desc;

select film_id, title, description,release_year, rental_rate from film 
order by rental_rate desc;

SELECT address,phone FROM address 
where district='Texas'

select * from film
where film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Airport Pollock';


SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Af%';

SELECT replacement_cost 
from film 
order by replacement_cost asc
limit 10;
SELECT film_id, title, description, length, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

SELECT customer.customer_id, customer.first_name, customer.last_name, 
       payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;

SELECT  film.title FROM film
WHERE NOT EXISTS (
    SELECT 1 FROM inventory WHERE inventory.film_id = film.film_id
);
SELECT city.city_id, city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

SELECT customer.customer_id, customer.first_name, customer.last_name, 
       payment.amount, payment.payment_date, payment.staff_id
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id ASC;





