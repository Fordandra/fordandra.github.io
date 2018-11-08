let runningTotal = 0;
let previousOperator = null;
let buffer="0";

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)){
        //this is not a number
        handleSymbol(value);
    } else {
        //this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleNumber(value) {
    //console.log('Value', value);
    if (buffer === "0"){
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleSymbol(value){
   // console.log(value);
    switch(value){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(value);
            break;
        case '=':
        console.log('=')
            if (previousOperator === null){
                //you need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1){
            buffer = '0';
            } else{
            buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
    }
}

function flushOperation(intBuffer) {
//    if (previousOperator === '&plus'){
//        runningTotal += intBuffer;}

console.log(intBuffer, runningTotal)
    switch (previousOperator){
        case '+':
            runningTotal += intBuffer;
            break;
        case '-':
            runningTotal -= intBuffer;
            break;
        case '÷':
            runningTotal /= intBuffer;
            break;
        case '×':
            runningTotal *= intBuffer;
            break;

    }
}


function handleMath(value) {
    if (buffer === '0'){
        return; //do nothing
    } else {value
        buffer += value;
    }

    const intBuffer = parseInt(buffer)

    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer)
    }

    previousOperator = value;

    buffer = '0';
}


function init () {
    document.querySelector('.calc-buttons')
        .addEventListener('click',function(event) {
            buttonClick(event.target.innerText);
        }) 
    
}

init();