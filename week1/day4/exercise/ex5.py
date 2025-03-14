class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! A new child, {kwargs['name']}, has been born into the {self.last_name} family!")

    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False

    def family_presentation(self):
        print(f"Here is the {self.last_name} family:")
        for member in self.members:
            print(f"{member['name']}, Age: {member['age']}, Gender: {member['gender']}, Power: {member.get('power', 'None')}, Hero Name: {member.get('incredible_name', 'None')}")

class TheIncredibles(Family):
    def __init__(self, last_name, members):
        super().__init__(last_name, members)

    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{member['incredible_name']} uses their power: {member['power']}!")
                else:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power!")

    def incredible_presentation(self):
        print("\n* Here is our powerful family *")
        self.family_presentation()

incredibles_family = TheIncredibles("Incredibles", [
    {"name": "Michael", "age": 35, "gender": "Male", "is_child": False, "power": "Fly", "incredible_name": "MikeFly"},
    {"name": "Sarah", "age": 32, "gender": "Female", "is_child": False, "power": "Read Minds", "incredible_name": "SuperWoman"}
])

incredibles_family.incredible_presentation()

incredibles_family.born(name="Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

incredibles_family.incredible_presentation()

try:
    incredibles_family.is_18("MikeFly")
    print("MikeFly is allowed to use their power.")
except Exception as e:
    print(e)

try:
    incredibles_family.is_18("Jack")
except Exception as e:
    print(e)
