//sum of array function
let arr = [78, 82, 91,89,45,30]
function sumOfArray(arr) {
    let sum = 0
    for(let i=0; i<arr.length; i++)
    sum = sum + arr[i]

    return sum
}
console.log("Sum of array is " + sumOfArray(arr))
