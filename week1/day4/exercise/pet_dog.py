import random
from dog import Dog  

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False  
    def train(self):
        """Sets the dog as trained and makes it bark"""
        print(self.bark())  # Call the bark method
        self.trained = True  # Set trained status to True

    def do_a_trick(self):
        """Performs a random trick if the dog is trained."""
        import random

        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll!",
                f"{self.name} stands on its back legs!",
                f"{self.name} shakes your hand!",
                f"{self.name} plays dead!"
            ]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet!")

    def play(self, *dog_names):
        """Makes the dog play with other dogs"""
        names = ', '.join(dog_names)
        print(f"{self.name}, {names} all play together!")



if __name__ == "__main__":
    from dog import Dog  

    dog1 = Dog("Buddy", 4, 20)
    dog2 = Dog("Charlie", 3, 25)
    dog3 = Dog("Rocky", 5, 30)

    print(dog1.bark())  # Buddy is barking!
    print(dog2.bark())  # Max is barking!

    print(f"{dog1.name} runs at a speed of {dog1.run_speed()} m/s")
    print(f"{dog2.name}'s running speed is {dog2.run_speed()} m/s")

    print(dog1.name, "vs", dog2.name, ":", dog1.fly())  
    print(dog2.name, "vs", dog1.name, "->", dog2.fly())  

my_dog = PetDog("Charlie", 4, 18)
print(my_dog.bark())  
my_dog.train()  

my_dog.do_a_trick()  

my_dog.play("Buddy", "Rocky", "Max")  