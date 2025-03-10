number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

multiples_list = [number * i for i in range(1, length + 1)]

print("Multiples list:", multiples_list)
