class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}  
    def add_animal(self, animal, count=1):

        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        print(f"{self.name}'s Farm\n")
        for animal, count in sorted(self.animals.items()):
            print(f"{animal:<10}: {count}")  
        print("\nE-I-E-I-O!")  

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_list = self.get_animal_types()
        print(f"{self.name}'s Farm has {', '.join(animal_list)}.")
        


macdonald_farm = Farm("McDonald")

macdonald_farm.add_animal("Cow", 5)
macdonald_farm.add_animal("Sheep")
macdonald_farm.add_animal("Sheep", 3)
macdonald_farm.add_animal("Goat", 12)

macdonald_farm.get_info()

macdonald_farm.get_short_info()



class Farm:
    def __init__(self, farm_name):
        """Initialize the Farm with a name and an empty dictionary of animals."""
        self.name = farm_name
        self.animals = {}  

    def add_animal(self, animal, count=1):
        """Adds an animal to the farm with a default count of 1.
        If the animal already exists, increment its count."""
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count

    def get_info(self):
        """Prints the list of animals on the farm in a nicely formatted way."""
        print(f"{self.name}'s Farm\n")
        for animal, count in sorted(self.animals.items()):
            print(f"{animal:<10}: {count}")  

        print("\nE-I-E-I-O!")  

    def get_animal_types(self):
        """Returns a sorted list of all unique animal types in the farm."""
        return sorted(self.animals.keys())

    def get_short_info(self):
        """Returns a summary sentence of the animals on the farm."""
        animal_list = self.get_animal_types()
        
        formatted_animals = [
            animal + "s" if self.animals[animal] > 1 else animal
            for animal in animal_list
        ]

        if len(formatted_animals) == 1:
            summary = formatted_animals[0]
        elif len(formatted_animals) == 2:
            summary = " and ".join(formatted_animals)
        else:
            summary = ", ".join(formatted_animals[:-1]) + " and " + formatted_animals[-1]

        return f"{self.name}'s farm has {summary}."


macdonald_farm = Farm("McDonald")

macdonald_farm.add_animal("Cow", 5)
macdonald_farm.add_animal("Sheep")
macdonald_farm.add_animal("Sheep", 3)
macdonald_farm.add_animal("Goat", 12)

macdonald_farm.get_info()

print(macdonald_farm.get_short_info())
