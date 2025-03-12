class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age 
cat1=Cat("halima",5)
cat2=Cat("lisa",10)
cat3=Cat("tima",4)

def old_Cat():
    age_max = cat1.age
    catenam=cat1.name

    if age_max<cat2.age:
        age_max=cat2.age
        catenam=cat2.name


    if age_max<cat3.age:
        age_max=cat3.age
        catenam=cat3.name

    
        #The oldest cat is <cat_name>, and is <cat_age> years old.
    print(f"The oldest cat is {catenam} , and is {age_max} years old.")
old_Cat() 

   