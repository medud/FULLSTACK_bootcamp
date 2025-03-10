sandwich_orders = [
    "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
    "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
    "Pastrami sandwich"
]

print("Sorry, the deli has run out of pastrami! Removing all 'Pastrami sandwich' orders...\n")

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)  
    print(f"Making your {current_sandwich}...")  
    finished_sandwiches.append(current_sandwich)  

print("\nAll sandwiches are ready! Here is what was made:")
for sandwich in finished_sandwiches:
    print(f"- {sandwich}")