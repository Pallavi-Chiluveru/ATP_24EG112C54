// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Tasks:
//     1. Use filter() to get only inStock products
        let instockPro = cart.filter(cart=>cart.inStock)
        console.log("InStock products : ",instockPro)

//     2. Use map() to create a new array with:  { name, totalPrice }
        let newArray = cart.map(cart=>({
          name : cart.name,
          totalPrice : cart.price*cart.quantity
        }))
        console.log("name and totalprice only : ",newArray) 

//     3. Use reduce() to calculate grand total cart value
        let grandTotal = cart.reduce((acc,res)=>acc+res.price*res.quantity,0)
        console.log("Calculate grand total cart value : ",grandTotal)

//     4. Use find() to get details of "Mouse"
        let findMouse = cart.find(cart=>cart.name=="Mouse")
        console.log("Mouse details : ",findMouse)

//     5. Use findIndex() to find the position of "Keyboard"
        let indexKey = cart.findIndex(cart=>cart.name=="Keyboard")
        console.log("Find index of Keyboard : ",indexKey)