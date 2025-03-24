# # class Member:

# #     not_allowed_name = ["hell","shit","baloot"]

# #     users_num =0
    
# #     @classmethod
# #     def show_users_count(cls):
# #         print(f"we have {cls.users_num} users in our SYSTEM")


# #     def __init__(self ,first_name,last_name,third_name,gender):

# #         self.fname = first_name
# #         self.lname = last_name
# #         self.tname = third_name
# #         self.gender = gender

# #         Member.users_num+=1


# #     def full_name(self):

# #         if self.fname in Member.not_allowed_name:

# #             raise ValueError("the name is not allawed")
        
# #         else:
        
# #              return f"{self.fname},{self.lname},{self.tname}"
    
# #     def gender_def(self):

# #         if self.gender == "male":
        

# #             return f"hello mr{self.fname}"
    
# #         elif self.gender == "female":

# #             return f"hello miss{self.fname}"
        
# #         else:
# #             return f"{self.fname}r"
        

# #     def get_all_info(self):

# #         return f" {self.gender_def()} your full name is {self.full_name()}" 


         
# # print(Member.users_num)
# # member_two= Member("khalil","mohamed","ali","male")
# # member_three= Member("med","ali","mahmoud","male")
# # member_one= Member("oumaima","ali","mahmoud","female")
# # member_four= Member("hell","shit","mahmoud","female")
# # print(Member.users_num)



# # # print (member_one.fname,member_one.lname,member_one.tname)
# # # print (member_two.fname) 
# # # print (member_three.fname)  
# # try:
# #     member_four = Member("hell", "shit", "mahmoud", "female")
# #     print(member_four.get_all_info())  # This will NOT execute
# # except ValueError as e:
# #     print(f"Error: {e}") 


# # Member.show_users_count()



# # # 

# # class Food:


# #     def __init__(self,name ):
        
# #         print("food is creted from base class")

# #     def eat (self):
# #         print("eat method ")



# # class Apple(Food):

# #     def __init__(self,name):

# #         self.name=name

# #         # Food.__init__(self.name)
        
# #         print(f"{name} is created from derived class ")

# # # food_one  =Food()
# # food_two=Apple("pizza")
# # food_two.eat()

# # class Menmeber:
 
# #     def __init__(self,name):
    
# #       self.__name=name


# #     def say_hello (self):
       
# #        return f"hello {self.__name}"
       

# # one=Menmeber("aziz")

# # # print (one.say_hello())
# # print(one._Menmeber__name)

# # one.name=("zbigho")

# # print (one.name)


# # one = Menmeber("Ahmed")      

# # print(one.name)

# class BankAccount:

#     def __init__(self,balance):

#         self.balance=balance

#     def deposit(self):

#         balance+= balance


import sqlite3
import random

def create_table():
    conn = sqlite3.connect("game_scores.db")
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            player TEXT,
            attempts INTEGER
        )
    """)
    conn.commit()
    conn.close()

def save_score(player, attempts):
    conn = sqlite3.connect("game_scores.db")
    c = conn.cursor()
    c.execute("INSERT INTO scores (player, attempts) VALUES (?, ?)", (player, attempts))
    conn.commit()
    conn.close()

def show_scores():
    conn = sqlite3.connect("game_scores.db")
    c = conn.cursor()
    c.execute("SELECT * FROM scores ORDER BY attempts ASC LIMIT 10")
    scores = c.fetchall()
    conn.close()
    print("\nTop Scores:")
    for score in scores:
        print(f"{score[1]}: {score[2]} attempts")

def play_game():
    print("Welcome to the Number Guessing Game!")
    player = input("Enter your name: ")
    number_to_guess = random.randint(1, 100)
    attempts = 0
    
    while True:
        try:
            guess = int(input("Guess a number between 1 and 100: "))
            attempts += 1
            if guess < number_to_guess:
                print("Too low! Try again.")
            elif guess > number_to_guess:
                print("Too high! Try again.")
            else:
                print(f"Congratulations {player}! You guessed the number in {attempts} attempts.")
                save_score(player, attempts)
                break
        except ValueError:
            print("Invalid input! Please enter a number.")
    
    show_scores()

if __name__ == "__main__":
    create_table()
    play_game()
