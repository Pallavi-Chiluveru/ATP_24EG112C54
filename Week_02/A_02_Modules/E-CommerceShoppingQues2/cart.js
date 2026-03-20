

//           ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            const product = getProductById(productId);
                           if (!product) {
                           return { status: "failed", message: "Product not found" };
                          }

                            // 2. Check stock availability
                             if (!checkStock(productId, quantity)) {
                             return { status: "failed", message: "Insufficient stock" };
                              }

                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                              // Check if product already in cart
                          const existingItem = cartItems.find(item => item.productId === productId);

                              if (existingItem) {
                              if (!checkStock(productId, existingItem.quantity + quantity)) {
                               return { status: "failed", message: "Insufficient stock" };
                               }
                            existingItem.quantity += quantity;
                           } else {
                          // Add new item to cart
                         cartItems.push({
                         productId: product.id,
                         name: product.name,
                         price: product.price,
                         category: product.category,
                         quantity: quantity
                         });
                        }
                    return { status: "success", message: "Product added to cart" };
                   }

                            // 4. Return success/error message
                          
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            const index = cartItems.findIndex(item => item.productId === productId);
                            if (index === -1) {
                             return { status: "failed", message: "Product not found in cart" };
                              }
                            cartItems.splice(index, 1);
                           return { status: "success", message: "Product removed from cart" };
                            }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                             const item = cartItems.find(item => item.productId === productId);
                             if (!item) {
                             return { status: "failed", message: "Product not found in cart" };
                             }
                             // Check stock before updating
                             if (!checkStock(productId, newQuantity)) {
                              return { status: "failed", message: "Insufficient stock" };
                            } 
                            item.quantity = newQuantity;
                           return { status: "success", message: "Quantity updated" };
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems;
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                            let total = 0;
                            cartItems.forEach(item => {
                                total += item.price * item.quantity;
                            });
                             return total;
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems = [];
                          }











