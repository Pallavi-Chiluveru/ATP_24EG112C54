/*write  a function that receives an array and search an element as args 
and returns the index of that search element in the array .
  It should return "not found " when search element not found*/

 function findIndex(arr,search)
 {
  for(let i=0;i<arr.length;i++){
    if(arr[i]==search){
      return `Index of search element ${arr[i]} is ${i} `;
    }
  }
  return "not found";
 }
 let arr = [10,20,30,40,50]
 let search = 50
 let ans = findIndex(arr,search)
 console.log(ans)