

const products = require('./products');

// Function to find a product by name
function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log(` Product found:\nName: ${product.name}\nPrice: $${product.price}\nCategory: ${product.category}\n`);
  } else {
    console.log(` Product "${productName}" not found.\n`);
  }
}

findProductByName("Laptop");
findProductByName("T-Shirt");
findProductByName("Phone"); // Should not be found
findProductByName("Book");


