class Family:
    def __init__(self, last_name, members):
        """Initialize the Family class with a last name and a list of members."""
        self.last_name = last_name
        self.members = members  

    def born(self, **kwargs):
        """Adds a new child to the family and prints a congratulatory message."""
        self.members.append(kwargs)  
        print(f"Congratulations! A new child, {kwargs['name']}, has been born into the {self.last_name} family!")

    def is_18(self, name):
        """Returns True if the given family member is 18 or older, otherwise False."""
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18  
        return None  

    def family_presentation(self):
        """Prints the last name and details of all family members."""
        print(f"The {self.last_name} Family:")
        for member in self.members:
            print(f"  - {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")



my_family = Family("Smith", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
])

my_family.family_presentation()

my_family.born(name="Emma", age=0, gender="Female", is_child=True)

print("Is Michael 18 or older?", my_family.is_18("Michael"))  # Output: True
print("Is Emma 18 or older?", my_family.is_18("Emma"))  # Output: False

my_family.family_presentation()
