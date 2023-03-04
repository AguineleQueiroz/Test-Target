// Question 05 - Revert renderToString

const revertString = (str) => {
    let newString = '';
    const length = str.length - 1;
    for (let index = length; index >= 0; index--) {
        newString += str[index];        
    }
    return newString;
}

console.log(revertString('Hello')) // olleH