class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking!"

    def run_speed(self):
        return self.weight / self.age * 10  

    def fight(self, other_dog):
        my_power = self.weight * self.run_speed()
        opponent_power = other_dog.weight * other_dog.run_speed()  

        if my_power > opponent_power:
            return f"{self.name} wins the fight!"
        elif my_power < opponent_power:
            return f"{other_dog.name} wins the fight!"
        else:
            return "It's a tie!"
