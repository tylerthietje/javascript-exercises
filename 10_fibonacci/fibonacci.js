const fibonacci = function(n) {
    // function fib(n){
    let arr = [0, 1];
    if (n < 0) return "OOPS";
        for (let i = 2; i < n + 1; i++){
            arr.push(arr[i - 2] + arr[i -1])
        }
    return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
