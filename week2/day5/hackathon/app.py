from flask import Flask, request, jsonify
from menu_item import MenuItem
from menu_manager import MenuManager

app = Flask(__name__)

# Get all menu items
@app.route('/menu', methods=['GET'])
def get_menu():
    items = MenuManager.all_items()
    return jsonify([{"id": item[0], "name": item[1], "price": item[2]} for item in items])

# Get a single menu item by name
@app.route('/menu/<string:item_name>', methods=['GET'])
def get_menu_item(item_name):
    item = MenuManager.get_by_name(item_name)
    if item:
        return jsonify({"id": item[0], "name": item[1], "price": item[2]})
    return jsonify({"error": "Item not found"}), 404

# Add a new menu item
@app.route('/menu', methods=['POST'])
def add_menu_item():
    data = request.json
    name = data.get("name")
    price = data.get("price")

    if not name or price is None:
        return jsonify({"error": "Missing name or price"}), 400

    try:
        price = float(price)
        item = MenuItem(name, price)
        item.save()
        return jsonify({"message": "Item added successfully", "name": name, "price": price}), 201
    except ValueError:
        return jsonify({"error": "Invalid price format"}), 400

# Update a menu item
@app.route('/menu/<string:old_name>', methods=['PUT'])
def update_menu_item(old_name):
    data = request.json
    new_name = data.get("name")
    new_price = data.get("price")

    if not new_name or new_price is None:
        return jsonify({"error": "Missing new name or price"}), 400

    try:
        new_price = float(new_price)
        item = MenuItem(old_name)
        if item.update(new_name, new_price):
            return jsonify({"message": "Item updated successfully", "new_name": new_name, "new_price": new_price})
        return jsonify({"error": "Item not found"}), 404
    except ValueError:
        return jsonify({"error": "Invalid price format"}), 400

# Delete a menu item
@app.route('/menu/<string:item_name>', methods=['DELETE'])
def delete_menu_item(item_name):
    if MenuManager.delete(item_name):
        return jsonify({"message": "Item deleted successfully"})
    return jsonify({"error": "Item not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
