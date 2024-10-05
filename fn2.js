function sum (a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'Both arguments must be numbers';
    }
    return a + b;
}

console.log(sum(10,90));
console.log(sum("hi",90));