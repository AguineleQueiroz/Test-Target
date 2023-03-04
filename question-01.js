// Question 01 - Summation
const summation = (index) => {
    let sum = 0;
    let k = 0;
    while(k < index){
        k = k + 1
        sum = sum + k
    }
    return sum;
}

console.log(summation(13)); // result 91