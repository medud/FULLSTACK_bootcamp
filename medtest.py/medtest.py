import random
class Game:
    def __init__(self):
        self.choices = ["rock", "paper", "scissors"]

    def get_user_item(self):
        while True:
            user_choice = input("Choose rock, paper, or scissors: ").lower()
            if user_choice in self.choices:
                return user_choice
            print("Invalid choice. Please select rock, paper, or scissors.")
# # def computer_item(self):

#     def get_game_result(self, user_item, computer_item):_