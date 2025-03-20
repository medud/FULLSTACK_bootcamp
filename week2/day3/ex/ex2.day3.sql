--1
UPDATE  film set language_id = 2 where film_id=133
UPDATE  film set language_id = 2 where film_id=8

--2
SELECT * fROM language
select * from film
select * from customer_review
-- Q2/foreign keys : store_id , address_id
-- Q3/ needs extra cheking
Drop table customer_review


--4
select count(*) from  rental where return_date is null

--5

select  f.title  from  film f
join inventory i on f.film_id =i.film_id 
join rental r on i.inventory_id = r.inventory_id

where r.return_date is null 

order by f.replacement_cost desc 
limit 30




--6.1
select f.title from film f
join film_actor on f.film_id = film_actor.film_id
join actor a on film_actor.actor_id= a.actor_id
where a.first_name = 'Penelope'
and a.last_name='Monroe'
and f.description ilike '%sumo%'


--6.2
select title from film 
where rating ='R' 
and length<60


--6.3
select f.title from customer c
join payment p on  c.customer_id = p.customer_id
join rental r on p.rental_id = r.rental_id
join inventory i on r.inventory_id = i.inventory_id
join film f on i.film_id = f.film_id


--6.4
where c.first_name = 'Matthew'
and c.last_name='Mahan'
and p.amount>4
and r.return_date>'2005-07-28'
and r.return_date<'2005-08-01'




select f.title from customer c
join rental r on c.customer_id=r.customer_id
join inventory i on r.inventory_id= i.inventory_id 
join film f on i.film_id = f.film_id
where c.first_name='Matthew'
and  c.last_name='Mahan'
and (title  ilike '%boat%'
OR description  ilike '%boat%')
and f.replacement_cost=(select max (replacement_cost) from film)