// Question 02 - Fibonacci Sequence

const valueExist = (yourValue, previousResults) => {
    const exist = Object.values(previousResults).includes(yourValue)
    const successMsg = `The value ${yourValue} exist in the fibonacci sequence!`;
    const failedMsg = `The value ${yourValue} does not exist in the fibonacci sequence!`;
    exist ? console.log(successMsg) : console.log(failedMsg);;
}

const fibonacci = (num, previousResults) => {
    // retorna resultado se numero da sequencia já foi calculado.
    if(previousResults[num]) return previousResults[num];

    if(num <= 1) return 1;

    return previousResults[num] = fibonacci(num - 1, previousResults) + fibonacci(num - 2, previousResults);
}

const fibonacciSeq = (yourValue) => {
    let index = 0;
    let previousResults = {'0': 0, '1': 1};

    while(true){
        const result = fibonacci(index, previousResults);
        if(result < yourValue){
            index++;
            continue;
        }else{
            break;
        }
    }
    valueExist(yourValue, previousResults); 
}

fibonacciSeq(21)