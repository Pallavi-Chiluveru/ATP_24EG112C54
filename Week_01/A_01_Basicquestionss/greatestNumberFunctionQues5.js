//greatest number in array using function
let arr = [78, 82, 91, 89, 50, 30];

function findGreatest(arr) {
    let greatest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
        }
    }
    return greatest;
}

console.log("Greatest number in the array is " + findGreatest(arr));