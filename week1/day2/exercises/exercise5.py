import random

def guess_number(user_number):
    if not (1 <= user_number <= 100):
        print("Please enter a number between 1 and 100.")
        return
    
    random_number = random.randint(1, 100)  

    if user_number == random_number:
        print(f"🎉 Success! You guessed the correct number: {user_number}.")
    else:
        print(f" Fail! Your number: {user_number}, Random number: {random_number}.")

guess_number(25) 