import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add two Circle instances")

    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        raise TypeError("Can only compare two Circle instances")

    def __le__(self, other):
        if isinstance(other, Circle):
            return self.radius <= other.radius
        raise TypeError("Can only compare two Circle instances")

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        raise TypeError("Can only compare two Circle instances")

c1 = Circle(3)
c2 = Circle(5)
c3 = Circle(2)

print(c1)  
print(repr(c2))  

print(c1.diameter)  
print(c1.area)  

c1.diameter = 10
print(c1.radius)  

c4 = c1 + c2
print(c4.radius)  
print(c1 < c2)  
print(c1 == c2)  

circle_list = [c1, c2, c3, c4]
circle_list.sort()
print(circle_list)  
