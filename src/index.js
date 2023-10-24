

function isEven(number){
    if (number%2==0){
        return true;
    } else {
        return false;
    }       
}

function fibonacci(number){
    i = 1;
    j = i;
    var arrai = [];
    while (i < number){
        arrai.push(i);
        i+=j;
        arrai.push(j);
        j+=i;
    }
    return arrai;
    
}
function orderNumber(){
order.sort(function(a, b) {
        return a - b;
      });}



module.exports ={
    isEven,
    fibonacci,
    orderNumber
}
