class dog():
    def __init__(self,name,height):
        
        self.name=name
        self.height=height

    def bark(self):
         
        print(f"{self.name} goes woof!")
    def jump(self):

        print(f"{self.name} jumps {self.height*2}cm high!")

davids_dog=dog("Rex",50)

print(f"{davids_dog.name} {davids_dog.height}")
davids_dog.bark()
davids_dog.jump()
       
sarahs_dog=dog("Teacup",20)

print(f"{sarahs_dog.name} {sarahs_dog.height}")

bigger_dog=davids_dog
if sarahs_dog.height > davids_dog.height:
    bigger_dog =sarahs_dog
    
    print (f"the bigger dog is {bigger_dog.name}")

