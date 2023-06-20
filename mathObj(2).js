function calculateSquareRootOfSumOfSquares(arr){
    let sumOfSquares = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOfSquares += Math.pow(arr[i], 2);
    }

    const result = Math.sqrt(sumOfSquares);
    return result;
}

let arr = [10, 4, 5, 6, 2];

console.log(calculateSquareRootOfSumOfSquares(arr))