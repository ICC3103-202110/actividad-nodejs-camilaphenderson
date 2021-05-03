function fibonacci(num){
    if (num == 0 || num == 1){
        return num
    } 
    return fib(num-1) + fib(nu-2)
}
    

//console.log(fibo(-1));
//console.log(fibo(6));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', num => {
    console.log(fibonacci(num));
    readline.close();
});