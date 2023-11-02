

function isEven(number){
    return number % 2 === 0;
}

function fibonacci(n) {
    let fib = [1, 1];
    while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
  }

function orderNumber(arr){
    return arr.sort((a, b) => a - b);
}


module.exports ={
    isEven,
    fibonacci,
    orderNumber
}