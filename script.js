function changeColor () {
    document.getElementById("text").style.color = "#00db0a";
}

//10 functions

function add(firstOperand, secondOperand) {
    let result = firstOperand + secondOperand;
    return result;
    console.log(result);
}

function subjection(firstOperand, secondOperand) {
    let result = firstOperand - secondOperand;
    return result;
    console.log(result);
}

function multiply(firstOperand, secondOperand) {
    let result = firstOperand * secondOperand;
    return result;
    console.log(result);
}

function divide(firstOperand, secondOperand) {
    let result = firstOperand / secondOperand;
    return result;
    console.log(result);
}

function countArrLength(arr) {
    let i = arr.length;
    console.log(i);
}

function fillArr (arr){
    let a = arr.fill(1,0,10);
    console.log(a);
}

function reverseArr (arr){
    let a = arr.reverse();
    console.log(a);
}

function splitArr (arr){
    let a = names.split(', ');
    console.log(a);
}

function joinArr (arr){
    let a = arr.join(';');
    console.log(a);
}


function concatArr (arr){
    let a = arr.concat(11,12,13,14,15);
    console.log(a);
}








let firstArr = [1,2,3,4,5,6,7,8,9,10];
let names = 'Маша, Петя, Марина, Василий';





countArrLength(firstArr);
reverseArr(firstArr);
splitArr(firstArr);
joinArr(firstArr);
concatArr(firstArr);
fillArr(firstArr);





