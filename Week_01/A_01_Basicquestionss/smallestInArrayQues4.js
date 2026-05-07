//smallest in array
let arr = [78, 82, 91,89,50,30]
let smallest = arr[0]
for(let i=1; i<arr.length; i++)
{
    if(arr[i]<smallest)
    smallest = arr[i]
}
console.log("Smallest number in the array is " + smallest)