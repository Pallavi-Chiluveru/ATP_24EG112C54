
// find the smallest element in the marks
let marks=[90,78,65,98];
//let small=marks[0]
// for(let i=0;i<marks.length;i++)
// {
//     if(marks[i]<small)
//         small=marks[i];
// }
// console.log(small)

//reduce method
let s = marks.reduce((acc,curr)=> acc>curr?curr:acc)
console.log(s)