
INSERT INTO items (name, price)
VALUES 
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);
SELECT * FROM items;
delete from items where item_id in (5,6)

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);


INSERT INTO customers (first_name, last_name) 
VALUES 
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');

SELECT * FROM customers;

SELECT * FROM items;
SELECT * FROM items where price> 80;
SELECT * FROM items where price< 300;
select * from customers where last_name= 'Smith';
-- outcme nothing
select * from customers where last_name= 'Jones';
select * from customers where last_name= 'Scott';


