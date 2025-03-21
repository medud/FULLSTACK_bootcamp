
import psycopg2

DB_NAME = "RestaurantDB"
USER = "postgres"
PASSWORD = "123"
HOST = "localhost"
PORT = 5433

class MenuItem:
    def __init__(self, name: str, price: float = 0.0):
        self.name = name
        self.price = price

    def save(self):
        """Inserts the menu item into the database."""
        try:
            with psycopg2.connect(database=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id;",
                        (self.name, self.price),
                    )
                    self.item_id = cursor.fetchone()[0]
                    print(f"Saved: {self.name} (${self.price}) with ID {self.item_id}")
        except Exception as e:
            print("Error saving menu item:", e)

    def delete(self):
        """Deletes the menu item from the database."""
        return MenuManager.delete(self.name)

    def update(self, new_name, new_price):
        """Updates the menu item's name and/or price."""
        try:
            with psycopg2.connect(database=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
                with connection.cursor() as cursor:
                    cursor.execute(
                        "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s RETURNING item_name;",
                        (new_name, new_price, self.name),
                    )
                    if cursor.fetchone():
                        print(f"Updated: {self.name} → {new_name} (${new_price:.2f})")
                        self.name, self.price = new_name, new_price
                    else:
                        print("Item not found.")
        except Exception as e:
            print("Error updating menu item:", e)

    def __repr__(self):
        return f"MenuItem(name='{self.name}', price={self.price:.2f})"
