"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 *
 * @param {number} num
 * @returns cube of a number
 */
function cubeNumber(num) {
    return Math.pow(num, 3);
}

console.log(cubeNumber(5));
