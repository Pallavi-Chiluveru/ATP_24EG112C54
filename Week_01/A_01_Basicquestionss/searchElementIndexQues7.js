//search element index in array
let arr = [78, 82, 91,89,50,30]
let elementToSearch = 89
let index = -1
for(let i=0; i<arr.length; i++)
{
    if(arr[i] === elementToSearch)
    {
        index = i
        break
    }
}
if(index !== -1)
console.log("Element " + elementToSearch + " found at index " + index)  
else
console.log("Element " + elementToSearch + " not found in the array")
    