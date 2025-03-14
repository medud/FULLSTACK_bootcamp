
import random
class Game:
    def get_user_item(self):
        user_item =input("électionner un élément ('p'ierre/'f'feuille/'c'ciseaux)")
        if user_item=="p" or user_item=="c" or user_item=="f" or user_item=="P" or user_item=="C" or user_item=="F":
            print("you have select",user_item.upper())
        else:
            print("nothing selected")
            self.get_user_item()
        # return user.upper()

    def get_computer_item(self):
        # print("the computer chose",computer_item)
        return random.choice(["P" "C" "F"])
    
    def get_game_result(self, user_item, computer_item):

        if computer_item ==user_item:
            print("draw")

        elif user_item == "C" and computer_item =="F":
            print("win")
        elif user_item == "F" and computer_item =="P":
            print("win")
        elif user_item == "P" and computer_item =="C":
            print("win")

        else:
            print("lose")

        


mohamed=Game()

def play(self):

    user=mohamed.get_user_item()
    com=mohamed.get_computer_item()
    mohamed.get_game_result(user,com)
        
        