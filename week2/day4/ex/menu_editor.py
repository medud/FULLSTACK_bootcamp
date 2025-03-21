

from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\nMenu Options:")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show the Menu")
        print("E - Exit")

        choice = input("Choose an option: ").strip().upper()

        if choice == "V":
            item_name = input("Enter item name to view: ").strip()
            item = MenuManager.get_by_name(item_name)
            print(item if item else "Item not found.")
        elif choice == "A":
            add_item_to_menu()
        elif choice == "D":
            remove_item_from_menu()
        elif choice == "U":
            update_item_from_menu()
        elif choice == "S":
            show_restaurant_menu()
        elif choice == "E":
            show_restaurant_menu()
            print("Exiting program...")
            break
        else:
            print("Invalid option. Please try again.")

def add_item_to_menu():
    name = input("Enter item name: ").strip()
    price = input("Enter item price: ").strip()

    try:
        price = float(price)
        item = MenuItem(name, price)
        item.save()
        print("Item was added successfully.")
    except ValueError:
        print("Invalid price. Please enter a numeric value.")

def remove_item_from_menu():
    name = input("Enter item name to remove: ").strip()
    if MenuManager.delete(name):
        print("Item was deleted successfully.")
    else:
        print("Item not found.")

def update_item_from_menu():
    old_name = input("Enter current item name: ").strip()
    new_name = input("Enter new item name: ").strip()
    new_price = input("Enter new item price: ").strip()

    try:
        new_price = float(new_price)
        item = MenuItem(old_name)
        item.update(new_name, new_price)
    except ValueError:
        print("Invalid price. Please enter a numeric value.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        print("\nRestaurant Menu:")
        for item in items:
            print(f"{item[1]} - ${item[2]:.2f}")
    else:
        print("The menu is empty.")

if __name__ == "__main__":
    show_user_menu()
