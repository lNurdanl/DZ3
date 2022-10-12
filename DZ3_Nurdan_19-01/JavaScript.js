// Задача 1
let number
function GGG() {
    if (number > 0){
        alert('!');
    }
    else{
        alert('!!');
    }
}
GGG()


// Задача 2
let massiv = []
function addindX() {
    let i = 0
    let a = 0
    while (i < 10) {
        massiv[a] = 'x'
        i = i + 1
        a = a + 1
    }
}
addindX()
console.log(massiv)

// Задача 3
let HowMuchFuncCalled = 0;

function FuncCounter()
{
    HowMuchFuncCalled = HowMuchFuncCalled + 1;
    alert("Эта функция вызвалась: "+ HowMuchFuncCalled + " раз" );
}

FuncCounter()
FuncCounter()
FuncCounter()
FuncCounter()
