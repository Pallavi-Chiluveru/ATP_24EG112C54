//Write a function that receives an array as arg and return their sum 

function Sum(arr)
{    let s=0;
    for(let i=0;i<arr.length;i++)
    s=s+arr[i];
 return s;

}

let a=[10,20,30,40]
let result=Sum(a)
 console.log(result)