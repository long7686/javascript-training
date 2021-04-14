//Bai1 Array
function calculateFactorial(num){
    var factorial = 1;
    if (num > 1) {
        for (i = 1; i<=num; i++){
            factorial *= i;
        }
    }
    else if (num < 0){
        factorial = null;
    }
    return console.log(factorial)
}
calculateFactorial(5)



//Bai2 Array
function getRandomInt(min, max){
    var range = max - min;
    return console.log(Math.round(Math.random() * range) + min)
}
getRandomInt(4,10)



//Bai3 Array
function getRandomArr(arr){
    var randomIndex = Math.round(Math.random() * (arr.length -1))
    return console.log(arr[randomIndex])
}
getRandomArr(['asd',3431,5123,'long',123])



//Bai4 Array
function checkMissingElement(arr1, arr2){
    var arr = [];
    for (i = 0; i < arr2.length; i++){
        if (arr1.includes(arr2[i])){
            delete arr2[i]
            arr2.pop();
            arr2.shift();
        }
    }
    return console.log(arr2)
}
checkMissingElement([7,2,5,3,5,3], [7,2,5,4,6,3,5,3])
