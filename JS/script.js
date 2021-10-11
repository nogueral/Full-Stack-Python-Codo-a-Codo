/* 
21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola.
*/

function Minimo(array){
    return Math.min(...array);
}

let array = [18,23,45,3,9,7,5];

console.log(Minimo(array));

/*
22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola.
*/

function Maximo(array){
    return Math.max(...array);
}

console.log(Maximo(array));