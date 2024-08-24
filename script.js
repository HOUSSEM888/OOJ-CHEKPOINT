// Product Class
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem Class
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart Class
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to add items to the cart
    addItem(product, quantity) {
      // Check if the item is already in the cart
      const existingItem = this.items.find(item => item.product.id === product.id);
  
      if (existingItem) {
        // If item exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If item does not exist, add it to the cart
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove items from the cart by product ID
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice().toFixed(2)}`);
      });
      console.log(`Total items: ${this.getTotalItems()}`);
    }
  }
  
  // Testing the implementation
  
  // Creating products
  const ACER = new Product(1, "ACER", 178.99);
  const LENOVO = new Product(2, "LENOVO", 212.29);
  const ASUS = new Product(3, "ASUS", 398.89);
  
  // Creating a shopping cart
  const cart = new ShoppingCart();
  
  // Adding items to the cart
  cart.addItem(ACER, 3); // 3 PC ACER
  cart.addItem(LENOVO, 2); // 2 PC LENOVO
  cart.addItem(ASUS, 5); // 5 PC ASUS
  
  // Displaying the cart
  cart.displayCart();
  
  // Removing an item from the cart
  cart.removeItem(2); // Removing PC  LENOVO
  
  // Displaying the cart after removal
  cart.displayCart();
  