
import psycopg2

DB_NAME = "RestaurantDB"
USER = "postgres"
PASSWORD = "123"
HOST = "localhost"
PORT = 5433

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        """Fetch a menu item by its name."""
        try:
            with psycopg2.connect(database=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
                with connection.cursor() as cursor:
                    cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
                    item = cursor.fetchone()
                    return item if item else None
        except Exception as e:
            print("Error fetching menu item:", e)
            return None

    @classmethod
    def all_items(cls):
        """Fetch all menu items."""
        try:
            with psycopg2.connect(database=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
                with connection.cursor() as cursor:
                    cursor.execute("SELECT * FROM Menu_Items")
                    return cursor.fetchall()
        except Exception as e:
            print("Error fetching menu items:", e)
            return []

    @classmethod
    def delete(cls, name):
        """Deletes a menu item by name."""
        try:
            with psycopg2.connect(database=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT) as connection:
                with connection.cursor() as cursor:
                    cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s RETURNING item_name;", (name,))
                    return cursor.fetchone() is not None  # Returns True if deletion succeeded
        except Exception as e:
            print("Error deleting menu item:", e)
            return False
