// 💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter


function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}


console.log(sum(1, 2, 3));      // 6
console.log(sum(10, 20, 30, 5)); // 65
console.log(sum(5, 15));        // 20